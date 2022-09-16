import { Component, OnInit } from '@angular/core';
import { links } from '@constants/links.constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  github: string = links.github;
  linkedin: string = links.linkedin;
  constructor() { }

  ngOnInit(): void {
  }

}
