import { Component, OnInit } from '@angular/core';

/** Models */
import { Dish } from '../shared/Dish';

/** Service */
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    /** Atributes */
    dishes: Dish[];
    selectedDish: Dish;

    constructor( private dishService: DishService ) { }

    ngOnInit(): void {
        /** Receive a promise */
        this .dishService .getDishes()
             .then( dishes => this .dishes = dishes );
    }

    onSelect( dish: Dish ) {
        this .selectedDish = dish;
    }

}
