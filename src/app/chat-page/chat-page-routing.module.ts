import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatPageComponent } from './chat-page.component';

const routes: Routes = [
    {
        // Path set in main router (lazy loads it)
        path: '',
        component: ChatPageComponent,

        //pathMatch: 'full'
        //canLoad: [AuthGuard]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: []
})
export class ChatPageRoutingModule { }
