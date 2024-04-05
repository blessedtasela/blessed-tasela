import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
skills = [
  { id:1, skill: 'Java'},
  { id:1, skill: 'SpringBoot'},
  { id:1, skill: 'JavaScript'},
  { id:1, skill: 'Angular'},
  { id:1, skill: 'Typescript'},
  { id:1, skill: 'Scrum'},
  { id:1, skill: 'HTML'},
  { id:1, skill: 'CSS'},
  { id:1, skill: 'Tailwind'},
  { id:1, skill: 'Bootstrap'},
  { id:1, skill: 'C'},
  { id:1, skill: 'Python'},
]
  constructor() { }
  
  openBerliz(url: any) {
    window.open(url, '_blank');
  }
}
