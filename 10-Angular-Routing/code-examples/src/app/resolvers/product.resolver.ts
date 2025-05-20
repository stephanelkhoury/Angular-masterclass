// resolvers/product.resolver.ts

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<Product> {
  
  constructor(private productService: ProductService) {}
  
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product> | Promise<Product> | Product {
    const id = route.paramMap.get('id');
    
    if (!id) {
      return {} as Product; // Return empty product if no id provided
    }
    
    return this.productService.getProduct(id).pipe(
      catchError(error => {
        console.error('Error retrieving product data', error);
        return of({} as Product); // Return empty product on error
      })
    );
  }
}
