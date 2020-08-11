import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/** Models */
import { Feedback, ContactType } from '../shared/Feedback';

/** Dependencies */
import { faPhone, faFax, faEnvelope as faEnvelopeS } from '@fortawesome/free-solid-svg-icons';
import { faSkype } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

/** Animations */
import { flyInOut } from '../animations/app.animation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  host: {   // Maps class properties to host element bindings for properties, attributes, and events, using a set of key-value pairs.
      '[@flyInOut]': 'true',
      'style': 'display: block;'
  },
  animations: [
      flyInOut()
  ]
})
export class ContactComponent implements OnInit {

    /** Icons */
    faPhone = faPhone;
    faFax = faFax;
    faEnvelopeS = faEnvelopeS;
    faSkype = faSkype;
    faEnvelope = faEnvelope;

    /** Attributes */
    feedBackForm: FormGroup;
    feedBack: Feedback;

    contactType = ContactType;
    // It will contain the error messages to display for each field of the form defined here
    formErrors = {
        'firstName': '',
        'lastName': '',
        'phoneNumber': '',
        'email': ''
    };
    // It will contain the messages for each type of expected error per form field
    validationsMessages = {
        'firstName': {
            'required': 'First name is required',
            'minlength': 'First name must be at least 3 characters long',
            'maxlength': 'First name cannot be more than 25 characters'
        },
        'lastName': {
            'required': 'Last name is required',
            'minlength': 'Last name must be at least 3 characters long',
            'maxlength': 'Last name cannot be more than 25 characters'
        },
        'phoneNumber': {
            'required': 'Phone number is required',
            'minlength': 'Minimum length is 7 digits (in the case of landlines)',
            'maxlength': 'Maximum length is 10 digits (in the case of mobile phones)',
            'pattern': 'Phone number must be contain only numbers'
        },
        'email': {
            'required': 'E-mail is required',
            'email': 'Invalid E-mail'
        }
    };

    @ViewChild( 'contactForm' ) feedBackFormDirective;

    constructor( private fb: FormBuilder ) {
        this .createForm();
    }

    ngOnInit(): void {
    }

    createForm() {
        /** Define State Form (Add Form Validation) */
        this .feedBackForm = this .fb .group({
            firstName: [ '', [
                Validators .required,
                Validators .minLength( 3 ),
                Validators .maxLength( 25 )
            ] ],
            lastName: [ '', [
                Validators .required,
                Validators .minLength( 3 ),
                Validators .maxLength( 25 )
            ] ],
            phoneNumber: [ 0, [
                Validators .required,
                Validators .minLength( 7 ),
                Validators .maxLength( 10 ),
                Validators .pattern
            ] ],
            email: [ '', [
                Validators .required,
                Validators .email
            ] ],
            agree: false,
            contactType: '',
            message: '',
            contacttype: 'None'
        });

        /** Observable: Subscribe to the Angular Form observable named valueChanges */
        this .feedBackForm .valueChanges
             .subscribe( data => this .onValueChanged( data ) );

        this .onValueChanged();     // Reset Form Validation Messages
    }


    /** Method that validates when the value of a form field has changed  */
    onValueChanged( data?: any ) {
        // Validate if feedBackForm has NOT been created
        if( !this .feedBackForm ) {
            return;
        }

        const form = this .feedBackForm;
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

    onSubmit() {
        this .feedBack = this .feedBackForm .value;
        console .log( 'Sent', this .feedBack );

        this .feedBackForm .reset({
            firstName: '',
            lastName: '',
            phoneNumber: 0,
            email: '',
            agree: false,
            contactType: '',
            message: '',
            contacttype: 'None'
        });

        this .feedBackFormDirective .reset();
    }

}
