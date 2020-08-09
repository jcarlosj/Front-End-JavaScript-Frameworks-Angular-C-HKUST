import { Component, OnInit, Inject } from '@angular/core';

/** Models */
import { Dish } from '../shared/Dish';
import { Promotion } from '../shared/Promotion';
import { Leader } from '../shared/Leader';

/** Services */
import { DishService } from '../services/dish.service';
import { PromotionService } from '../services/promotion.service';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    /** Atributes */
    dish: Dish;
    promotion: Promotion;
    leader: Leader;

    constructor(
        private dishService: DishService,
        private promotionService: PromotionService,
        private leaderService: LeaderService,
        @Inject( 'BaseURL' ) public BaseURL            // Mechanism for letting Angular know that a parameter must be injected
    ) {
        console .log( 'BaseURL', this .BaseURL );
    }

    ngOnInit() {
        /** Receive a Observable */
        this .dishService .getFeaturedDish()
             .subscribe( dish => this .dish = dish );
        /** Receive a Observable */
        this .promotionService .getFeaturedPromotion()
             .subscribe( promotion => this .promotion = promotion );
        /** Receive a Observable */
        this .leaderService .getFeaturedLeader()
             .subscribe( leader => this .leader = leader );
    }

}
