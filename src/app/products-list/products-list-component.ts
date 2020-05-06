import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductsService } from './products.service';

@Component({
    templateUrl: './products-list-component.html',
    styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
    title: string = "Products list";
    showImages: boolean = false;
    products: Product[];
    private errMessage: string = '';

    private _filterBy: string;

    get filterBy() {
        return this._filterBy;
    }

    set filterBy(value: string) {
        this._filterBy = value;
        this.filtredProducts = this.filterBy ? this.doFilterProducts(this.filterBy) : this.products;
    }
    
    filtredProducts: Product[];

    constructor(private productService: ProductsService) {}

    toggleImages() : void {
        this.showImages = !this.showImages;
    }

    ngOnInit(): void {
        console.log("init...")
        this.productService.getProducts().subscribe({
            next: products => this.products = products,
            error: err => {console.log(err); this.errMessage = err},
            complete: () => {console.log('Http request completed'); this.filtredProducts = this.products;}
        });
        //this.filtredProducts = this.products;
    }

    doFilterProducts(word: string): Product[] {
        return this.products.filter((p: Product) => p.productCode.toLocaleLowerCase().indexOf(word.toLocaleLowerCase()) !== -1);
    }

    onNotify(event: string): void {
        console.log("event : " + event);
    }
}