import { Component, OnInit } from '@angular/core';

/** Models */
import { Leader } from '../shared/Leader';

/** Services */
import { LeaderService } from '../services/leader.service';

/** Animations */
import { flyInOut } from '../animations/app.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {   // Maps class properties to host element bindings for properties, attributes, and events, using a set of key-value pairs.
      '[@flyInOut]': 'true',
      'style': 'display: block;'
  },
  animations: [
      flyInOut()
  ]
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
