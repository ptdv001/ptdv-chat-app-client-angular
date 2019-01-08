import { NgModule } from '@angular/core';

// Must be included in declaring module for sub components to use angular features like *ngIf
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ChatsPageRoutingModule } from './chats-page-routing.module';
import { ChatsPageComponent } from './chats-page.component';
import { ChatsService } from './chats.service';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
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
