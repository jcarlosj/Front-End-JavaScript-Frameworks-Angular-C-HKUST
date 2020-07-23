import { Component, OnInit } from '@angular/core';

/** Models */
import { Dish } from '../shared/Dish';

/** Services */
import { DishService } from '../services/dish.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    /** Atributes */
    dish: Dish;

    constructor( private dishservice: DishService ) { }

    ngOnInit() {
        this .dish = this .dishservice .getFeaturedDish();
    }

}
