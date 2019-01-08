import { NgModule } from '@angular/core';

// Required for RC5(?) imports
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Observable } from 'rxjs';

import { AppNavigationModule } from './app-navigation/app-navigation.module'

declare const window: Window;
export function windowFactory() {
    return window;
}

export class LocalizedStringsLoader implements TranslateLoader {
    private readonly API_URL: string = '/api/localized-strings';

    constructor(public http: HttpClient) { }

    getTranslation(): Observable<any> {
        return this.http.get(this.API_URL);
    }
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,

        SharedModule.forRoot(),

        // TranslateModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useClass: LocalizedStringsLoader,
                deps: [HttpClient]
            }
        }),

        AppNavigationModule
    ],
    providers: [
        { provide: Window, useFactory: windowFactory },
        // { provide: HTTP_INTERCEPTORS, useClass: RedirectInterceptor, multi: true},
    ],
    entryComponents: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
