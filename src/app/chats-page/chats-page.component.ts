import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatsService } from './chats.service';
import { EventService } from '../shared/events/events.service';
import { Chat } from 'chat-api';

@Component({
    selector: 'pca-chats-page',
    templateUrl: './chats-page.component.html',
    styleUrls: ['./chats-page.component.scss']
})
export class ChatsPageComponent implements OnInit {

    public chats: Array<Chat>;

    constructor(private route: ActivatedRoute,
        private chatsService: ChatsService,
        private eventService: EventService) { }

    ngOnInit() {
        this.route.paramMap
            .subscribe(params => {
                this.eventService.publishPageView('ChatsPage View');

                this.chatsService.getChats()
                    .then((chats: Array<Chat>) => {
                        this.chats = chats;
                    });
            });
    }

    // BUG: seems to only work once, after that the event is not fired agaion in the app lifecycle?
    handleLinkClick(clickData): void {
        this.eventService.publishLinkClick(clickData);
    }
}
