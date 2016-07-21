import { RouterConfig } from '@angular/router';

import { ProductList } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';

export const ProductRoutes: RouterConfig = [
    { path: 'products', component: ProductList},
    { path: 'product/:id', component: ProductDetailComponent}
];