import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

import { CONTACT_EMAIL } from '../../data/portfolio.data';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { SectionHeading } from '../section-heading/section-heading';

const FORM_ENDPOINT = `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`;

interface FormSubmitResponse {
  success: boolean | string;
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

  protected readonly contactEmail = CONTACT_EMAIL;
  protected readonly submitting = signal(false);
  protected readonly submitStatus = signal<'idle' | 'success' | 'error'>('idle');
  protected readonly submitMessage = signal('');

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.maxLength(100)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.maxLength(200)]],
    message: ['', [Validators.required, Validators.maxLength(1000)]],
    website: [''],
  });

  protected async onSubmit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    if (this.form.controls.website.value.trim()) {
      this.submitStatus.set('success');
      this.submitMessage.set('Thanks — your message was sent. I will reply soon.');
      this.form.reset();
      return;
    }

    this.submitting.set(true);
    this.submitStatus.set('idle');
    this.submitMessage.set('');

    const { name, email, subject, message } = this.form.getRawValue();

    const payload = {
      name,
      email,
      subject,
      message,
      _replyto: email,
      _subject: `[Portfolio] ${subject}`,
      _template: 'table',
      _captcha: 'false',
      _honey: '',
    };

    try {
      const res = await firstValueFrom(
        this.http.post<FormSubmitResponse>(FORM_ENDPOINT, payload, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }),
      );

      const ok = res.success === true || res.success === 'true';
      if (ok) {
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
        `Could not send right now. Email me directly at ${CONTACT_EMAIL}.`,
      );
    } finally {
      this.submitting.set(false);
    }
  }
}
