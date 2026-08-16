import { Component } from '@angular/core';
import { SOCIAL_LINKS } from '../../data/portfolio.data';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly socialLinks = SOCIAL_LINKS;
  protected readonly year = new Date().getFullYear();
}
