import { Injectable, Inject } from '@angular/core';
import { EventService } from '../events/events.service';

import {
    PageViewEvent,
    LinkClickEvent
} from './analytics.model';

@Injectable()
export class AnalyticsService {
    private isSubscribed = false;

    constructor(private eventService: EventService,
        @Inject(Window) private window: Window) {
    }

    subscribeToEvents(): void {
        // Make sure this is only loaded once to avoid innaccurate analytics.
        if (this.isSubscribed) {
            return;
        }

        this.isSubscribed = true;

        // Add subscribers here
        this.eventService.subscribePageView()
            .subscribe(pageNameView => this.triggerPageView(pageNameView));

        this.eventService.subscribeLinkClick()
            .subscribe(linkClick => this.triggerLinkClick(linkClick));
    }

    triggerPageView(pageNameView: string) {
        const pageViewEvent = new PageViewEvent(
            'pageView',
            pageNameView,
            this.getGaId(),

            // TODO Could get below from a userService that gets data from the backend
            // -or- a server that figures that out on front end (probably this one).
            'userAgent',
            'userId',
            'locale',
            'region');

        this.setAnalyticsData(pageViewEvent);
    }

    triggerLinkClick(linkClick: any) {
        const linkClickEvent = new LinkClickEvent(
            'linkClick',
            this.window.location.href,
            'source'
        );

        this.setAnalyticsData(linkClickEvent);
    }

    private setAnalyticsData(data: any): void {
        // TODO
        console.log('Analytics: ', data);

        /**
         * Example:
         * // Hack to convert GTM work with typscript.
         * const val = JSON.stringify(data);
         * const obj = JSON.parse(v);
         *
         * // Case of running in an iFrame
         * if (isIframe()) {
         *  this.window.top.postMessage({dataLayer: obj}, '*');
         * } else {
         *  if (this.window['dataLayer']) {
         *   this.window.['dataLayer'].push(obj);
         *  }
         * }
         */
    }

    /**
     * Get GA ID from cookie value
     * e.g. stored as GA1.3.XYXYXYXYXYX.XYXYXYXY but ID part is XYXYXYXYXYX.XYXYXYXY
     *
     * TODO use a regex instead
     */
    private getGaId(): string {
        const gaId = 'GA1.3.XYXYXYXYXYX.XYXYXYXY'; //this.cookieService.get('_ga');
        if (!gaId) { return ''; }

        const gaIdSplit = gaId.split('.');
        if (gaIdSplit.length <= 2) { return gaId; }

        return gaIdSplit[gaIdSplit.length - 2] + '.' + gaIdSplit[gaIdSplit.length - 1];
    }
}
