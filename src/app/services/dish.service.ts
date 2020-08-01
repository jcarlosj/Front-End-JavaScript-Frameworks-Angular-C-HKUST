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
        return new Promise( resolve => {
            // Simulate server latency with 2 second delay
            setTimeout( () => resolve( DISHES ), 2000 );
        });
    }
    /** Get dish by ID */
    getDish( id: string ): Promise<Dish> {
        return new Promise( resolve=> {
            // Simulate server latency with 2 second delay
            setTimeout( () => resolve( DISHES .filter( ( dish ) => ( dish .id === id ) ) [ 0 ] ), 2000 );
        });
    }
    /** Get only featured dishes */
    getFeaturedDish(): Promise<Dish> {
        return new Promise( resolve => {
            // Simulate server latency with 2 second delay
            setTimeout( () => { resolve( DISHES .filter( ( dish ) => dish .featured ) [ 0 ] ) }, 2000 );
        });
    }
}
