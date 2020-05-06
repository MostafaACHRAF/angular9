import { Component, OnInit } from '@angular/core';
import { Product } from '../products-list/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products-list/products.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product details';
  product: Product;

  constructor(private activeRoute: ActivatedRoute,
    private productService: ProductsService,
    private router: Router) {}

  ngOnInit(): void {
    console.log("init product details component...")
    let productId = +this.activeRoute.snapshot.paramMap.get('id');
    console.log("product id : " + productId);
    this.productService.getProductById(productId).subscribe({
      next: product => this.product = product,
      error: err => console.log('Error : ' + err),
      complete: () => console.log("found product name : " + this.product.productName)
    })
    
  }

  getBack(): void {
    this.router.navigate(['/products'])
  }

}
