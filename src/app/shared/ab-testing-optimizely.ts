
/*
OPTIMIZELY SNIPPETS - front-end  (full-stack is more work)

1. Probably two snippets for Prod and QA testing (avoids messing up Prod data).
Created by an Amdin.

e.g. /src/environments/environments.ts - add QA snippet here
export const environment = {
	production: false,
	version: require('../../package.json').version,
	optimizely: {
		projectFileURL: "https://cdn.optimizely.com/public/XXXXXXX/s/YYYYYYYYYY_qa.json",
		logLevel: 1 // 1 = Debug
	}
}

-and- /src/environments/environments.prod.ts - add different Prod snippet here


2. Optimizely script download can be slow and block loading initializing so,
dynamically inject it in the right part ofthe life cycle.

e.g. /src/app/app.component.ts

ngOnInit() {
    this.setupRoutingEvents();
    this.loadOptimizely();
    ...
}

private loadOptimizely: void {
    Util.injectScript(this.document, this.OPTIMIZELY_URI_FROM_ENV)
}


3. Rest of setup and config is done through the Optimizely interface.
Notes:
- test using the Optimizely preview tools
- if you're Website is not a Single Page Application (SPA), the "snippet" will need to be added to each page.
- SPA features enabled in Project Settings, scroll down to "Dynamic Websites"
Check "Enable Support for Dynamic Websites"
*/
