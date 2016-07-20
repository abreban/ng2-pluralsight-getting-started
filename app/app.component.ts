import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';

import { ProductList } from './products/product-list.component';
import { ProductService} from './products/product.service';

@Component({
    selector: 'pm-app',
    templateUrl: 'app/app.component.html',
    directives: [ProductList],
    providers: [ProductService]
})
export class AppComponent { 
    pageTitle:string = 'Acme Product Management';
}
