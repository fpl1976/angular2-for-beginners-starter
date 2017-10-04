import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'search-box',
    templateUrl: 'app/components/search-box.component.html',
    styleUrls: ['app/components/search-box.component.css']
})
export class SearchBoxComponent {
    @Input('placeholder') 
    text: string = 'Type your search';

    clear(input: any): void {
        input.value = '';
    }
}