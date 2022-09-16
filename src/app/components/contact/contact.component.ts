import { Component, OnInit } from '@angular/core';
import { links } from '@constants/links.constant';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  github: string = links.github;
  linkedin: string = links.linkedin;
  instagram: string = links.instagram;
  twitter: string = links.twitter;
  email: string = links.email;
  constructor() { }

  ngOnInit(): void {
  }

}
