import { Component, OnInit } from '@angular/core';

/** Models */
import { Dish } from '../shared/Dish';
import { Promotion } from '../shared/Promotion';

/** Services */
import { DishService } from '../services/dish.service';
import { PromotionService } from '../services/promotion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    /** Atributes */
    dish: Dish;
    promotion: Promotion;

    constructor(
        private dishService: DishService,
        private promotionService: PromotionService
    ) { }

    ngOnInit() {
        this .dish = this .dishService .getFeaturedDish();
        this .promotion = this .promotionService .getFeaturedPromotion();
    }

}
