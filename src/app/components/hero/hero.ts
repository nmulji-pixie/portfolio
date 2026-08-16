import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { TYPING_ROLES } from '../../data/portfolio.data';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-hero',
  imports: [ScrollRevealDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit, OnDestroy {
  protected readonly roles = TYPING_ROLES;
  protected readonly displayText = signal('');
  protected readonly showCursor = signal(true);

  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timerId: ReturnType<typeof setTimeout> | null = null;
  private cursorIntervalId: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    this.type();
    this.cursorIntervalId = setInterval(() => {
      this.showCursor.update((v) => !v);
    }, 530);
  }

  ngOnDestroy(): void {
    if (this.timerId) clearTimeout(this.timerId);
    if (this.cursorIntervalId) clearInterval(this.cursorIntervalId);
  }

  private type(): void {
    const current = this.roles[this.roleIndex];
    const speed = this.isDeleting ? 40 : 80;

    if (!this.isDeleting) {
      this.displayText.set(current.substring(0, this.charIndex + 1));
      this.charIndex++;
      if (this.charIndex === current.length) {
        this.isDeleting = true;
        this.timerId = setTimeout(() => this.type(), 2000);
        return;
      }
    } else {
      this.displayText.set(current.substring(0, this.charIndex - 1));
      this.charIndex--;
      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      }
    }

    this.timerId = setTimeout(() => this.type(), speed);
  }
}
