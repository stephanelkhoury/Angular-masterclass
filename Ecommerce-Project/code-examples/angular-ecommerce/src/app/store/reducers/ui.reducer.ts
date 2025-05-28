import { createReducer, on } from '@ngrx/store';
import * as UiActions from '../actions/ui.actions';

export interface State {
  loading: boolean;
  sidenavOpen: boolean;
  error: string | null;
}

export const initialState: State = {
  loading: false,
  sidenavOpen: false,
  error: null
};

export const reducer = createReducer(
  initialState,
  on(UiActions.setLoading, (state, { isLoading }) => ({
    ...state,
    loading: isLoading
  })),
  on(UiActions.setError, (state, { error }) => ({
    ...state,
    error
  })),
  on(UiActions.clearNotification, state => ({
    ...state,
    error: null
  }))
);
