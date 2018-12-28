import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'pca-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        console.log('home-page component onInit');
    }
}
