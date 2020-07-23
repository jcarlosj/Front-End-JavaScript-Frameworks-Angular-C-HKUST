import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
