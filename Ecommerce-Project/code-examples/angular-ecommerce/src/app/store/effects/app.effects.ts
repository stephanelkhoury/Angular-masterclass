import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { AppState } from '../index';
import { setLoading, clearError } from '../actions/ui.actions';

@Injectable()
export class AppEffects {
  // Clear errors when navigating
  navigationEffect$ = createEffect(() => 
    this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      tap(() => {
        this.store.dispatch(clearError());
      })
    ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store<AppState>
  ) {}
}
