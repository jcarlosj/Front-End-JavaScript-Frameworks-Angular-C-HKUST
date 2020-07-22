import { Component, OnInit } from '@angular/core';

import { faCoffee } from '@fortawesome/free-solid-svg-icons';

/** Models */
import { Dish } from '../shared/Dish';

/** Service */
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    /** Atributes */
    dishes: Dish[];
    selectedDish: Dish;
    faCoffee = faCoffee;

    constructor( private dishService: DishService ) { }

    ngOnInit(): void {
        this .dishes = this .dishService .getDishes();
    }

    onSelect( dish: Dish ) {
        this .selectedDish = dish;
    }

}
