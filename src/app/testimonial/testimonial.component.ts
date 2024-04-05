import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent {
  testimonials = [
    {
      'id': 1,
      'name': 'Joy Alofokhai',
      'imgLink': '../../assets/mariam.jpeg',
      'testimonial': 'I am delighted to share my heartfelt testimonial for Blessed Tasela, the talented ' +
        'designer behind my exceptional landing page.Blessed\'s dedication to perfection and keen attention ' +
        'to detail have truly exceeded my expectations.From the outset, Blessed demonstrated a deep ' +
        'understanding of my vision and preferences, ensuring that every element of the landing page was ' +
        'meticulously crafted to reflect my brand identity.Their proactive approach in seeking feedback ' +
        'and making necessary adjustments along the way resulted in a final product that surpassed all my ' +
        'expectations.Not only does the landing page capture attention with its stunning design, but it ' +
        'also effectively communicates my message to visitors.The feedback from those who have seen the ' +
        'page has been overwhelmingly positive, with many expressing awe at the level of creativity and ' +
        'professionalism displayed.Working with Blessed has been an absolute pleasure, and I am immensely ' +
        'grateful for their talent, dedication, and collaborative spirit.I look forward to future ' +
        'collaborations and cannot recommend Blessed Tasela highly enough for anyone seeking top-notch ' +
        'design expertise.Thank you, Blessed, for bringing my vision to life in such a remarkable way!',
      'rating': 5
    },
    {
      'id': 2,
      'name': 'Jennifer Ochada',
      'imgLink': '../../assets/files/jeniffer.jpeg',
      'testimonial': 'I\'ve had the pleasure of working with Mariam, and I must say, she\'s excellent. ' +
        'Not only is she a great community manager, but she\'s also a wonderful team leader. Working with ' +
        'Mariam has been a smooth and professional experience, and I would gladly collaborate with her ' +
        'again in the future',
      'rating': 4.5
    },
    {
      'id': 3,
      'name': 'Williams Soduke',
      'imgLink': '../../assets/files/williams.jpeg',
      'testimonial': 'Working with Mariam has been an absolute pleasure. Her dedication, professionalism, ' +
        'and expertise are truly commendable. Mariam not only excels at what she does but also goes above and ' +
        'beyond to ensure the success of every project. Her attention to detail and ability to understand client ' +
        'needs make her a valuable asset to any team. I assure you, collaborating with her is nothing short of' +
        'amazing. I highly recommend Mariam for her exceptional skills and unwavering commitment to excellence.',
      'rating': 4.9
    },
  ]
  constructor() { }
}
