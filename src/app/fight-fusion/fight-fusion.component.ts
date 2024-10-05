import { Component } from '@angular/core';

@Component({
  selector: 'app-fight-fusion',
  templateUrl: './fight-fusion.component.html',
  styleUrls: ['./fight-fusion.component.css']
})
export class FightFusionComponent {

  
  openUrl(url: any) {
    window.open(url, '_blank');
  } 
}
