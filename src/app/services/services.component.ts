import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  emailLink: string;

  constructor() {
    const email = 'taselablessed@gmail.com';
    const subject = encodeURIComponent("Software Enginner | Personal Trainer");
    const body = encodeURIComponent("Hello Blessed, I would like to...");
    this.emailLink = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  openWhatsapp() {

  }
}
