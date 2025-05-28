import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, exhaustMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AuthService } from '../../core/services/auth.service';
import { StorageService } from '../../core/services/storage.service';
import { NotificationService } from '../../core/services/notification.service';
import * as AuthActions from '../actions/auth.actions';
import * as UiActions from '../actions/ui.actions';
import { AppState } from '../index';

@Injectable()
export class AuthEffects {
  checkAuthStatus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.checkAuthStatus),
      tap(() => this.store.dispatch(UiActions.setLoading({ isLoading: true }))),
      exhaustMap(() => {
        const token = this.storageService.getItem('auth_token');
        if (!token) {
          this.store.dispatch(UiActions.setLoading({ isLoading: false }));
          return of(AuthActions.checkAuthStatusFailure());
        }
        
        return this.authService.getCurrentUser().pipe(
          map(user => {
            this.store.dispatch(UiActions.setLoading({ isLoading: false }));
            if (user) {
              return AuthActions.checkAuthStatusSuccess({ user });
            }
            return AuthActions.checkAuthStatusFailure();
          }),
          catchError(error => {
            this.store.dispatch(UiActions.setLoading({ isLoading: false }));
            return of(AuthActions.checkAuthStatusFailure());
          })
        );
      })
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      tap(() => this.store.dispatch(UiActions.setLoading({ isLoading: true }))),
      exhaustMap(({ email, password }) =>
        this.authService.login(email, password).pipe(
          map(response => {
            this.storageService.setItem('auth_token', response.token);
            this.store.dispatch(UiActions.setLoading({ isLoading: false }));
            this.notificationService.showSuccess('Login successful');
            return AuthActions.loginSuccess({
              user: response.user,
              token: response.token
            });
          }),
          catchError(error => {
            this.store.dispatch(UiActions.setLoading({ isLoading: false }));
            this.notificationService.showError(error.message || 'Login failed');
            return of(AuthActions.loginFailure({ error }));
          })
        )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.register),
      tap(() => this.store.dispatch(UiActions.setLoading({ isLoading: true }))),
      exhaustMap(({ name, email, password }) =>
        this.authService.signup(email, password, name).pipe(
          map(response => {
            this.storageService.setItem('auth_token', response.token);
            this.store.dispatch(UiActions.setLoading({ isLoading: false }));
            this.notificationService.showSuccess('Registration successful');
            return AuthActions.registerSuccess({
              user: response.user,
              token: response.token
            });
          }),
          catchError(error => {
            this.store.dispatch(UiActions.setLoading({ isLoading: false }));
            this.notificationService.showError(error.message || 'Registration failed');
            return of(AuthActions.registerFailure({ error }));
          })
        )
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginSuccess, AuthActions.registerSuccess),
        tap(() => this.router.navigate(['/']))
      ),
    { dispatch: false }
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout),
      tap(() => {
        this.storageService.removeItem('auth_token');
        this.notificationService.showInfo('You have been logged out');
        this.router.navigate(['/']);
        return AuthActions.logoutSuccess();
      })
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router,
    private notificationService: NotificationService,
    private store: Store<AppState>
  ) {}
}
