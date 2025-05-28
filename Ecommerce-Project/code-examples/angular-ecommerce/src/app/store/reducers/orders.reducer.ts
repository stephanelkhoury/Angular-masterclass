import { createReducer, on } from '@ngrx/store';

export interface Order {
  id: number;
  date: Date;
  total: number;
  status: string;
  items: any[];
}

export interface State {
  orders: Order[];
  currentOrder: Order | null;
  loading: boolean;
  error: string | null;
}

export const initialState: State = {
  orders: [],
  currentOrder: null,
  loading: false,
  error: null
};

export const reducer = createReducer(
  initialState
  // Add actions later
);
