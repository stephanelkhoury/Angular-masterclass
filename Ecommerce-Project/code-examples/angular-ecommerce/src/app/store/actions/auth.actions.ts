import { createAction, props } from '@ngrx/store';
import { User } from '../../core/models/user.model';

// Check Auth Status
export const checkAuthStatus = createAction(
  '[Auth] Check Auth Status'
);

export const checkAuthStatusSuccess = createAction(
  '[Auth] Check Auth Status Success',
  props<{ user: User }>()
);

export const checkAuthStatusFailure = createAction(
  '[Auth] Check Auth Status Failure'
);

// Login
export const login = createAction(
  '[Auth] Login',
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: User; token: string }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: any }>()
);

// Register
export const register = createAction(
  '[Auth] Register',
  props<{ name: string; email: string; password: string }>()
);

export const registerSuccess = createAction(
  '[Auth] Register Success',
  props<{ user: User; token: string }>()
);

export const registerFailure = createAction(
  '[Auth] Register Failure',
  props<{ error: any }>()
);

// Logout
export const logout = createAction(
  '[Auth] Logout'
);

export const logoutSuccess = createAction(
  '[Auth] Logout Success'
);

// Reset Auth State
export const resetAuthState = createAction(
  '[Auth] Reset Auth State'
);