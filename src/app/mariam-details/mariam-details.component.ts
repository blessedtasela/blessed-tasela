import { Component } from '@angular/core';

@Component({
  selector: 'app-mariam-details',
  templateUrl: './mariam-details.component.html',
  styleUrls: ['./mariam-details.component.css']
})
export class MariamDetailsComponent {
  constructor() { }
  
  openVoting(url: any) {
    window.open(url, '_blank');
  }
}
