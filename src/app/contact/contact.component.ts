import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/** Models */
import { Feedback, ContactType } from '../shared/Feedback';

/** Dependencies */
import { faPhone, faFax, faEnvelope as faEnvelopeS } from '@fortawesome/free-solid-svg-icons';
import { faSkype } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
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

    @ViewChild( 'contactForm' ) feedBackFormDirective;

    constructor( private fb: FormBuilder ) {
        this .createForm();
    }

    ngOnInit(): void {
    }

    createForm() {
        /** Define State Form */
        this .feedBackForm = this .fb .group({
            firstName: [ '', Validators .required ],
            lastName: [ '', Validators .required ],
            phoneNumber: [ 0, Validators .required ],
            email: [ '', Validators .required ],
            agree: false,
            contactType: '',
            message: '',
            contacttype: 'None'
        });
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
