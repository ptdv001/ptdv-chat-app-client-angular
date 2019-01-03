import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chat } from 'chat-api';

@Injectable()
export class ChatService {
    private chatsPageUrl = 'api/chats';

    constructor(private http: HttpClient) { }

    getChat(id: number) {
        let url: string = `${this.chatsPageUrl}/${id}`;

        // TODO replace any with Chats once update API
        return this.http.get(url)
            .toPromise()
            .then((response: Chat) => response)
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
