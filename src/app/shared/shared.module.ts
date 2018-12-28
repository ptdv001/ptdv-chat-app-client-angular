import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorPageComponent } from '../error-page/error-page.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        ErrorPageComponent
    ],
    exports: [
        CommonModule
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
