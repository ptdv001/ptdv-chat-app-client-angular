import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

//import { all models } from 'event.model';

/**
 * Events used for sharing GTM data across app.
 *
 * Ajax and related events used parent to child data passing
 * instead of events.
 */
@Injectable()
export class EventService {

    // Pattern add subscriver var, then add publish and related subscribe functions

    private subjectPageView = new Subject<any>();
    private subjectLinkClick = new Subject<any>();

    constructor() { }

    publishPageView(pageView): void {
        this.subjectPageView.next(pageView);
    }

    subscribePageView(): Observable<any> {
        return this.subjectPageView.asObservable();
    }

    publishLinkClick(linkClick): void {
        this.subjectLinkClick.next(linkClick);
    }

    subscribeLinkClick(): Observable<any> {
        return this.subjectLinkClick.asObservable();
    }
}
