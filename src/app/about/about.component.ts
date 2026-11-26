import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  skills = [
    'Java', 'Spring Boot', 'JavaScript', 'TypeScript', 'Angular', 'React', 'React Native', 'Next.js',
    'Python', 'C', 'PHP', 'HTML', 'CSS', 'Tailwind', 'Bootstrap', 'Git/GitHub', 'PostgreSQL', 'MySQL', 'Vite',
  ];
}
