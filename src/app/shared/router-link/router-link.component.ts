import { Component, OnInit, Input } from '@angular/core';

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

    constructor() {
    }

    ngOnInit(): void {
    }
}
