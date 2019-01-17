import { Component, OnInit, Input } from '@angular/core';
import { EventService } from '../events/events.service';

@Component({
    selector: 'router-link',
    templateUrl: './router-link.component.html',
    styleUrls: ['./router-link.component.scss']
})
export class RouterLinkComponent implements OnInit {

    @Input()
    readonly path: string;

    // Optional param
    @Input()
    readonly param?: string;

    @Input()
    readonly linkText: string;

    constructor(private eventService: EventService) {
    }

    ngOnInit(): void {
    }

    // BUG: seems to only work once, after that the event is not fired agaion in the app lifecycle?
    // RESOLVED: by moving from Outer Component call to inside component itself.
    handleLinkClick(clickData): void {
        this.eventService.publishLinkClick(clickData);
    }
}
