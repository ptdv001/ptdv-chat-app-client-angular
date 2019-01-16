import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../shared/events/events.service';

@Component({
    selector: 'pca-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
    constructor(private route: ActivatedRoute,
        private eventService: EventService) {
    }

    ngOnInit() {
        // Done this way to be consistent and for future case(s) with more route info.
        this.route.paramMap
            .subscribe(params => {
                this.eventService.publishPageView('HomePage View');
            });
    }
}
