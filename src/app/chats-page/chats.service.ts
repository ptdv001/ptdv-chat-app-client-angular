import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chats } from 'chat-api';

@Injectable()
export class ChatsService {
    private chatsPageUrl = 'api/chats';

    constructor(private http: HttpClient) { }

    getChats() {
        let url: string = `${this.chatsPageUrl}`;

        return this.http.get<Chats>(url)
            .toPromise()
            .then(response => response)
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
