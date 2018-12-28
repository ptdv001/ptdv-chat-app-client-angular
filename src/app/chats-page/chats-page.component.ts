import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'pca-chats-page',
    templateUrl: './chats-page.component.html',
    styleUrls: ['./chats-page.component.scss']
})
export class ChatsPageComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        console.log('chats-page component onInit');
    }
}
