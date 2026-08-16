import { Directive, ElementRef, inject, input, OnDestroy, OnInit } from '@angular/core';

export type ScrollRevealVariant = 'default' | 'card';

@Directive({
  selector: '[appScrollReveal]',
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  readonly variant = input<ScrollRevealVariant>('default', { alias: 'appScrollRevealVariant' });
  /** Stagger delay in ms */
  readonly delay = input(0, { alias: 'appScrollRevealDelay' });
  /** Card index for staggered column offset */
  readonly index = input(0, { alias: 'appScrollRevealIndex' });
  readonly columns = input(3, { alias: 'appScrollRevealColumns' });

  ngOnInit(): void {
    const element = this.el.nativeElement;
    const isCard = this.variant() === 'card';
    const visibleClass = isCard ? 'scroll-reveal-card--visible' : 'scroll-reveal--visible';

    element.classList.add(isCard ? 'scroll-reveal-card' : 'scroll-reveal');

    if (isCard) {
      const col = this.index() % this.columns();
      const offsetX = col === 0 ? '-28px' : col === this.columns() - 1 ? '28px' : '0px';
      element.style.setProperty('--reveal-index', String(this.index()));
      element.style.setProperty('--reveal-x', offsetX);
    }

    const delayMs = this.delay();
    if (delayMs > 0) {
      element.style.transitionDelay = `${delayMs}ms`;
    }

    if (typeof IntersectionObserver === 'undefined') {
      element.classList.add(visibleClass);
      return;
    }

    const threshold = isCard ? 0.15 : 0.12;
    const rootMargin = isCard ? '0px 0px -24px 0px' : '0px 0px -40px 0px';

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add(visibleClass);
        } else {
          element.classList.remove(visibleClass);
        }
      },
      { threshold, rootMargin }
    );

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
