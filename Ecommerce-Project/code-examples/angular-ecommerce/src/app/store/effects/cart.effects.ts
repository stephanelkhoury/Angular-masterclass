import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, catchError, exhaustMap, tap, withLatestFrom } from 'rxjs/operators';

import { CartService } from '../../core/services/cart.service';
import { NotificationService } from '../../core/services/notification.service';
import { StorageService } from '../../core/services/storage.service';
import { CartItem } from '../../core/models/cart-item.model';
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
      map(action => action.item), // Extract the item from the action
      withLatestFrom(
        this.store.select(selectCartItems),
        this.store.select(selectIsAuthenticated)
      ),
      tap(([{ productId, quantity }, _, __]) => { // Destructure from the extracted item
        this.notificationService.showSuccess(`${productId} added to cart`);
      }),
      exhaustMap(([item, currentItems, isAuthenticated]) => {
        if (isAuthenticated) {
          // Simulate API call to add item to backend cart
                  return of({ type: '[Cart API] Add Item Success - Backend (Placeholder)', payload: item }).pipe(
            map(() => CartActions.loadCartSuccess({ 
              items: [...currentItems, {
                productId: item.productId,
                quantity: item.quantity,
                name: item.name || '',
                price: item.price,
                image: item.image || item.imageUrl || '',
                unitPrice: item.unitPrice || item.price
              }]
            })),
            catchError(error => of(CartActions.loadCartFailure({ error })))
          );
        } else {
          const cartItem: CartItem = {
            productId: item.productId,
            name: item.name || '',
            price: item.price,
            image: item.image || item.imageUrl || '',
            quantity: item.quantity
          };

          const updatedItems = [...currentItems];
          const existingItemIndex = updatedItems.findIndex(cartItem => cartItem.productId === item.productId);

          if (existingItemIndex >= 0) {
            updatedItems[existingItemIndex] = {
              ...updatedItems[existingItemIndex],
              quantity: updatedItems[existingItemIndex].quantity + item.quantity
            };
          } else {
            updatedItems.push(cartItem);
          }

          this.storageService.setItem('cart', JSON.stringify(updatedItems));

          return of(CartActions.syncCartWithServerSuccess());
        }
      })
    )
  );

  removeFromCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.removeFromCart),
      map(action => action.productId), // Extract productId
      withLatestFrom(
        this.store.select(selectCartItems),
        this.store.select(selectIsAuthenticated)
      ),
      tap(([productId, currentItems, _]) => { // Use extracted productId
        const item = currentItems.find(item => item.productId === productId);
        if (item) {
          this.notificationService.showInfo(`${item.name} removed from cart`);
        }
      }),
      exhaustMap(([productId, currentItems, isAuthenticated]) => { // Use extracted productId
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
      map(action => ({ productId: action.productId, quantity: action.quantity })), // Extract properties
      withLatestFrom(
        this.store.select(selectCartItems),
        this.store.select(selectIsAuthenticated)
      ),
      exhaustMap(([{ productId, quantity }, currentItems, isAuthenticated]) => { // Use extracted properties
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
      exhaustMap(([action, isAuthenticated]) => {
        if (isAuthenticated) {
          // Simulate API call to clear backend cart
          return of({ type: '[Cart API] Clear Cart Success - Backend (Placeholder)' }).pipe(
            map(() => CartActions.loadCartSuccess({ items: [] })),
            catchError(error => of({ type: '[Cart API] Clear Cart Failure - Backend', error }))
          );
        } else {
          // For non-authenticated users, just return success
          return of(CartActions.loadCartSuccess({ items: [] }));
        }
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
