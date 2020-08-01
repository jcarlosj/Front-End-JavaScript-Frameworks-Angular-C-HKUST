import { Component, OnInit } from '@angular/core';

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
        private leaderService: LeaderService
    ) { }

    ngOnInit() {
        /** Receive a promise */
        this .dishService .getFeaturedDish()
             .then( dish => this .dish = dish );
        /** Receive a promise */
        this .promotionService .getFeaturedPromotion()
             .then( promotion => this .promotion = promotion );
        /** Receive a promise */
        this .leaderService .getFeaturedLeader()
             .then( leader => this .leader = leader );
    }

}
