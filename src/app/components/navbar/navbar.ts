import { Component, HostListener, signal } from '@angular/core';
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
  protected readonly menuOpen = signal(false);

  protected setActive(fragment: string): void {
    this.activeFragment.set(fragment);
    this.menuOpen.set(false);
  }

  protected onNavClick(event: Event, fragment: string): void {
    event.preventDefault();
    this.setActive(fragment);

    const scrollToSection = () => {
      const target = document.getElementById(fragment);
      if (!target) {
        return;
      }

      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', `#${fragment}`);
    };

    requestAnimationFrame(() => requestAnimationFrame(scrollToSection));
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  @HostListener('window:resize')
  protected onResize(): void {
    if (window.innerWidth > 768) {
      this.menuOpen.set(false);
    }
  }
}
