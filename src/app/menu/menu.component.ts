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

    constructor( private dishService: DishService ) { }

    ngOnInit(): void {
        /** Receive a Observable */
        this .dishService .getDishes()
             .subscribe( dishes => this .dishes = dishes );
    }

}
