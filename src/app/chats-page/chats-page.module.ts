import { NgModule } from '@angular/core';
import { ChatsPageRoutingModule } from './chats-page-routing.module';
import { ChatsPageComponent } from './chats-page.component';
import { ChatsService } from './chats.service';

@NgModule({
    imports: [
        ChatsPageRoutingModule
    ],

    //exports[], //put any components here to be used by sub components

    declarations: [
        ChatsPageComponent
    ],
    providers: [
        ChatsService
    ]
})
export class ChatsPageModule { }
