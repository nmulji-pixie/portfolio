import { Component, signal } from '@angular/core';
import { NAV_LINKS } from '../../data/portfolio.data';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  protected readonly navLinks = NAV_LINKS;
  protected readonly activeFragment = signal('home');

  protected setActive(fragment: string): void {
    this.activeFragment.set(fragment);
  }
}
