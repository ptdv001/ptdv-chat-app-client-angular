import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatsPageComponent } from './chats-page.component';
import { LocalizeRouterModule } from 'localize-router';

const routes: Routes = [
    {
        // Parent Path set in main router (lazy loads it), can have sub routes here
        // e.g. path: ':slug',
        path: '',
        component: ChatsPageComponent
    }
];

@NgModule({
    imports: [
        // Note `forChild` for sub modules vs. `forRoot` for app module
        RouterModule.forChild(routes),
        LocalizeRouterModule.forChild(routes)
    ],
    exports: []
})
export class ChatsPageRoutingModule { }
