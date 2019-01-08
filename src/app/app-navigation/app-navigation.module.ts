import { NgModule } from '@angular/core';

// Must be included in declaring module for sub components to use angular features like *ngIf
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ChatHeaderComponent } from './chat-header.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [
        ChatHeaderComponent
    ],
    //put any components here to be used by sub components
    exports: [
        ChatHeaderComponent
    ],
    providers: [
    ]
})
export class AppNavigationModule { }
