import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatsPageComponent } from './chats-page.component';

const routes: Routes = [
    {
        // Path set in main router (lazy loads it)
        path: '',
        component: ChatsPageComponent
    }
];

@NgModule({
    imports: [
        // Note `forChild` for sub modules vs. `forRoot` for app module
        RouterModule.forChild(routes)
    ],
    exports: []
})
export class ChatsPageRoutingModule { }
