import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatPageComponent } from './chat-page.component';
import { LocalizeRouterModule } from 'localize-router';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
    {
        // Path set in main router (lazy loads it)
        path: '',
        component: ChatPageComponent,
        pathMatch: 'full' // do I need this?
        //canLoad: [AuthGuard]
    }
];

@NgModule({
    imports: [
        // Below required in each child module to enable localized routing
        TranslateModule,
        LocalizeRouterModule.forChild(routes),
        RouterModule.forChild(routes)
    ],
    exports: []
})
export class ChatPageRoutingModule { }
