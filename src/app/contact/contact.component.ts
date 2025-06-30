import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contacts = [
  {
    id: 1,
    url: 'mailto:taselablessed@gmail.com?subject=Book an appointment',
    message: 'Email',
    icon: 'mail',
    handle: 'taselablessed@gmail.com'
  },
  {
    id: 2,
    url: 'https://www.facebook.com/tasela.berliz/',
    message: 'Facebook',
    icon: 'facebook',
    handle: '@tasela.berliz'
  },
  {
    id: 3,
    url: 'https://www.linkedin.com/in/blessed-tasela-b9071920a/',
    message: 'LinkedIn',
    icon: 'linkedin',
    handle: 'blessed-tasela'
  },
  {
    id: 4,
    url: 'https://github.com/blessedtasela',
    message: 'GitHub',
    icon: 'github',
    handle: '@blessedtasela'
  },
  {
    id: 5,
    url: 'https://www.instagram.com/blessed_tasela/',
    message: 'Instagram',
    icon: 'instagram',
    handle: '@blessed_tasela'
  },
  {
    id: 6,
    url: 'https://wa.me/+12369900823?text=Hi Blessed, I would like to...',
    message: 'WhatsApp',
    icon: 'message-circle',
    handle: '+1 (236) 990-0823'
  }
];


  constructor() { }
}
