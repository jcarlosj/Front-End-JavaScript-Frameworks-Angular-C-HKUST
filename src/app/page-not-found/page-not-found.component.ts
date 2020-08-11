import { Component, OnInit } from '@angular/core';

/** Animations */
import { flyInOut } from '../animations/app.animation';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
  host: {   // Maps class properties to host element bindings for properties, attributes, and events, using a set of key-value pairs.
      '[@flyInOut]': 'true',
      'style': 'display: block;'
  },
  animations: [
      flyInOut()
  ]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
