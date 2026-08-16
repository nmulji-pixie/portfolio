import { Component } from '@angular/core';
import { PROJECTS } from '../../data/portfolio.data';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { SectionHeading } from '../section-heading/section-heading';
import { techIconSrc } from '../../utils/tech-icon';

@Component({
  selector: 'app-projects',
  imports: [SectionHeading, ScrollRevealDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly projects = PROJECTS;
  protected readonly iconSrc = techIconSrc;
}
