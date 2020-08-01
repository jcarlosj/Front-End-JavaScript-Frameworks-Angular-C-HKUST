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
      return Promise .resolve( LEADERS );
    }
    /** Get leader by ID */
    getLeader( id: string ): Promise<Leader> {
        return Promise .resolve( LEADERS .filter( ( leader ) => ( leader .id === id ) ) [ 0 ] );
    }
    /** Get only featured dishes */
    getFeaturedLeader(): Promise<Leader> {
        return Promise .resolve( LEADERS .filter( ( leader ) => leader .featured ) [ 0 ] );
    }
}
