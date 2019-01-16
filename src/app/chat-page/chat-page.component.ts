import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';
import { EventService } from '../shared/events/events.service';
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
        private chatService: ChatService,
        private eventService: EventService) {
    }

    ngOnInit() {
        this.route.paramMap
            .subscribe(params => {
                let chatId = parseInt(params.get('id'));

                this.eventService.publishPageView('ChatPage View for Chat: ' + chatId);

                this.chatService.getChat(chatId)
                    .then((chat: Chat) => {
                        this.chat = chat;
                    });
            });
    }
}
