import { Injectable } from '@angular/core';

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
        return new Promise( resolve => {
            // Simulate server latency with 2 second delay
            setTimeout( () => resolve( PROMOTIONS ), 2000 );
        });
    }
    /** Get promotion by ID */
    getPromotion( id: string ): Promise<Promotion> {
        return new Promise( resolve=> {
            // Simulate server latency with 2 second delay
            setTimeout( () => resolve( PROMOTIONS .filter( ( dish ) => ( dish .id === id ) ) [ 0 ] ), 2000 );
        });
    }
    /** Get only featured dishes */
    getFeaturedPromotion(): Promise<Promotion> {
        return new Promise( resolve => {
            // Simulate server latency with 2 second delay
            setTimeout( () => { resolve( PROMOTIONS .filter( ( dish ) => dish .featured ) [ 0 ] ) }, 2000 );
        });
    }

}
