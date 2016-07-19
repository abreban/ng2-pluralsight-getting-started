import { Component } from '@angular/core';
import { ProductList } from './products/product-list.component';

@Component({
    selector: 'pm-app',
    templateUrl: 'app/app.component.html',
    directives: [ProductList]
})
export class AppComponent { 
    pageTitle:string = 'Acme Product Management';
}
