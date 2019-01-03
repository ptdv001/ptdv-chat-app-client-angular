import { Component, OnInit } from '@angular/core';
import { ChatsService } from './chats.service';
import { Chat } from 'chat-api';

@Component({
    selector: 'pca-chats-page',
    templateUrl: './chats-page.component.html',
    styleUrls: ['./chats-page.component.scss']
})
export class ChatsPageComponent implements OnInit {

    public chats: Array<Chat>;

    constructor(private chatsService: ChatsService) { }

    ngOnInit() {
        console.log('chats-page component onInit');

        this.chatsService.getChats()
            .then((chats: Array<Chat>) => {
                this.chats = chats;
            });
    }
}
