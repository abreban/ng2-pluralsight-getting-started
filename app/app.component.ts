import { Component } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';

import 'rxjs/Rx';

import { ProductList } from './products/product-list.component';
import { ProductService} from './products/product.service';

@Component({
    selector: 'pm-app',
    templateUrl: 'app/app.component.html',
    directives: [ProductList,ROUTER_DIRECTIVES],
    providers: [ProductService, HTTP_PROVIDERS]
})
export class AppComponent { 
    pageTitle:string = 'Acme Product Management';
}
