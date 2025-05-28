import { createAction, props } from '@ngrx/store';
import { Order } from '../../core/models/order.model';

// Load User Orders
export const loadUserOrders = createAction(
  '[Orders] Load User Orders'
);

export const loadUserOrdersSuccess = createAction(
  '[Orders] Load User Orders Success',
  props<{ orders: Order[] }>()
);

export const loadUserOrdersFailure = createAction(
  '[Orders] Load User Orders Failure',
  props<{ error: any }>()
);

// Load Order Details
export const loadOrderDetail = createAction(
  '[Orders] Load Order Detail',
  props<{ orderId: number }>()
);

export const loadOrderDetailSuccess = createAction(
  '[Orders] Load Order Detail Success',
  props<{ order: Order }>()
);

export const loadOrderDetailFailure = createAction(
  '[Orders] Load Order Detail Failure',
  props<{ error: any }>()
);

// Create Order
export const createOrder = createAction(
  '[Orders] Create Order',
  props<{ order: Omit<Order, 'id' | 'createdAt' | 'status'> }>()
);

export const createOrderSuccess = createAction(
  '[Orders] Create Order Success',
  props<{ order: Order }>()
);

export const createOrderFailure = createAction(
  '[Orders] Create Order Failure',
  props<{ error: any }>()
);

// Cancel Order
export const cancelOrder = createAction(
  '[Orders] Cancel Order',
  props<{ orderId: number }>()
);

export const cancelOrderSuccess = createAction(
  '[Orders] Cancel Order Success',
  props<{ orderId: number }>()
);

export const cancelOrderFailure = createAction(
  '[Orders] Cancel Order Failure',
  props<{ error: any }>()
);
