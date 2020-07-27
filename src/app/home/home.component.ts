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
        this .dish = this .dishService .getFeaturedDish();
        this .promotion = this .promotionService .getFeaturedPromotion();
        this .leader = this .leaderService .getFeaturedLeader();
    }

}
