import { Component, OnInit} from '@angular/core';
import { IProduct } from './product';
import { ProductFilterPipe } from './product-filter.pipe';
import { StarComponent } from '../shared/star.component';

import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html',
    styleUrls:['app/products/product-list.component.css'],
    pipes:[ProductFilterPipe],
    directives: [StarComponent]
})
export class ProductList implements OnInit{

    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter:string = '';
    products: IProduct[];
    errorMessage :string;
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    constructor( private _productService : ProductService) { }  

    ngOnInit(){
        this._productService.getProducts()
            .subscribe(
                products =>this.products = products,
                error =>this.errorMessage = <any>error);            
        console.log('message on init');
    }  
    onRatingClicked(message:string) :void{
        this.pageTitle = 'Product List: ' + message;
    }
}