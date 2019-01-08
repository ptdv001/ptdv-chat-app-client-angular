import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterLinkModule } from './router-link/router-link.module';

import { ErrorPageComponent } from '../error-page/error-page.component';

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
    // For convenience
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                // Services Here
            ]
        }
    }
}
