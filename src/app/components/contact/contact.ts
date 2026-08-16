import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

import { environment } from '../../../environments/environment';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { SectionHeading } from '../section-heading/section-heading';

const WEB3FORMS_URL = 'https://api.web3forms.com/submit';

interface Web3FormsResponse {
  success: boolean;
  message?: string;
}

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, SectionHeading, ScrollRevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);

  protected readonly submitting = signal(false);
  protected readonly submitStatus = signal<'idle' | 'success' | 'error'>('idle');
  protected readonly submitMessage = signal('');

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.maxLength(100)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.maxLength(200)]],
    message: ['', [Validators.required, Validators.maxLength(1000)]],
  });

  protected async onSubmit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const key = environment.web3formsAccessKey?.trim();
    if (!key) {
      this.submitStatus.set('error');
      this.submitMessage.set(
        'Contact form is not configured yet. Add your Web3Forms access key in src/environments/environment.ts (see comment in that file).'
      );
      return;
    }

    this.submitting.set(true);
    this.submitStatus.set('idle');
    this.submitMessage.set('');

    const { name, email, subject, message } = this.form.getRawValue();

    const payload = {
      access_key: key,
      subject: `[Portfolio] ${subject}`,
      name,
      email,
      message: `From: ${name} <${email}>\nSubject: ${subject}\n\n${message}`,
      replyto: email,
    };

    try {
      const res = await firstValueFrom(
        this.http.post<Web3FormsResponse>(WEB3FORMS_URL, payload, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        })
      );

      if (res.success) {
        this.submitStatus.set('success');
        this.submitMessage.set('Thanks — your message was sent. I will reply soon.');
        this.form.reset();
      } else {
        this.submitStatus.set('error');
        this.submitMessage.set(res.message ?? 'Something went wrong. Please try again.');
      }
    } catch {
      this.submitStatus.set('error');
      this.submitMessage.set(
        'Could not send right now. Check your connection or try again in a moment.'
      );
    } finally {
      this.submitting.set(false);
    }
  }
}
