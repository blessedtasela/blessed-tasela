import { Component } from '@angular/core';

interface ProjectLink {
  label: string;
  url: string;
}

interface Project {
  name: string;
  image?: string;
  terminal?: string[];
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
      name: 'Simple Shell',
      terminal: [
        '$ gcc *.c -o hsh',
        '$ ./hsh',
        '$ setenv GREETING hello',
        '$ cd /tmp',
        '$ pwd',
        '/tmp',
        '$ exit',
      ],
      summary: 'A Unix shell in C, built with a teammate during the ALX programme. It parses commands, runs programs, and handles builtins, environment variables and history.',
      stack: ['C', 'Unix system calls'],
      links: [
        { label: 'Code', url: 'https://github.com/blessedtasela/simple_shell' },
      ],
    },
    {
      name: 'Fight Fusion',
      image: 'assets/fight-fusion.webp',
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
      summary: 'My final-year project at SUPMTI: a Java shopping application with a three-tier architecture and a MySQL database.',
      stack: ['Java', 'MySQL'],
      links: [
        { label: 'Code', url: 'https://github.com/blessedtasela/EasyLife' },
      ],
    },
  ];
}
