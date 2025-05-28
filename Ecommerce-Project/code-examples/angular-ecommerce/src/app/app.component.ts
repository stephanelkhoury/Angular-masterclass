import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { SwUpdate } from '@angular/service-worker';

import { AppState } from './store';
import { checkAuthStatus, logout } from './store/actions/auth.actions';
import { selectIsLoading } from './store/selectors/ui.selectors';
import { selectIsAuthenticated, selectCurrentUser } from './store/selectors/auth.selectors';
import { selectCartItemCount } from './store/selectors/cart.selectors';
import { User } from './core/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  isLoading$: Observable<boolean>;
  isAuthenticated$: Observable<boolean>;
  currentUser$: Observable<User | null>;
  cartItemCount$: Observable<number>;
  updateAvailable = false;
  showBackToTop = false;
  private destroy$ = new Subject<void>();

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

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    this.showBackToTop = window.pageYOffset > 300;
  }

  ngOnInit(): void {
    // Check authentication status on app load
    this.store.dispatch(checkAuthStatus());
    
    // Handle route changes with smooth scrolling
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    
    // Subscribe to service worker updates
    if (this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates.subscribe(() => {
        this.updateAvailable = true;
      });
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  updateApp(): void {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.activateUpdate().then(() => {
        document.location.reload();
      });
    }
  }

  logout(): void {
    this.store.dispatch(logout());
  }
}
