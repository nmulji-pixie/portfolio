import { Component, HostListener, OnInit } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Projects } from './components/projects/projects';
import { Experience } from './components/experience/experience';
import { Skills } from './components/skills/skills';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, Projects, Experience, Skills, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  ngOnInit(): void {
    this.updateScrollParallax();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.updateScrollParallax();
  }

  private updateScrollParallax(): void {
    const y = window.scrollY;
    const root = document.documentElement;
    root.style.setProperty('--scroll-parallax-1', `${y * 0.06}px`);
    root.style.setProperty('--scroll-parallax-2', `${y * -0.04}px`);
    root.style.setProperty('--scroll-parallax-3', `${y * 0.05}px`);
  }
}
