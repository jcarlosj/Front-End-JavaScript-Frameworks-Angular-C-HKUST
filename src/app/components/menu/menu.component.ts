import { Component, OnInit } from '@angular/core';

/** Models */
import { Dish } from '../../shared/Dish';

/** Service */
import { DishService } from '../../services/dish.service';

/** Animations */
import { flyInOut, expand } from '../../animations/app.animation';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    host: {   // Maps class properties to host element bindings for properties, attributes, and events, using a set of key-value pairs.
        '[@flyInOut]': 'true',
        'style': 'display: block;'
    },
    animations: [
        flyInOut(),
        expand()
    ]
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
