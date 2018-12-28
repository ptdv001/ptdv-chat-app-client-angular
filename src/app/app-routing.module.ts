import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Location } from '@angular/common';
import { LocalizeRouterModule, LocalizeParser, LocalizeRouterSettings } from 'localize-router';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { LocalizeRouterHttpLoader } from 'localize-router-http-loader';

// Any components/modules added here will be eagerly loaded (i think)
import { ErrorPageComponent } from './error-page/error-page.component';


export function httpLoaderFactory(translate: TranslateService, location: Location, settings: LocalizeRouterSettings, http: HttpClient) {
    return new LocalizeRouterHttpLoader(translate, location, settings, http, '/api/locales');
}

const routes: Routes = [

    // Lazy loaded with below loadChildren syntax
    { path: '', loadChildren: './home-page/home-page.module#HomePageModule', pathMatch: 'full' },
    { path: 'chat', loadChildren: './chat-page/chat-page.module#ChatPageModule' },
    { path: 'chats', loadChildren: './chats-page/chats-page.module#ChatsPageModule' },

    // Eager loaded routes
    { path: '404', component: ErrorPageComponent, data: { errorCode: '404' } },
    { path: '500', component: ErrorPageComponent, data: { errorCode: '500' } },
    { path: '**', redirectTo: '/404' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            {
                // enableTracing: true, // For debugging
                // onSameUrlNavigation: 'reload'
            }
        ),
        LocalizeRouterModule.forRoot(routes, {
            parser: {
                provide: LocalizeParser,
                useFactory: httpLoaderFactory,
                deps: [TranslateService, Location, LocalizeRouterSettings, HttpClient]
            },
            useCachedLang: false,
            alwaysSetPrefix: true
        })
    ],
    exports: [
        RouterModule,
        LocalizeRouterModule
    ]
})
export class AppRoutingModule { }
