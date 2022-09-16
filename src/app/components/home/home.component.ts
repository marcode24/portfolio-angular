import { Component, OnInit } from '@angular/core';
import { links } from '@constants/links.constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  github: string = links.github;
  linkedin: string = links.linkedin;

  constructor() {}

  ngOnInit(): void {}

}
