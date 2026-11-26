import { Component } from '@angular/core';
import { CV_PATH, scrollToSection } from '../scroll-to-section';

interface RouteStop {
  when: string;
  place: string;
  detail: string;
  upcoming?: boolean;
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  cvPath = CV_PATH;

  // The route from the About section, as a timeline. Only verified dates.
  route: RouteStop[] = [
    { when: 'Start', place: 'Nigeria', detail: 'Where it began.' },
    { when: '2020 – 2023', place: 'Rabat, Morocco', detail: 'Licence in Computer Systems Engineering, SUPMTI. Mention Très Bien.' },
    { when: 'Now', place: 'Vancouver, Canada', detail: 'BCIT web development. Building Berliz, live with paying clients.' },
    { when: 'Fall 2027', place: 'Graduate study', detail: 'AI and machine learning. Applying now.', upcoming: true },
  ];

  scrollTo(id: string, event: Event): void {
    scrollToSection(id, event);
  }
}
