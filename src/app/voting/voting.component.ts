import { Component } from '@angular/core';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent {

  
  constructor() { }
  
  openVoting(url: any) {
    window.open(url, '_blank');
  }
}