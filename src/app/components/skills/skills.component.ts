import { Component, OnInit } from '@angular/core';
import { ICard } from 'src/app/core/interfaces/card.interface';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public cardsDataFrontend: ICard[] = [
    { name: 'HTML', imagePath: 'assets/images/html.png', alt: 'html' },
    { name: 'CSS 3', imagePath: 'assets/images/css.png', alt: 'css' },
    { name: 'Javascript', imagePath: 'assets/images/js.png', alt: 'js' },
    { name: 'Typescript', imagePath: 'assets/images/ts.png', alt: 'ts' },
    { name: 'Angular', imagePath: 'assets/images/angular.png', alt: 'angular' },
    { name: 'Bootstrap', imagePath: 'assets/images/bootstrap.png', alt: 'bootstrap' },
  ];
  public cardsDataBackend: ICard[] = [
    { name: 'Nodejs', imagePath: 'assets/images/nodejs.png', alt: 'nodejs' },
    { name: 'MongoDB', imagePath: 'assets/images/mongo.png', alt: 'mongodb' },
    { name: 'MySql', imagePath: 'assets/images/mysql.png', alt: 'mysql' },
    { name: 'Nestjs', imagePath: 'assets/images/nestjs.png', alt: 'nestjs' },
  ];
  public cardsDataOthers: ICard[] = [
    { name: 'Git', imagePath: 'assets/images/git.png', alt: 'git' },
    // { name: 'GitHub', imagePath: 'assets/images/github.png', alt: 'github' },
    { name: 'Figma', imagePath: 'assets/images/figma.png', alt: 'figma' },
    { name: 'Postman', imagePath: 'assets/images/postman.png', alt: 'postman' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
