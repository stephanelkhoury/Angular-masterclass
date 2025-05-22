import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SwUpdate } from '@angular/service-worker';

import { AppState } from './store';
import { checkAuthStatus } from './store/actions/auth.actions';
import { selectIsLoading } from './store/selectors/ui.selectors';
import { selectIsAuthenticated, selectCurrentUser } from './store/selectors/auth.selectors';
import { selectCartItemCount } from './store/selectors/cart.selectors';
import { User } from './core/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isAuthenticated$: Observable<boolean>;
  currentUser$: Observable<User | null>;
  cartItemCount$: Observable<number>;
  updateAvailable = false;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private swUpdate: SwUpdate
  ) {
    this.isLoading$ = this.store.select(selectIsLoading);
    this.isAuthenticated$ = this.store.select(selectIsAuthenticated);
    this.currentUser$ = this.store.select(selectCurrentUser);
    this.cartItemCount$ = this.store.select(selectCartItemCount);
  }

  ngOnInit(): void {
    // Check authentication status on app load
    this.store.dispatch(checkAuthStatus());
    
    // Scroll to top on route change
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => window.scrollTo(0, 0));
    
    // Subscribe to service worker updates
    if (this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates.subscribe(() => {
        this.updateAvailable = true;
      });
    }
  }

  updateApp(): void {
    if (this.updateAvailable) {
      window.location.reload();
    }
  }
}
