import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  contacts = [
    {
      'id': 1,
      'url': 'mailto:taselablessed@gmail.com',
      'message': 'Email',
      'icon': 'mail'
    },
    {
      'id': 2,
      'url': 'https://www.facebook.com/tasela.berliz/',
      'message': 'Facebook',
      'icon': 'facebook'
    },
    {
      'id': 3,
      'url': 'https://www.linkedin.com/in/blessed-tasela-b9071920a/',
      'message': 'Linkedin',
      'icon': 'linkedin'
    },
    {
      'id': 4,
      'url': 'https://github.com/blessedtasela',
      'message': 'Github',
      'icon': 'github'
    },
    {
      'id': 5,
      'url': 'https://www.instagram.com/blessed_tasela/',
      'message': 'Instagram',
      'icon': 'instagram'
    }
  ]

  constructor() { }
  openBlessedTasela() {
    window.open('https://www.linkedin.com/in/blessed-tasela-b9071920a/', '_blank');
  }

}
