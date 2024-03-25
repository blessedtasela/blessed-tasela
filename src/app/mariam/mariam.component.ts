import { Component } from '@angular/core';

@Component({
  selector: 'app-mariam',
  templateUrl: './mariam.component.html',
  styleUrls: ['./mariam.component.css']
})
export class MariamComponent {
  constructor() { }
  
  openVoting(url: any) {
    window.open(url, '_blank');
  }
}
