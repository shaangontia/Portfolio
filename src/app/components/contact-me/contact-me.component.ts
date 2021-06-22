import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {
  fbSrc = '../../assets/fb.png';
  linkedInSrc = '../../assets/linkedIn.png';
  instaSrc = '../../assets/insta.jpeg';
  twitterSrc = '../../assets/twitter.png';
  mailSrc = '../../assets/mail.jpeg';
  workTogetherText = 'Let\'s work together';
  constructor() {
    const contactMeText = 'Let\'s work together';
    const pleaseContactAt = 'Please reach out to me at these channels if you think we can collaborate';

    const facebook = 'Facebook';
    const linkedIn = 'LinkedIn';
    const insta = 'Instagram';
  }
}
