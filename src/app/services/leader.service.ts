import { Injectable } from '@angular/core';

/** ReactiveX Libraries */
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

/** Models */
import { Leader } from '../shared/Leader';

/** Static Data */
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

    constructor() { }

    /** Get all the leaders */
    getLeaders(): Promise<Leader[]> {
      return of( LEADERS )                // Create an Observable: Converts the arguments to an observable sequence.
                .pipe( delay( 2000 ) )    // Simulate server latency with 2 second delay.
                .toPromise();             // Convert observable to Promise.
    }
    /** Get leader by ID */
    getLeader( id: string ): Promise<Leader> {
        return of( LEADERS .filter( ( leader ) => ( leader .id === id ) ) [ 0 ] )   // Create an Observable: Converts the arguments to an observable sequence.
                  .pipe( delay( 2000 ) )                                        // Simulate server latency with 2 second delay.
                  .toPromise();                                                 // Convert observable to Promise.
    }
    /** Get only featured leaders */
    getFeaturedLeader(): Promise<Leader> {
        return of( LEADERS .filter( ( leader ) => leader .featured ) [ 0 ] )    // Create an Observable: Converts the arguments to an observable sequence.
                  .pipe( delay( 2000 ) )                                    // Simulate server latency with 2 second delay.
                  .toPromise();                                             // Convert observable to Promise.
    }
}
