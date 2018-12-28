import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'error-page',
    templateUrl: './error-page.component.html',
    styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {

    errorCode: string;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.data.subscribe(data => {
            switch (data.errorCode) {
                case '404':
                    this.errorCode = data.errorCode;
                    // More log?
                    break;
                case '500':
                    this.errorCode = data.errorCode;
                default:
                    this.errorCode = 'unknown';
            }
        });
    }
}
