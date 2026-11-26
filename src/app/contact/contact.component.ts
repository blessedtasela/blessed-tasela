import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  socials = [
    { label: 'GitHub', handle: '@blessedtasela', url: 'https://github.com/blessedtasela', icon: 'github' },
    { label: 'LinkedIn', handle: 'blessed-tasela', url: 'https://www.linkedin.com/in/blessed-tasela-b9071920a/', icon: 'linkedin' },
    { label: 'Instagram', handle: '@blessed_tasela', url: 'https://www.instagram.com/blessed_tasela/', icon: 'instagram' },
    { label: 'Facebook', handle: '@tasela.berliz', url: 'https://www.facebook.com/tasela.berliz/', icon: 'facebook' },
  ];
}
