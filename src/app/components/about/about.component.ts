import {Component} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor() { }
  about = {
    name: 'Shantanu Gontia',
    address: 'Bengaluru',
    age: '30',
    email: 'shaan.ce@gmail.com',
    contact: '+91-8867635500',
    description: 'Hello! I am <strong>Shantanu Gontia </strong>. Web Developer with over 6\n' +
      '          years of experience. Experienced with all stages of the development\n' +
      '          cycle for dynamic web projects. Having an in-depth knowledge including\n' +
      '          advanced <strong>HTML5, CSS3, JavaScript, jQuery, AngularJS, Angular and Swift</strong>.\n' +
      '          I aim to make a difference through my creative solution.'
  };
}
