import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/** ReactiveX Library */
import { switchMap } from 'rxjs/operators';

/** Models */
import { Dish } from '../shared/Dish';
import { Comment } from '../shared/Comment';

/** Services */
import { DishService } from '../services/dish.service';

/** Dependencies */
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})
export class DishDetailComponent implements OnInit {

    /** Icons */
    faChevronLeft = faChevronLeft;
    faChevronRight = faChevronRight;

    /** Attributes */
    dish: Dish;
    errorMessage: string;
    dishIDs: string[];
    prev: string;
    next: string;

    defaultValue: number = 0;

    dishCommentForm: FormGroup;
    dishComment: Comment;

    // It will contain the error messages to display for each field of the form defined here
    formErrors = {
        'author': '',
        'comment': ''
    };
    // It will contain the messages for each type of expected error per form field
    validationsMessages = {
        'author': {
            'required': 'Author name is required',
            'minlength': 'Author name must be at least 3 characters long'
        },
        'comment': {
            'required': 'Comment is required'
        }
    };

    @ViewChild( 'commentForm' ) dishCommentFormDirective;

    constructor(
        private dishService: DishService,
        private location: Location,
        private activatedRoute: ActivatedRoute,
        private fb: FormBuilder
    ) {
        this .createForm();
    }

    createForm() {
        const date = new Date();


        /** Define State Form (Add Form Validation) */
        this .dishCommentForm = this .fb .group({
            author: [ '', [
                Validators .required,
                Validators .minLength( 3 )
            ] ],
            comment: [ '', [
                Validators .required
            ] ],
            date: date .toISOString(),
            rating: 0
        });

        /** Observable: Subscribe to the Angular Form observable named valueChanges */
        this .dishCommentForm .valueChanges
             .subscribe( data => this .onValueChanged( data ) );

             this .onValueChanged();     // Reset Form Validation Messages
    }

    /** Method that validates when the value of a form field has changed  */
    onValueChanged( data?: any ) {
        // Validate if feedBackForm has NOT been created
        if( !this .dishCommentForm ) {
            return;
        }

        const form = this .dishCommentForm;
        // console .log( 'this.feedBackForm', form );

        // Loops through form fields defined in formErrors
        for( const field in this .formErrors ) {
            if( this .formErrors .hasOwnProperty( field ) ) {
                // Clear previous error message (if any)
                this .formErrors[ field ] = '';

                const control = form .get( field );
                // console .log( 'control', control );

                // Validate if it has a value, if the value of the field has changed, if the value is not valid
                if( control && control .dirty && !control .valid ) {
                    const messages = this .validationsMessages[ field ];     // Assign error message to the respective field
                    console .log( 'messages', messages );

                    for( const key in control .errors ) {
                        if( control .errors .hasOwnProperty( key ) ) {
                            this .formErrors[ field ] = messages[ key ] + ' ';
                        }
                    }
                }
            }
        }

        console .log( 'this.formErrors', this .formErrors );
    }

    ngOnInit(): void {
        const
            id = this .activatedRoute .params
              .pipe(
                  switchMap( ( params: Params ) => this .dishService .getDish( params[ 'id' ] ) )   // switchMap: Projects each source value to an Observable which is merged in the output Observable, emitting values only from the most recently projected Observable.
              )
              .subscribe(     // Subscription to the Observable receives two callbacks, the data obtained, the error messages
                  dish => {
                    this .dish = dish;
                    this .setPrevNext( dish .id );
                  },
                  error => this .errorMessage = <any>error
              );

        /** Receive a Observable */
        this .dishService .getDishIDs()
             .subscribe( dishIDs => this .dishIDs = dishIDs );
    }

    goBack(): void {
        this .location .back();
    }

    setPrevNext( dishId: string )  {
        const index = this .dishIDs .indexOf( dishId );   // Returns the index, inside the String object that makes the call

        this .prev = this .dishIDs[ ( this .dishIDs .length + index - 1 ) % this .dishIDs .length ];
        this .next = this .dishIDs[ ( this .dishIDs .length + index + 1 ) % this .dishIDs .length ];

        console .group( 'setPrevNext', dishId );
        console .log( 'this.dishIDs', this .dishIDs );
        console .log( 'index', index );
        console .log( 'this.prev', this .prev );
        console .log( 'this.next', this .next );
        console .groupEnd();
    }

    onSubmit() {
        this .dishComment = this .dishCommentForm .value;

        console .log( 'this.dishCommentForm', this .dishCommentForm );
        console .log( 'Sent', this .dishComment );

        this .dish .comments .push( this .dishComment );    // Add Comment
        this .defaultValue = 5;

        this .dishCommentForm .reset({
            author: '',
            comment: '',
            date: '',
            rating: this .defaultValue
        });

        this .dishCommentFormDirective .reset();
    }

}
