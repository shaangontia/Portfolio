import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  experience = {
    oracle: {
      designation: 'Senior Applications Developer',
      duration: '2018 - Present',
      location: 'Bengaluru',
      name: 'Oracle',
      description: 'I Work as a lead Front End developer for the Aconex product. It is a Construction Engineering domain product used by over 1800 customers.' +
        'The main technologies worked on are' +
        'Angular, angularJS and Object Oriented Javascript.'
    },
    cura: {
      designation: 'Senior Applications Developer',
      duration: '2017 - 2018',
      location: 'Bengaluru',
      name: 'Cura Tech',
      description: 'Worked as a front end developer for a mobile app which was developed for ' +
        'the Cardiology and Diabetes department of Narayan Hridyalaya Hospital.'
    },
    prime: {
      designation: 'Applications Developer',
      duration: '2014 - 2017',
      location: 'Bengaluru',
      name: 'Oracle',
      description: 'Worked as a front end developer for Primavera product.'
    }
  };
  constructor() { }

  ngOnInit() {
  }

}
