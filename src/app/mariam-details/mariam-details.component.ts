import { Component } from '@angular/core';

@Component({
  selector: 'app-mariam-details',
  templateUrl: './mariam-details.component.html',
  styleUrls: ['./mariam-details.component.css']
})
export class MariamDetailsComponent {
  tools = [
    { id: 3, tool: 'JavaScript' },
    { id: 4, tool: 'Angular' },
    { id: 5, tool: 'Typescript' },
    { id: 7, tool: 'HTML' },
    { id: 8, tool: 'CSS' },
    { id: 9, tool: 'Tailwind' },
    { id: 9, tool: 'Netlify' },
  ]

  constructor() { }

  openVoting(url: any) {
    window.open(url, '_blank');
  }
}
