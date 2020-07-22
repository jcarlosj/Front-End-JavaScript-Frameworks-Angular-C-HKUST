import { Component, OnInit } from '@angular/core';

/** Models */
import { Dish } from '../shared/Dish';

/** Static Data */
import { DISHES } from '../shared/dishes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    /** Atributes */
  dishes: Dish[] = DISHES;
  selectedDish: Dish = DISHES[ 0 ];

  constructor() { }

  ngOnInit(): void {
  }

}
