import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contacts = [
    {
      'id': 1,
      'url': 'mailto:taselablessed@gmail.com?subject=Book an apointment',
      'message': 'Email',
      'icon': 'mail'
    },
    {
      'id': 2,
      'url': 'https://www.facebook.com/tasela.berlizyo/',
      'message': 'Facebook',
      'icon': 'facebook'
    },
    {
      'id': 3,
      'url': 'https://www.linkedin.com/in/blessed-tasela-b9071920a/',
      'message': 'Linkedin',
      'icon': 'linkedIn'
    },
    {
      'id': 4,
      'url': 'https://github.com/blessedtasela',
      'message': 'github',
      'icon': 'github'
    },
    {
      'id': 5,
      'url': 'https://www.instagram.com/tasela_berliz/',
      'message': 'Instagrm',
      'icon': 'instagram'
    },
    {
      'id': 6,
      'url': 'https://wa.me/+12369900823?text=Hi Blessed, I would like to...',
      'message': 'Whatsapp',
      'icon': 'message-circle'
    }
  ]

  constructor() { }
}
