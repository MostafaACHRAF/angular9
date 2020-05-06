import { Component, Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {

    constructor(private router: Router) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log('product-detail guard is checking you route params...')
        //const id = +next.paramMap.get('id');
        const id = +next.url[1].path
        console.log('id : ' + id);
        if (isNaN(id) || id === 0) {
            alert('Invalid id !')
            this.router.navigate(['/products']);
            return false;
        }
        return true;
    }
}