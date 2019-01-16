import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterLinkModule } from './router-link/router-link.module';

import { ErrorPageComponent } from '../error-page/error-page.component';

import { EventService } from './events/events.service';
import { AnalyticsService } from './analytics/analytics.service';

// NOTE: shared components cannot be used by other shared components (I think).

@NgModule({
    imports: [
        CommonModule,
        RouterLinkModule
    ],
    declarations: [
        ErrorPageComponent
    ],
    // For use in child components
    exports: [
        CommonModule,
        RouterLinkModule,

        ErrorPageComponent
    ]
})
export class SharedModule {
    // GLOBAL SINGLETONS here.
    static forRoot(): ModuleWithProviders { // This way for convenience
        return {
            ngModule: SharedModule,
            providers: [
                // Services Here
                EventService,
                AnalyticsService
            ]
        }
    }
}
