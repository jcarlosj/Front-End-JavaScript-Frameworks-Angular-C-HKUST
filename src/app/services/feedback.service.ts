import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/** Base URL - BackEnd Server (It is a recommended practice) */
import { BASE_URL } from '../shared/baseurl';

/** ReactiveX Libraries */
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

/** Models */
import { Feedback } from '../shared/Feedback';

/** Services */
import { ProcessHttpMessageService } from '../services/process-http-message.service';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

    constructor(
        private http: HttpClient,
        private processHttpMessageService: ProcessHttpMessageService
    ) { }

    /** Insert a Feedback */
    postFeedback( feedback: Feedback ): Observable< Feedback > {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };

        return this .http .post< Feedback >( `${ BASE_URL }feedback`, feedback, httpOptions );
    }

}
