import { createAction, props } from '@ngrx/store';

export const setLoading = createAction(
  '[UI] Set Loading',
  props<{ isLoading: boolean }>()
);

export const showNotification = createAction(
  '[UI] Show Notification',
  props<{ message: string; notificationType: 'success' | 'error' | 'info' | 'warning' }>()
);

export const clearNotification = createAction(
  '[UI] Clear Notification'
);

export const setError = createAction(
  '[UI] Set Error',
  props<{ error: string | null }>()
);

export const clearError = createAction(
  '[UI] Clear Error'
);
