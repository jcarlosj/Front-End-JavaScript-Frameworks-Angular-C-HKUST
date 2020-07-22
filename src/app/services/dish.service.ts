import { Injectable } from '@angular/core';

/** Models */
import { Dish } from '../shared/Dish';

/** Static Data */
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

    getDishes(): Dish[] {
      return DISHES;
    }
}
