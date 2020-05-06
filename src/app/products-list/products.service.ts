import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

  private apiUrl: string = "api/products/products.json";

  constructor(private http: HttpClient) {}

    getProducts(): Observable<Product[]> {
      return this.http.get<Product[]>(this.apiUrl).pipe(
        tap(data => console.log('All : ' + JSON.stringify(data))),
        catchError(this.errorHandler)
      );
    }

    private errorHandler(err: HttpErrorResponse) {
      let errMsg = '';
      if (err.error instanceof ErrorEvent) {
        errMsg = `Error : ${err.message} !`

      } else {
        errMsg = `Error : something went wrong on the server side. Code : ${err.status} : ${err.message} !`
      }
      console.log(">>>>>>" + this.apiUrl + ">>>>>> : " + errMsg);
      return throwError(errMsg);
    }

    getProductById(id: number): Observable<Product | undefined> {
      return this.getProducts().pipe(
        map((products: Product[]) => products.find(p => p.productId === id))
      );
    }
}