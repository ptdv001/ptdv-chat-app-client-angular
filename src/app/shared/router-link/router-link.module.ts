import { NgModule } from '@angular/core';

// Must be included in declaring module for sub components to use angular features like *ngIf
import { CommonModule } from '@angular/common';

// Below required for any use of routerLink and filter to localize
import { RouterModule } from '@angular/router'
import { LocalizeRouterModule } from 'localize-router';

import { RouterLinkComponent } from './router-link.component';

@NgModule({
    imports: [
        CommonModule,
        LocalizeRouterModule,
        RouterModule,
    ],
    declarations: [
        RouterLinkComponent
    ],
    exports: [
        RouterLinkComponent
    ]
})
export class RouterLinkModule { }
