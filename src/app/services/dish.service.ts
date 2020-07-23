import { Injectable } from '@angular/core';

/** Models */
import { Dish } from '../shared/Dish';

/** Static Data */
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }
    /** Get all the dishes */
    getDishes(): Dish[] {
        return DISHES;
    }
    /** Get dish by ID */
    getDish( id: string ): Dish {
        return DISHES .filter( ( dish ) => ( dish .id === id ) ) [ 0 ];
    }
    /** Get only featured dishes */
    getFeaturedDish(): Dish {
        return DISHES .filter( ( dish ) => dish .featured ) [ 0 ];
    }
}
