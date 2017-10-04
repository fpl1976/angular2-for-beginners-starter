import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, NgModule } from '@angular/core';

import { SearchBoxComponent } from './components/search-box.component';

@Component({
    selector: 'app-root',
    template: `<search-box [placeholder]="'Please type your search'"><search-box>`
})
export class AppComponent {
}

@NgModule({
    declarations: [
        AppComponent,
        SearchBoxComponent
    ],
    imports: [
        BrowserModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
