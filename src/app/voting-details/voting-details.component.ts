import { Component } from '@angular/core';

@Component({
  selector: 'app-voting-details',
  templateUrl: './voting-details.component.html',
  styleUrls: ['./voting-details.component.css']
})
export class VotingDetailsComponent {
  tools = [
    { id: 3, tool: 'JavaScript' },
    { id: 4, tool: 'Angular' },
    { id: 5, tool: 'Typescript' },
    { id: 7, tool: 'HTML' },
    { id: 8, tool: 'CSS' },
    { id: 9, tool: 'Boostrap' },
  ]

  constructor() { }
  
  openVoting(url: any) {
    window.open(url, '_blank');
  }
}
