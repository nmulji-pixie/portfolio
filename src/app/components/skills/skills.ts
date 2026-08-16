import { Component } from '@angular/core';
import { TECH_STACK } from '../../data/portfolio.data';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { SectionHeading } from '../section-heading/section-heading';

@Component({
  selector: 'app-skills',
  imports: [SectionHeading, ScrollRevealDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  protected readonly categories = TECH_STACK;

  protected iconSrc(icon: string): string {
    return `tech/${icon}.svg`;
  }
}
