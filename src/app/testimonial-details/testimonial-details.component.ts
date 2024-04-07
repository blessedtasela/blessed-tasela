import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial-details',
  templateUrl: './testimonial-details.component.html',
  styleUrls: ['./testimonial-details.component.css']
})
export class TestimonialDetailsComponent {
  testimonials = [
    {
      'id': 1,
      'name': 'Blessed Isiaka',
      'imgLink': '../../assets/mariam.jpeg',
      'testimonial': 'Blessed Tasela\'s dedication and attention to detail in crafting my landing page ' +
        'surpassed all expectations.Their proactive approach, coupled with a deep understanding of my vision, ' +
        'resulted in a stunning design that effectively communicates my message. Working with Blessed was a ' +
        'pleasure, and I highly recommend their top- notch design expertise.Thank you, Blessed, for bringing ' +
        'my vision to life so remarkably!',
      'rating': 5
    },
    {
      'id': 2,
      'name': 'Wale',
      'imgLink': '../../assets/files/jeniffer.jpeg',
      'testimonial': 'I\'ve had the pleasure of working with Blessed, and I must say, she\'s excellent. ' +
        'Not only is she a great community manager, but she\'s also a wonderful team leader. Working with ' +
        'Blessed has been a smooth and professional experience, and I would gladly collaborate with her ' +
        'again in the future',
      'rating': 4.5
    },
    {
      'id': 3,
      'name': '????',
      'imgLink': '../../assets/files/williams.jpeg',
      'testimonial': 'Working with Blessed has been an absolute pleasure. Her dedication, professionalism, ' +
        'and expertise are truly commendable. Blessed not only excels at what she does but also goes above and ' +
        'beyond to ensure the success of every project. Her attention to detail and ability to understand client ' +
        'needs make her a valuable asset to any team. I assure you, collaborating with her is nothing short of' +
        'amazing. I highly recommend Blessed for her exceptional skills and unwavering commitment to excellence.',
      'rating': 4.9
    },
  ]
  constructor() { }
}
