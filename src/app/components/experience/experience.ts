import { Component } from '@angular/core';
import { EXPERIENCES } from '../../data/portfolio.data';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { SectionHeading } from '../section-heading/section-heading';

@Component({
  selector: 'app-experience',
  imports: [SectionHeading, ScrollRevealDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  protected readonly experiences = EXPERIENCES;
}
