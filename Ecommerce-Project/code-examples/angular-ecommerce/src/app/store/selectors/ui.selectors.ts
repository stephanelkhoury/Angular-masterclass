import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from '../reducers/ui.reducer';

export const selectUiState = createFeatureSelector<State>('ui');

export const selectIsLoading = createSelector(
  selectUiState,
  state => state.loading
);

export const selectSidenavOpen = createSelector(
  selectUiState,
  state => state.sidenavOpen
);

export const selectError = createSelector(
  selectUiState,
  state => state.error
);