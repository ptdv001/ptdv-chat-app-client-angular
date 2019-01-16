import { Component, OnInit } from '@angular/core';

import { AnalyticsService } from './shared/analytics/analytics.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'ptdv-chat-app-client-angular';

    constructor(private analyticsService: AnalyticsService) {
        // Should probably be loaded first
        analyticsService.subscribeToEvents();
    }

    ngOnInit() {
    }
}
