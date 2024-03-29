import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chat } from 'chat-api';

@Injectable()
export class ChatsService {
    private chatsPageUrl = 'api/chats';

    constructor(private http: HttpClient) { }

    getChats() {
        let url: string = `${this.chatsPageUrl}`;

        // TODO replace any with Chats once update API
        return this.http.get(url)
            .toPromise()
            .then((response: Array<Chat>) => response)
            .catch(error => {
                // TODO
                //return this.handleError(error);
            })
    }

    // private handleError(error: any): Promise<any> {
    //     this.transition.restError(error.status);
    //     return Promise.reject(error);   // will show in console
    // }
}
