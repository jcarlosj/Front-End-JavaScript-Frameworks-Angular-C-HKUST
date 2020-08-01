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
    getDishes(): Promise<Dish[]> {
        return Promise .resolve( DISHES );
    }
    /** Get dish by ID */
    getDish( id: string ): Promise<Dish> {
        return Promise .resolve( DISHES .filter( ( dish ) => ( dish .id === id ) ) [ 0 ] );
    }
    /** Get only featured dishes */
    getFeaturedDish(): Promise<Dish> {
        return Promise .resolve( DISHES .filter( ( dish ) => dish .featured ) [ 0 ] );
    }
}
