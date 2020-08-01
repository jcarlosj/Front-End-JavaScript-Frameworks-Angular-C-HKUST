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
        return Promise .resolve( PROMOTIONS );
    }
    /** Get promotion by ID */
    getPromotion( id: string ): Promise<Promotion> {
        return Promise .resolve( PROMOTIONS .filter( ( promo ) => ( promo .id === id ) ) [ 0 ] );
    }
    /** Get only featured dishes */
    getFeaturedPromotion(): Promise<Promotion> {
        return Promise .resolve( PROMOTIONS .filter( ( promotion ) => promotion .featured ) [ 0 ] );
    }

}
