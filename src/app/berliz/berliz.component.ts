import { Component } from '@angular/core';

@Component({
  selector: 'app-berliz',
  templateUrl: './berliz.component.html',
  styleUrls: ['./berliz.component.css']
})
export class BerlizComponent {

  constructor() { }
  
  openVoting(url: any) {
    window.open(url, '_blank');
  }
}
