import { Injectable } from '@angular/core';

/** ReactiveX Libraries */
import { of } from 'rxjs';
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
    getPromotions(): Promise<Promotion[]> {
        return of( PROMOTIONS )                 // Create an Observable: Converts the arguments to an observable sequence.
                  .pipe( delay( 2000 ) )        // Simulate server latency with 2 second delay.
                  .toPromise();                 // Convert observable to Promise.
    }
    /** Get promotion by ID */
    getPromotion( id: string ): Promise<Promotion> {
        return of( PROMOTIONS .filter( ( promotion ) => ( promotion .id === id ) ) [ 0 ] )  // Create an Observable: Converts the arguments to an observable sequence.
                  .pipe( delay( 2000 ) )                                                    // Simulate server latency with 2 second delay.
                  .toPromise();                                                             // Convert observable to Promise.
    }
    /** Get only featured promotions */
    getFeaturedPromotion(): Promise<Promotion> {
        return of( PROMOTIONS .filter( ( promotion ) => promotion .featured ) [ 0 ] )       // Create an Observable: Converts the arguments to an observable sequence.
                  .pipe( delay( 2000 ) )                                                    // Simulate server latency with 2 second delay.
                  .toPromise();                                                             // Convert observable to Promise.
    }

}
