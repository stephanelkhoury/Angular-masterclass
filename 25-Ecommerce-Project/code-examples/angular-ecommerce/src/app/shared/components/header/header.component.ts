import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { AppState } from '../../../store';
import { User } from '../../../core/models/user.model';
import { CartItem } from '../../../core/models/cart.model';
import { AuthService } from '../../../core/services/auth.service';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  currentUser$: Observable<User | null>;
  cartItems$: Observable<CartItem[]>;
  cartItemCount$: Observable<number>;
  isAdmin$: Observable<boolean>;

  mobileMenuOpen = false;

  constructor(
    private store: Store<AppState>,
    private authService: AuthService,
    private cartService: CartService,
    private router: Router
  ) {
    this.isLoggedIn$ = this.store.select(state => !!state.auth.user);
    this.currentUser$ = this.store.select(state => state.auth.user);
    this.cartItems$ = this.store.select(state => state.cart.items);
    this.cartItemCount$ = this.store.select(state => state.cart.items.reduce((count, item) => count + item.quantity, 0));
    this.isAdmin$ = this.store.select(state => state.auth.user?.role === 'admin');
  }

  ngOnInit(): void {
    // Load cart items when component initializes
    this.cartService.loadCart();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
