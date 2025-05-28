import { createReducer, on } from '@ngrx/store';

export interface State {
  user: any | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export const initialState: State = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null
};

export const reducer = createReducer(
  initialState
  // Add actions later
);
