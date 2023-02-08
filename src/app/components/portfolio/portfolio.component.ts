import { Component, OnInit } from '@angular/core';
import { projects } from '@constants/portfolio.constant';
import { IProyect } from '@interfaces/proyect.interface';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  proyects: IProyect[] = projects;

  constructor() { }

  ngOnInit(): void {
  }

  openLink(url: string) {
    window.open(url, "_blank");
  }

}
