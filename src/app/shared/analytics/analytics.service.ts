import { Injectable } from '@angular/core';
import { EventService } from '../events/events.service';

@Injectable()
export class AnalyticsService {
    private isSubscribed = false;

    constructor(private eventService: EventService) {
    }

    subscribeToEvents(): void {
        // Make sure this is only loaded once to avoid innaccurate analytics.
        if (this.isSubscribed) {
            return;
        }

        this.isSubscribed = true;

        // Add subscribers here
        this.eventService.subscribePageView()
            .subscribe(pageView => this.logPageView(pageView));

        this.eventService.subscribeLinkClick()
            .subscribe(linkClick => this.logLinkClick(linkClick));
    }

    // Add helper functions for subscribers here
    logPageView(pageView: any): void {
        console.log('gtm pageView event: ', pageView);
    }

    logLinkClick(linkClick: any): void {
        console.log('gtm linkClick event: ', linkClick);
    }

}
