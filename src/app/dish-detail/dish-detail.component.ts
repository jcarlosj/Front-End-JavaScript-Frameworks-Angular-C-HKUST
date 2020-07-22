import { Component, OnInit, Input } from '@angular/core';

/** Models */
import { Dish } from '../shared/Dish';
@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})
export class DishDetailComponent implements OnInit {

    /** Attributes */
    @Input()
    dish: Dish;

  constructor() { }

  ngOnInit(): void {
  }

}
