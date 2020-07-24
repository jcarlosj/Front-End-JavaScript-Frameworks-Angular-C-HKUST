import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

/** Models */
import { Dish } from '../shared/Dish';

/** Services */
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})
export class DishDetailComponent implements OnInit {

    /** Attributes */
    dish: Dish;

    constructor(
        private dishService: DishService,
        private location: Location,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = this .activatedRoute .snapshot .params[ 'id' ];
        this .dish = this .dishService .getDish( id );
    }

    goBack(): void {
        this .location .back();
    }

}
