import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    {
      title: 'Software development',
      text: 'Web and mobile applications, front end to database, built to run in production.',
    },
    {
      title: 'Fitness and personal training',
      text: 'Training programs fitted to your goals, coached in person.',
    },
    {
      title: 'Online training',
      text: 'Coaching sessions online, scheduled around your week.',
    },
  ];
}
