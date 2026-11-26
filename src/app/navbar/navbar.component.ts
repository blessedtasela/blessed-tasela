import { Component, HostListener } from '@angular/core';
import { CV_PATH, scrollToSection } from '../scroll-to-section';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuOpen = false;
  cvPath = CV_PATH;

  links = [
    { id: 'work', label: 'Work' },
    { id: 'machine-learning', label: 'Machine learning' },
    { id: 'about', label: 'About' },
    { id: 'training', label: 'Training' },
    { id: 'contact', label: 'Contact' },
  ];

  go(id: string, event: Event): void {
    this.setMenu(false);
    scrollToSection(id, event);
  }

  setMenu(open: boolean): void {
    this.menuOpen = open;
    document.body.style.overflow = open ? 'hidden' : '';
  }

  @HostListener('document:keydown.escape')
  closeOnEscape(): void {
    if (this.menuOpen) this.setMenu(false);
  }
}
