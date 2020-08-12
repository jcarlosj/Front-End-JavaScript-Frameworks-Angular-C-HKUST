import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/** Base URL - BackEnd Server (It is a recommended practice) */
import { BASE_URL } from '../shared/baseurl';

/** ReactiveX Libraries */
import { Observable, of } from 'rxjs';
import { delay, map, catchError } from 'rxjs/operators';

/** Models */
import { Promotion } from '../shared/Promotion';

/** Services */
import { ProcessHttpMessageService } from '../services/process-http-message.service';

/** Static Data */
import { PROMOTIONS } from '../shared/promotions';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

    constructor(
        private http: HttpClient,
        private processHttpMessageService: ProcessHttpMessageService
    ) { }

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
        return this .http .get< Promotion >( `${ BASE_URL }promotions?featured=true` )    // Returns an observable that contains an Array with Objects of Type Promotion
                    .pipe( map( promotions => promotions[ 0 ] ) )
                    .pipe( catchError( this .processHttpMessageService .handleError ) );  // Handle the error and extract the message
    }

}
