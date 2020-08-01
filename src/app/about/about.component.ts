import { Component, OnInit } from '@angular/core';

/** Models */
import { Leader } from '../shared/Leader';

/** Services */
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    /** Attributes */
    leaders: Leader[] = [];

    constructor(
        private leaderService: LeaderService
    ) { }

    ngOnInit(): void {
        /** Receive a promise */
        this .leaderService .getLeaders()
             .then( leaders => this .leaders = leaders );
    }

}
