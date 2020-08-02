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
    leaders: Leader[];

    constructor(
        private leaderService: LeaderService
    ) { }

    ngOnInit(): void {
        /** Receive a Observable */
        this .leaderService .getLeaders()
             .subscribe( leaders => this .leaders = leaders );
    }

}
