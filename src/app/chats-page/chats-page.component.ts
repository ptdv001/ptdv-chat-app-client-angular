import { Component, OnInit } from '@angular/core';
import { ChatsService } from './chats.service';
import { Chats } from 'chat-api';

@Component({
    selector: 'pca-chats-page',
    templateUrl: './chats-page.component.html',
    styleUrls: ['./chats-page.component.scss']
})
export class ChatsPageComponent implements OnInit {
    constructor(private chatsService: ChatsService) { }

    ngOnInit() {
        console.log('chats-page component onInit');

        this.chatsService.getChats()
            .then(chats => {
                console.log(chats);
            });
    }
}
