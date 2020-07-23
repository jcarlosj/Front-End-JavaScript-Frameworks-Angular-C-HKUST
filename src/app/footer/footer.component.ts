import { Component, OnInit } from '@angular/core';

/** Dependencies */
import { faPhone, faFax, faEnvelope as faEnvelopeS } from '@fortawesome/free-solid-svg-icons';
import { faGooglePlusG, faFacebookF, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  /** Icons */
  faPhone = faPhone;
  faFax = faFax;
  faEnvelopeS = faEnvelopeS;
  faGooglePlusG = faGooglePlusG;
  faFacebookF = faFacebookF;
  faLinkedinIn = faLinkedinIn;
  faTwitter = faTwitter;
  faYoutube = faYoutube;
  faEnvelope = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }

}
