import { createAction, props } from '@ngrx/store';
import { Product } from '../../core/models/product.model';
import { CartItem } from '../../core/models/cart-item.model';

export const addToCart = createAction(
  '[Cart Page] Add to Cart',
  props<{ item: CartItem }>()
);

export const removeFromCart = createAction(
  '[Cart Page] Remove from Cart',
  props<{ productId: string }>() // Changed from itemId to productId for consistency
);

export const updateCartItemQuantity = createAction(
  '[Cart Page] Update Cart Item Quantity',
  props<{ productId: string; quantity: number }>() // Changed from itemId to productId
);

export const clearCart = createAction(
  '[Cart Page] Clear Cart'
);

export const loadCart = createAction('[Cart API] Load Cart');
export const loadCartSuccess = createAction('[Cart API] Load Cart Success', props<{ items: CartItem[] }>());
export const loadCartFailure = createAction('[Cart API] Load Cart Failure', props<{ error: any }>());

export const navigateToCheckout = createAction('[Cart Page] Navigate To Checkout');

// Actions for syncing cart with server (if applicable)
export const syncCartWithServer = createAction('[Cart] Sync Cart With Server');
export const syncCartWithServerSuccess = createAction('[Cart API] Sync Cart With Server Success');
export const syncCartWithServerFailure = createAction('[Cart API] Sync Cart With Server Failure', props<{ error: any }>());
