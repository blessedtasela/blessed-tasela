import { Component } from '@angular/core';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent {
  constructor() { }
  
  openVoting(url: any) {
    window.open(url, '_blank');
  }
}
