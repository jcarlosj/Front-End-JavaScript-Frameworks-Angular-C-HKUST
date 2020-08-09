import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/** Base URL - BackEnd Server (It is a recommended practice) */
import { BASE_URL } from '../shared/baseurl';

/** ReactiveX Libraries */
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

/** Models */
import { Dish } from '../shared/Dish';

@Injectable({
  providedIn: 'root'
})
export class DishService {

    constructor( private http: HttpClient ) {
        console .log( `BASE_URL`, BASE_URL );
    }

    /** Get all the IDs of the dishes */
    getDishIDs(): Observable< string[] | any > {
        return this .getDishes()
                    .pipe(
                        map( dishes => dishes .map( dish => dish .id ) )
                    );
    }

    /** Get all the dishes */
    getDishes(): Observable<Dish[]> {
        return this .http .get< Dish[] >( `${ BASE_URL }dishes` );                    // Returns an observable that contains an Array with Objects of Type Dish
    }
    /** Get dish by ID */
    getDish( id: string ): Observable<Dish> {
        return this .http .get< Dish >( `${ BASE_URL }dishes/${ id }` );              // Returns an observable that contains an Object of Type Dish
    }
    /** Get only featured dishes */
    getFeaturedDish(): Observable<Dish> {
        return this .http .get< Dish[] >( `${ BASE_URL }dishes?featured=true` )      // Returns an observable that contains an Array with Objects of Type Dish
                    .pipe(
                        map( dishes => dishes[ 0 ] )
                    );
    }
}
