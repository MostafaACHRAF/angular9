import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsListComponent } from '../products-list/products-list-component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductDetailGuard } from '../product-detail/product-detail.guard';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductsListComponent },
      { path: 'products/:id', component: ProductDetailComponent, canActivate: [ProductDetailGuard] },
    ]),
  ],
  exports: [
    RouterModule
  ]
})
export class ProductRoutesModule { }
