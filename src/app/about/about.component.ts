import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  skills = [
    { id: 1, skill: 'Java' },
    { id: 2, skill: 'Spring Boot' },
    { id: 3, skill: 'JavaScript' },
    { id: 4, skill: 'TypeScript' },
    { id: 5, skill: 'Angular' },
    { id: 6, skill: 'React' },
    { id: 7, skill: 'React Native' },
    { id: 8, skill: 'Next.js' },
    { id: 9, skill: 'Python' },
    { id: 10, skill: 'C' },
    { id: 11, skill: 'PHP' },
    { id: 12, skill: 'HTML' },
    { id: 13, skill: 'CSS' },
    { id: 14, skill: 'Tailwind' },
    { id: 15, skill: 'Bootstrap' },
    { id: 16, skill: 'Git/GitHub' },
    { id: 17, skill: 'PostgreSQL' },
    { id: 18, skill: 'MySQL' },
    { id: 19, skill: 'Vite' },
  ];
  
  constructor() { }
  
  openBerliz(url: any) {
    window.open(url, '_blank');
  }

  openUrl(url: any) {
    window.open(url, '_blank');
  } 
}
