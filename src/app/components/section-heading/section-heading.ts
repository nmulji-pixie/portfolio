import { Component, input } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-section-heading',
  imports: [ScrollRevealDirective],
  templateUrl: './section-heading.html',
  styleUrl: './section-heading.scss',
})
export class SectionHeading {
  readonly title = input.required<string>();
}
