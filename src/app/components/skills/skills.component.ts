import { Component, OnInit } from '@angular/core';
import { ICard } from '@interfaces/card.interface';

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
    { name: 'SASS', imagePath: 'assets/images/sass.png', alt: 'scss' },
    { name: 'Angular', imagePath: 'assets/images/angular.png', alt: 'angular' },
    { name: 'Bootstrap', imagePath: 'assets/images/bootstrap.png', alt: 'bootstrap' },
  ];
  public cardsDataBackend: ICard[] = [
    { name: 'Nodejs', imagePath: 'assets/images/nodejs.png', alt: 'nodejs' },
    { name: 'MongoDB', imagePath: 'assets/images/mongo.png', alt: 'mongodb' },
    { name: 'MySql', imagePath: 'assets/images/mysql.png', alt: 'mysql' },
    { name: 'Nestjs', imagePath: 'assets/images/nestjs.png', alt: 'nestjs' },
    { name: 'Docker', imagePath: 'assets/images/docker.png', alt: 'docker' },
  ];
  public cardsDataOthers: ICard[] = [
    { name: 'Git', imagePath: 'assets/images/git.png', alt: 'git' },
    { name: 'Azure', imagePath: 'assets/images/azure.png', alt: 'azure' },
    { name: 'Figma', imagePath: 'assets/images/figma.png', alt: 'figma' },
    { name: 'Postman', imagePath: 'assets/images/postman.png', alt: 'postman' },
    { name: 'Jest', imagePath: 'assets/images/jest.png', alt: 'jest' },
    { name: 'Jasmine', imagePath: 'assets/images/jasmine.png', alt: 'jasmine' },
  ];
  public cardsDataLearning: ICard[] = [
    { name: 'Vue', imagePath: 'assets/images/vue.png', alt: 'vue' },
    { name: 'Tailwind', imagePath: 'assets/images/tailwind.png', alt: 'tailwind' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
