import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatPageRoutingModule } from './chat-page-routing.module';
import { ChatPageComponent } from './chat-page.component';
import { ChatService } from './chat.service';

@NgModule({
    imports: [
        CommonModule,
        ChatPageRoutingModule
    ],
    declarations: [
        ChatPageComponent
    ],
    providers: [
        ChatService
    ]
})
export class ChatPageModule { }
