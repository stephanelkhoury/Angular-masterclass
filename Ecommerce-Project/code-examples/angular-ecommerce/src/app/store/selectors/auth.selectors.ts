import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from '../reducers/auth.reducer';

export const selectAuthState = createFeatureSelector<State>('auth');

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  state => state.isAuthenticated
);

export const selectCurrentUser = createSelector(
  selectAuthState,
  state => state.user
);

export const selectAuthError = createSelector(
  selectAuthState,
  state => state.error
);

export const selectAuthLoading = createSelector(
  selectAuthState,
  state => state.loading
);

export const selectIsAdmin = createSelector(
  selectCurrentUser,
  user => user?.isAdmin || false
);