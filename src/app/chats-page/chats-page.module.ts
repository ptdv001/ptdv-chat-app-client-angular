import { NgModule } from '@angular/core';

// Must be included in declaring module for sub components to use angular features like *ngIf
import { CommonModule } from '@angular/common';

// Below required for any use of routerLink and filter to localize
import { RouterModule } from '@angular/router'
import { LocalizeRouterModule } from 'localize-router';

import { ChatsPageRoutingModule } from './chats-page-routing.module';
import { ChatsPageComponent } from './chats-page.component';
import { ChatsService } from './chats.service';

@NgModule({
    imports: [
        CommonModule,
        LocalizeRouterModule,
        RouterModule,
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
