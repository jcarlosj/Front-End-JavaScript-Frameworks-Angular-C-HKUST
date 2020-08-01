import { Injectable } from '@angular/core';

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
        return new Promise( resolve => {
            // Simulate server latency with 2 second delay
            setTimeout( () => resolve( LEADERS ), 2000 );
        });
    }
    /** Get leader by ID */
    getLeader( id: string ): Promise<Leader> {
        return new Promise( resolve => {
            // Simulate server latency with 2 second delay
            setTimeout( () => resolve( LEADERS .filter( ( dish ) => ( dish .id === id ) ) [ 0 ] ), 2000 );
        });
    }
    /** Get only featured dishes */
    getFeaturedLeader(): Promise<Leader> {
        return new Promise( resolve => {
            // Simulate server latency with 2 second delay
            setTimeout( () => { resolve( LEADERS .filter( ( dish ) => dish .featured ) [ 0 ] ) }, 2000 );
        });
    }
}
