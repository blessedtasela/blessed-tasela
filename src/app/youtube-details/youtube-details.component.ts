import { Component } from '@angular/core';

@Component({
  selector: 'app-youtube-details',
  templateUrl: './youtube-details.component.html',
  styleUrls: ['./youtube-details.component.css']
})
export class YoutubeDetailsComponent {
  tools = [
    { id: 3, tool: 'JavaScript' },
    { id: 4, tool: 'Angular' },
    { id: 5, tool: 'Typescript' },
    { id: 7, tool: 'HTML' },
    { id: 8, tool: 'CSS' },
    { id: 9, tool: 'Tailwind' },
    { id: 9, tool: 'AWS' },
  ]
  
  constructor() { }
  
  openYoutubeClone(url: any) {
    window.open(url, '_blank');
  }
}
