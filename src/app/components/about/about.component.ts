import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  getAge() {
    const birthdate = new Date("1989/08/21");
    const cur = new Date();
    let diff: number = Number(cur) - Number(birthdate);
    return Math.floor(diff / 31557600000);
  }

  constructor() { }
  about = {
    name: 'Shantanu Gontia',
    address: 'Bengaluru',
    age: this.getAge(),
    email: 'shaan.ce@gmail.com',
    contact: '+91-8867635500',
    description: 'Hello! I am <strong>Shantanu Gontia </strong>. Web Developer with over 8\n' +
      '          years of experience. Experienced with all stages of the development\n' +
      '          cycle for dynamic web projects. I have an expertise in \n' +
      '          <strong>HTML5, CSS3, JavaScript, Typescript, React, AngularJS, Angular and Swift</strong>.\n' +
      '          I aim to make a difference through my creative solution.'
  };
}
