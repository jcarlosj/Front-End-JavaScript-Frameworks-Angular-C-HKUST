import { Component, OnInit } from '@angular/core';

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
    errorMessage: string;

    constructor( private dishService: DishService ) { }

    ngOnInit(): void {
        /** Receive a Observable */
        this .dishService .getDishes()
             .subscribe(    // Subscription to the Observable receives two callbacks, the data obtained, the error messages
                  dishes => this .dishes = dishes,
                  error => this .errorMessage = <any>error
              );
    }

}
