import { Injectable } from '@angular/core';

/** ReactiveX Libraries */
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

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
    getDishes(): Observable<Dish[]> {
        return of( DISHES )                 // Create an Observable: Converts the arguments to an observable sequence.
                  .pipe( delay( 2000 ) );   // Simulate server latency with 2 second delay.
    }
    /** Get dish by ID */
    getDish( id: string ): Observable<Dish> {
        return of( DISHES .filter( dish => dish .id === id ) [ 0 ] )    // Create an Observable: Converts the arguments to an observable sequence.
                  .pipe( delay( 2000 ) );                               // Simulate server latency with 2 second delay.
    }
    /** Get only featured dishes */
    getFeaturedDish(): Observable<Dish> {
        return of( DISHES .filter( ( dish ) => dish .featured ) [ 0 ] ) // Create an Observable: Converts the arguments to an observable sequence.
                  .pipe( delay( 2000 ) );                               // Simulate server latency with 2 second delay.
    }
}
