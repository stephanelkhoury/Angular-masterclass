import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { environment } from '../../environments/environment';

// Import feature reducers
import * as fromAuth from './reducers/auth.reducer';
import * as fromCart from './reducers/cart.reducer';
import * as fromProducts from './reducers/products.reducer';
import * as fromOrders from './reducers/orders.reducer';
import * as fromUI from './reducers/ui.reducer';

// Define the global AppState type
export interface AppState {
  router: RouterReducerState;
  auth: fromAuth.State;
  cart: fromCart.State;
  products: fromProducts.State;
  orders: fromOrders.State;
  ui: fromUI.State;
}

// Combine all reducers
export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  auth: fromAuth.reducer,
  cart: fromCart.reducer,
  products: fromProducts.reducer,
  orders: fromOrders.reducer,
  ui: fromUI.reducer
};

// Meta reducers
export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
