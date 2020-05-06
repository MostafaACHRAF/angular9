import { NgModule } from '@angular/core';
import { ProductsListComponent } from '../products-list/products-list-component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ToSpace } from '../shared/toSpace.pipe';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutesModule } from '../routes/product-routes.module';



@NgModule({
  declarations: [
    ProductsListComponent,
    ProductDetailComponent,
    ToSpace
  ],
  imports: [
    ProductRoutesModule,
    SharedModule
  ]
})
export class ProductModule { }
