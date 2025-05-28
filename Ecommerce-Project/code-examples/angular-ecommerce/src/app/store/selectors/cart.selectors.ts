import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from '../reducers/cart.reducer';

export const selectCartState = createFeatureSelector<State>('cart');

export const selectCartItems = createSelector(
  selectCartState,
  state => state.items
);

export const selectCartItemCount = createSelector(
  selectCartItems,
  items => items.reduce((count, item) => count + item.quantity, 0)
);

export const selectCartTotal = createSelector(
  selectCartItems,
  items => items.reduce((total, item) => total + (item.price * item.quantity), 0)
);

export const selectCartLoading = createSelector(
  selectCartState,
  state => state.loading
);

export const selectCartError = createSelector(
  selectCartState,
  state => state.error
);