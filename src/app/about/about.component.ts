import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  skills = [
    { id: 1, skill: 'Java' },
    { id: 2, skill: 'SpringBoot' },
    { id: 3, skill: 'JavaScript' },
    { id: 4, skill: 'Angular' },
    { id: 5, skill: 'Typescript' },
    { id: 6, skill: 'Scrum' },
    { id: 7, skill: 'HTML 5' },
    { id: 8, skill: 'CSS' },
    { id: 9, skill: 'Tailwind' },
    { id: 10, skill: 'Bootstrap' },
    { id: 11, skill: 'C' },
    { id: 12, skill: 'Python' },
    { id: 13, skill: 'Git/GitHub' },
    { id: 14, skill: 'AWS' },
    { id: 15, skill: 'Docker' },
    { id: 16, skill: 'Kubernetes' },
    { id: 17, skill: 'React' },
    { id: 18, skill: 'React Native' },
    { id: 19, skill: 'ReactJS' },
    { id: 20, skill: 'Next.js' },
    { id: 21, skill: 'Vite' },
    { id: 22, skill: 'Heroku' },
    { id: 23, skill: 'Android Studio' },
  ];
  
  constructor() { }
  
  openBerliz(url: any) {
    window.open(url, '_blank');
  }

  openUrl(url: any) {
    window.open(url, '_blank');
  } 
}
