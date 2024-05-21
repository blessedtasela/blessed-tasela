import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  constructor(private elementRef: ElementRef) { }

  openBerliz(url: any) {
    window.open(url, '_blank');
  }

  scrollToComponent(componentId: string): void {
    const element = this.elementRef.nativeElement.querySelector('#' + componentId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
