import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));

// Here is where you would check for platforms and add flags probably through a class
// e.g. if (Util.isEmbedded()) { document.body.parentElement.classList.add('embedded')}
