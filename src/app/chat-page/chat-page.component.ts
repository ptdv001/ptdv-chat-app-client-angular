import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';
import { Chat } from 'chat-api';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'chat-page',
    templateUrl: './chat-page.component.html',
    styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit {

    public chat: Chat;

    constructor(
        private route: ActivatedRoute,
        private chatService: ChatService) {
    }

    ngOnInit() {
        console.log('chat-page component onInit');

        this.route.paramMap.subscribe(params => {
            let chatId = parseInt(params.get('id'));
            console.log('chatId', chatId);
            this.chatService.getChat(chatId)
                .then((chat: Chat) => {
                    console.log('chat', chat);
                    this.chat = chat;
                });
        });
    }
}
