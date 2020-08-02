import { Injectable } from '@angular/core';

/** ReactiveX Libraries */
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

/** Models */
import { Promotion } from '../shared/Promotion';

/** Static Data */
import { PROMOTIONS } from '../shared/promotions';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

    constructor() { }

    /** Get all the promotions */
    getPromotions(): Observable<Promotion[]> {
        return of( PROMOTIONS )                 // Create an Observable: Converts the arguments to an observable sequence.
                  .pipe( delay( 2000 ) );       // Simulate server latency with 2 second delay.
    }
    /** Get promotion by ID */
    getPromotion( id: string ): Observable<Promotion> {
        return of( PROMOTIONS .filter( ( promotion ) => ( promotion .id === id ) ) [ 0 ] )  // Create an Observable: Converts the arguments to an observable sequence.
                  .pipe( delay( 2000 ) );                                                   // Simulate server latency with 2 second delay.
    }
    /** Get only featured promotions */
    getFeaturedPromotion(): Observable<Promotion> {
        return of( PROMOTIONS .filter( ( promotion ) => promotion .featured ) [ 0 ] )       // Create an Observable: Converts the arguments to an observable sequence.
                  .pipe( delay( 2000 ) );                                                   // Simulate server latency with 2 second delay.
    }

}
