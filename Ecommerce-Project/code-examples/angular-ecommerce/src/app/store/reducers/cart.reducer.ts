import { createReducer, on } from '@ngrx/store';
import { CartItem } from '../../core/models/cart.model';

export interface State {
  items: CartItem[];
  total: number;
  loading: boolean;
  error: string | null;
}

export const initialState: State = {
  items: [],
  total: 0,
  loading: false,
  error: null
};

export const reducer = createReducer(
  initialState
  // Add actions later
);
