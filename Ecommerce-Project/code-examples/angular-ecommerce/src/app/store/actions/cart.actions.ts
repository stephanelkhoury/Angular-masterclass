import { createAction, props } from '@ngrx/store';
import { Product } from '../../core/models/product.model';
import { CartItem } from '../../core/models/cart-item.model';

export const addToCart = createAction(
  '[Cart] Add To Cart',
  props<{ product: Product; quantity: number }>()
);

export const removeFromCart = createAction(
  '[Cart] Remove From Cart',
  props<{ productId: string }>()
);

export const updateCartItemQuantity = createAction(
  '[Cart] Update Cart Item Quantity',
  props<{ productId: string; quantity: number }>()
);

export const clearCart = createAction(
  '[Cart] Clear Cart'
);

export const loadCart = createAction(
  '[Cart] Load Cart'
);

export const loadCartSuccess = createAction(
  '[Cart] Load Cart Success',
  props<{ items: CartItem[] }>()
);

export const loadCartFailure = createAction(
  '[Cart] Load Cart Failure',
  props<{ error: any }>()
);

export const syncCartWithServer = createAction(
  '[Cart] Sync Cart With Server',
  props<{ items: CartItem[] }>()
);

export const syncCartWithServerSuccess = createAction(
  '[Cart] Sync Cart With Server Success'
);

export const syncCartWithServerFailure = createAction(
  '[Cart] Sync Cart With Server Failure',
  props<{ error: any }>()
);
