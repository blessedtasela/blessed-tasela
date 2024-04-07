import { Component } from '@angular/core';

@Component({
  selector: 'app-berliz-details',
  templateUrl: './berliz-details.component.html',
  styleUrls: ['./berliz-details.component.css']
})
export class BerlizDetailsComponent {
  tools = [
    { id:1, tool: 'Java'},
    { id:2, tool: 'SpringBoot'},
    { id:3, tool: 'JavaScript'},
    { id:4, tool: 'Angular'},
    { id:5, tool: 'Typescript'},
    { id:6, tool: 'Scrum'},
    { id:7, tool: 'HTML'},
    { id:8, tool: 'CSS'},
    { id:9, tool: 'Tailwind'},
    { id:10, tool: 'Web Socket'},
    { id:11, tool: 'Postgres SQL'},
    { id:11, tool: 'AWS'},
  ]
  constructor() { }
  
  openVoting(url: any) {
    window.open(url, '_blank');
  }
}
