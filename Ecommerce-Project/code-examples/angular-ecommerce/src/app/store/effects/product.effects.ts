import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

import { ProductService } from '../../core/services/product.service';
import * as ProductActions from '../actions/product.actions';

@Injectable()
export class ProductEffects {
  
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      switchMap(({ params }) => {
        console.log('ProductEffects: loadProducts effect triggered with params:', params);
        return this.productService.getProducts(params).pipe(
          map(paginatedResponse => {
            console.log('ProductEffects: loadProducts success with response:', paginatedResponse);
            return ProductActions.loadProductsSuccess({ paginatedResponse });
          }),
          catchError(error => {
            console.error('ProductEffects: loadProducts error:', error);
            return of(ProductActions.loadProductsFailure({ error }));
          })
        )
      })
    )
  );

  loadProductById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadProductById),
      switchMap(({ productId }) =>
        this.productService.getProductById(productId).pipe(
          map(product => ProductActions.loadProductByIdSuccess({ product })),
          catchError(error => of(ProductActions.loadProductByIdFailure({ error })))
        )
      )
    )
  );

  loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadCategories),
      switchMap(() => {
        console.log('ProductEffects: loadCategories effect triggered');
        return this.productService.getCategories().pipe(
          map(categories => {
            console.log('ProductEffects: loadCategories success with categories:', categories);
            return ProductActions.loadCategoriesSuccess({ categories });
          }),
          catchError(error => {
            console.error('ProductEffects: loadCategories error:', error);
            return of(ProductActions.loadCategoriesFailure({ error }));
          })
        )
      })
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}
