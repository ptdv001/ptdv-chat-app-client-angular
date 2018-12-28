# PtdvChatAppClientAngular

```
SUMMARY OF ARCHITECTURE

angular.json
	3rd party concat of SCSS/CSS and JS

main.ts
	determines app-type (iFrame, app, web) from Utils and adds related class to body el
		e.g. determine if iFrame with `window.self !== window.top`
	main.html main default other than in body `<app-root></app-root>`

styles.scss
	handles app-type classes and main imports

app.component.ts
	is component `app-root` and adds routing events and main services like eventService..
		sharing state using window.dispatchEvent and CustomEvent for login info
		(vs. eventService, not sure why Native?)
	app.component.scss empty, style bootsrapping done in style.scss & angular.json
	app-component.html adds header, footer and main `<router-outlet></router-outlet>`
    app-routing.module.ts lazy loads pages, other than 404/500 which load as components
        Uses localize-router-http-loader for adding regions to routes (see e.g. from module homepage)
    app.module.ts imports main share dmodules lke TranslateModule and CookieModule

home-page/
    home-page.component.module.ts imports used components and services
    home-page-routing.module.ts adds this route's component, app-routing will go here for matching path
    home-page.service.ts add relate HTTP call
    home-page.component.ts connects selector, template, style and lifeclye init to call service and map context to this
    home-page.component.html template content (will show in app.components <router-outlet>)
    home-page.component.scss imports vars and mixins and defines styles
    (repeated pattern in directory for sub-components specific to home-page)
(repeated pattern for each page)

shared/
    component-name/
        component-name.html & .scss template to render with styles
        component.ts defines any inputs and methods
    name.service.ts any general shareable util, probably uses rxjs to pass state events around

    event.service.ts defines all event Subjects and Obserbales in app (imports event.model.ts)
    event.model.ts defines custom Data Structure for each event
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
