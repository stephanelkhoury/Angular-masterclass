import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, catchError, exhaustMap, tap, withLatestFrom } from 'rxjs/operators';

import { CartService } from '../../core/services/cart.service';
import { NotificationService } from '../../core/services/notification.service';
import { StorageService } from '../../core/services/storage.service';
import { CartItem } from '../../core/models/cart.model';
import { AppState } from '../index';
import * as CartActions from '../actions/cart.actions';
import * as UiActions from '../actions/ui.actions';
import { selectCartItems } from '../selectors/cart.selectors';
import { selectIsAuthenticated } from '../selectors/auth.selectors';

@Injectable()
export class CartEffects {
  loadCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.loadCart),
      withLatestFrom(this.store.select(selectIsAuthenticated)),
      exhaustMap(([_, isAuthenticated]) => {
        if (isAuthenticated) {
          return this.cartService.getCart().pipe(
            map(items => CartActions.loadCartSuccess({ items })),
            catchError(error => of(CartActions.loadCartFailure({ error })))
          );
        } else {
          const localCart = this.storageService.getItem<string>('cart') || '[]';
          try {
            const items = JSON.parse(localCart);
            return of(CartActions.loadCartSuccess({ items }));
          } catch (error) {
            return of(CartActions.loadCartFailure({ error: 'Failed to parse cart data' }));
          }
        }
      })
    )
  );

  addToCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.addToCart),
      withLatestFrom(this.store.select(selectCartItems), this.store.select(selectIsAuthenticated)),
      tap(([{ product, quantity }, _, __]) => {
        this.notificationService.showSuccess(`${product.name} added to cart`);
      }),
      exhaustMap(([{ product, quantity }, currentItems, isAuthenticated]) => {
        const cartItem: CartItem = {
          productId: product.id,
          name: product.name,
          price: product.price,
          image: product.imageUrl || '',
          quantity
        };

        const updatedItems = [...currentItems];
        const existingItemIndex = updatedItems.findIndex(item => item.productId === product.id);

        if (existingItemIndex >= 0) {
          updatedItems[existingItemIndex] = {
            ...updatedItems[existingItemIndex],
            quantity: updatedItems[existingItemIndex].quantity + quantity
          };
        } else {
          updatedItems.push(cartItem);
        }

        this.storageService.setItem('cart', JSON.stringify(updatedItems));

        if (isAuthenticated) {
          return this.cartService.syncCart(updatedItems).pipe(
            map(() => CartActions.syncCartWithServerSuccess()),
            catchError(error => of(CartActions.syncCartWithServerFailure({ error })))
          );
        }
        
        return of(CartActions.syncCartWithServerSuccess());
      })
    )
  );

  removeFromCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.removeFromCart),
      withLatestFrom(this.store.select(selectCartItems), this.store.select(selectIsAuthenticated)),
      tap(([{ productId }, currentItems, _]) => {
        const item = currentItems.find(item => item.productId === productId);
        if (item) {
          this.notificationService.showInfo(`${item.name} removed from cart`);
        }
      }),
      exhaustMap(([{ productId }, currentItems, isAuthenticated]) => {
        const updatedItems = currentItems.filter(item => item.productId !== productId);
        this.storageService.setItem('cart', JSON.stringify(updatedItems));

        if (isAuthenticated) {
          return this.cartService.syncCart(updatedItems).pipe(
            map(() => CartActions.syncCartWithServerSuccess()),
            catchError(error => of(CartActions.syncCartWithServerFailure({ error })))
          );
        }
        
        return of(CartActions.syncCartWithServerSuccess());
      })
    )
  );

  updateCartItemQuantity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.updateCartItemQuantity),
      withLatestFrom(this.store.select(selectCartItems), this.store.select(selectIsAuthenticated)),
      exhaustMap(([{ productId, quantity }, currentItems, isAuthenticated]) => {
        const updatedItems = currentItems.map(item => 
          item.productId === productId ? { ...item, quantity } : item
        );
        
        this.storageService.setItem('cart', JSON.stringify(updatedItems));

        if (isAuthenticated) {
          return this.cartService.syncCart(updatedItems).pipe(
            map(() => CartActions.syncCartWithServerSuccess()),
            catchError(error => of(CartActions.syncCartWithServerFailure({ error })))
          );
        }
        
        return of(CartActions.syncCartWithServerSuccess());
      })
    )
  );

  clearCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.clearCart),
      withLatestFrom(this.store.select(selectIsAuthenticated)),
      exhaustMap(([_, isAuthenticated]) => {
        this.storageService.removeItem('cart');
        
        if (isAuthenticated) {
          return this.cartService.clearCart().pipe(
            map(() => CartActions.syncCartWithServerSuccess()),
            catchError(error => of(CartActions.syncCartWithServerFailure({ error })))
          );
        }
        
        return of(CartActions.syncCartWithServerSuccess());
      })
    )
  );

  constructor(
    private actions$: Actions,
    private cartService: CartService,
    private storageService: StorageService,
    private notificationService: NotificationService,
    private store: Store<AppState>
  ) {}
}
