import { Component } from '@angular/core';

@Component({
  selector: 'app-voting-details',
  templateUrl: './voting-details.component.html',
  styleUrls: ['./voting-details.component.css']
})
export class VotingDetailsComponent {

  constructor() { }
  
  openVoting(url: any) {
    window.open(url, '_blank');
  }
}
