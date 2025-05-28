import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from '../reducers/orders.reducer';

export const selectOrdersState = createFeatureSelector<State>('orders');

export const selectUserOrders = createSelector(
  selectOrdersState,
  state => state.orders
);

export const selectCurrentOrder = createSelector(
  selectOrdersState,
  state => state.currentOrder
);

export const selectOrdersLoading = createSelector(
  selectOrdersState,
  state => state.loading
);

export const selectOrdersError = createSelector(
  selectOrdersState,
  state => state.error
);

export const selectRecentOrders = createSelector(
  selectUserOrders,
  orders => {
    if (!orders) return [];
    return [...orders]
      .sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 5);
  }
);
