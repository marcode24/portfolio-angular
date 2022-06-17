import { Component, Input, OnInit } from '@angular/core';
import { ICard } from 'src/app/core/interfaces/card.interface';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() cards: ICard[];
  constructor() { }

  ngOnInit(): void {
  }

}
