import { Component } from '@angular/core';

interface ProjectLink {
  label: string;
  url: string;
}

interface Project {
  name: string;
  image: string;
  summary: string;
  stack: string[];
  links: ProjectLink[];
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  berlizStack = ['Spring Boot', 'PostgreSQL', 'Angular', 'JWT', 'WebSockets', 'Stripe', 'React Native'];

  projects: Project[] = [
    {
      name: 'Fight Fusion',
      image: 'assets/fight-fusion-lg.png',
      summary: 'A 2D combat game against a computer opponent. Game state, collision detection and round logic, written from scratch.',
      stack: ['JavaScript', 'jQuery'],
      links: [
        { label: 'Play', url: 'https://fight-fusion.netlify.app' },
        { label: 'Code', url: 'https://github.com/blessedtasela/fight-fusion' },
      ],
    },
    {
      name: 'Simply Assignment Tracker',
      image: 'assets/simply-assign.png',
      summary: 'Track assignments and due dates, filter them and mark them done. Data is kept in local storage.',
      stack: ['React', 'Zustand', 'TanStack Router', 'Vite', 'Tailwind'],
      links: [
        { label: 'Try it', url: 'https://simply-at.netlify.app' },
        { label: 'Code', url: 'https://github.com/blessedtasela/simply-assignment-tracker' },
      ],
    },
    {
      name: 'EasyLife',
      image: 'assets/easyLifelogin template.jpg',
      summary: 'My final-year project at SUPMTI: a Java shopping application with a three-tier architecture, built in Scrum.',
      stack: ['Java', 'MySQL'],
      links: [
        { label: 'Code', url: 'https://github.com/blessedtasela/EasyLife' },
      ],
    },
  ];
}
