import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';

import { AppState } from '../../../store';
import { User } from '../../../core/models/user.model';
import { CartItem } from '../../../core/models/cart.model';
import { AuthService } from '../../../core/services/auth.service';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'] // <-- Make sure this matches your SCSS filename
})
export class HeaderComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  currentUser$: Observable<User | null>;
  cartItems$: Observable<CartItem[]>;
  cartItemCount$: Observable<number>;
  isAdmin$: Observable<boolean>;
  wishlistCount$: Observable<number>;
  notificationCount$: Observable<number>;
  notifications$: Observable<any[]>;
  
  // Alias for template compatibility
  isAuthenticated$: Observable<boolean>;
  
  // Search functionality
  searchControl = new FormControl('');
  mobileSearchControl = new FormControl('');
  searchSuggestions: string[] = [];
  showSearchSuggestions = false;
  mobileSearchOpen = false;
  showMobileSearch = false;

  // Mobile menu state
  mobileMenuOpen = false;
  showMobileMenu = false;
  megaMenuOpen = false;
  showMobileCategories = false;

  // Scroll state
  isScrolled = false;

  // Categories for mega menu
  categories = [
    {
      name: 'Electronics',
      icon: 'devices',
      subcategories: ['Smartphones', 'Laptops', 'Tablets', 'Accessories']
    },
    {
      name: 'Fashion',
      icon: 'checkroom',
      subcategories: ['Men\'s Clothing', 'Women\'s Clothing', 'Shoes', 'Bags']
    },
    {
      name: 'Home & Garden',
      icon: 'home',
      subcategories: ['Furniture', 'Decor', 'Kitchen', 'Garden']
    },
    {
      name: 'Sports',
      icon: 'sports_soccer',
      subcategories: ['Fitness', 'Outdoor', 'Team Sports', 'Equipment']
    }
  ];

  // Popular categories observable
  popularCategories$ = new BehaviorSubject(this.categories).asObservable();

  // User notifications (mock data)
  private notificationsSubject = new BehaviorSubject<any[]>([
    {
      id: 1,
      message: 'Your order has been shipped!',
      type: 'success',
      timestamp: new Date(),
      createdAt: new Date(),
      read: false
    },
    {
      id: 2,
      message: 'New products available in Electronics',
      type: 'info',
      timestamp: new Date(),
      createdAt: new Date(),
      read: false
    }
  ]);

  // Mobile detection
  isMobile = false;

  constructor(
    private store: Store<AppState>,
    private authService: AuthService,
    private cartService: CartService,
    private router: Router
  ) {
    this.isLoggedIn$ = this.store.select(state => !!state.auth.user);
    this.currentUser$ = this.store.select(state => state.auth.user);
    this.cartItems$ = this.store.select(state => state.cart.items);
    this.cartItemCount$ = this.store.select(state => 
      state.cart.items.reduce((count: number, item: CartItem) => count + item.quantity, 0)
    );
    this.isAdmin$ = this.store.select(state => state.auth.user?.role === 'admin');
    
    // Alias for template compatibility
    this.isAuthenticated$ = this.isLoggedIn$;
    
    // Mock observables for wishlist and notifications
    this.wishlistCount$ = new BehaviorSubject(3).asObservable();
    this.notifications$ = this.notificationsSubject.asObservable();
    this.notificationCount$ = this.notificationsSubject.pipe(
      map((notifications: any[]) => notifications.filter(n => !n.read).length)
    );

    this.detectMobile();
  }

  ngOnInit(): void {
    // Load cart items when component initializes
    this.cartService.loadCart();

    // Setup search functionality
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      filter(term => term !== null && term.length >= 2)
    ).subscribe(term => {
      this.onSearch(term);
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.detectMobile();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: any): void {
    // Close search suggestions when clicking outside
    if (!event.target.closest('.search-container')) {
      this.showSearchSuggestions = false;
    }
    // Close mega menu when clicking outside
    // Ensure that the click is not on the mega-menu-trigger link itself if it's used for toggling
    if (!event.target.closest('.mega-menu-trigger > .nav-link') && 
        !event.target.closest('.mega-menu-trigger .mega-menu')) {
      this.closeMegaMenu();
    }
  }

  // Search functionality - handles both with and without parameters
  onSearch(term?: string | null): void {
    const searchTerm = term !== undefined ? (term || '') : (this.searchControl.value || '');
    
    if (!searchTerm || searchTerm.length < 2) {
      this.searchSuggestions = [];
      this.showSearchSuggestions = false;
      if (term === undefined) {
        // If called without parameter (button click), perform search anyway
        this.performSearch(searchTerm);
      }
      return;
    }

    // Mock search suggestions
    const mockSuggestions = [
      'iPhone 15 Pro',
      'Samsung Galaxy S24',
      'MacBook Pro',
      'AirPods Pro',
      'iPad Air',
      'Google Pixel 8',
      'Sony WH-1000XM5',
      'Nintendo Switch'
    ];

    this.searchSuggestions = mockSuggestions
      .filter(suggestion => suggestion.toLowerCase().includes(searchTerm.toLowerCase()))
      .slice(0, 5);
    
    this.showSearchSuggestions = this.searchSuggestions.length > 0;
    
    // If called without parameter (from button click), perform search
    if (term === undefined) {
      this.performSearch(searchTerm);
    }
  }

  clearSearch(): void {
    this.searchControl.setValue('');
    this.searchSuggestions = [];
    this.showSearchSuggestions = false;
  }

  selectSuggestion(suggestion: string): void {
    this.searchControl.setValue(suggestion);
    this.showSearchSuggestions = false;
    this.performSearch(suggestion);
  }

  performSearch(term: string): void {
    if (term) {
      this.router.navigate(['/products'], { 
        queryParams: { search: term } 
      });
      this.showSearchSuggestions = false;
      if (this.mobileSearchOpen) {
        this.toggleMobileSearch();
      }
    }
  }

  // Mobile search toggle
  toggleMobileSearch(): void {
    this.mobileSearchOpen = !this.mobileSearchOpen;
    this.showMobileSearch = this.mobileSearchOpen;
    if (this.mobileSearchOpen) {
      // Focus search input after animation
      setTimeout(() => {
        const searchInput = document.querySelector('.mobile-search input') as HTMLInputElement;
        if (searchInput) {
          searchInput.focus();
        }
      }, 300);
    }
  }

  onMobileSearch(): void {
    const searchTerm = this.mobileSearchControl.value || '';
    this.performSearch(searchTerm);
    this.mobileSearchControl.setValue('');
    this.toggleMobileSearch();
  }

  // Mobile menu
  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    this.showMobileMenu = this.mobileMenuOpen;
    // Prevent body scroll when menu is open
    document.body.style.overflow = this.mobileMenuOpen ? 'hidden' : '';
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
    this.showMobileMenu = false;
    document.body.style.overflow = '';
  }

  // Mobile categories toggle
  toggleMobileCategories(): void {
    this.showMobileCategories = !this.showMobileCategories;
  }

  // Mega menu
  openMegaMenu(): void {
    if (!this.isMobile) { // Mega menu is for desktop
      this.megaMenuOpen = true;
    }
  }

  closeMegaMenu(): void {
    if (!this.isMobile) {
      this.megaMenuOpen = false;
    }
  }

  toggleMegaMenuOnClick(event: MouseEvent): void {
    if (!this.isMobile) {
      event.stopPropagation(); // Prevent document click from closing it immediately
      this.megaMenuOpen = !this.megaMenuOpen;
    }
  }

  // Navigation methods
  navigateToCategory(category: string): void {
    this.router.navigate(['/products'], { 
      queryParams: { category: category.toLowerCase() } 
    });
    this.closeMobileMenu();
    this.closeMegaMenu();
  }

  navigateToSubcategory(subcategory: string): void {
    this.router.navigate(['/products'], { 
      queryParams: { subcategory: subcategory.toLowerCase() } 
    });
    this.closeMobileMenu();
    this.closeMegaMenu();
  }

  navigateToWishlist(): void {
    this.router.navigate(['/wishlist']);
    this.closeMobileMenu();
  }

  navigateToCart(): void {
    this.router.navigate(['/cart']);
    this.closeMobileMenu();
  }

  navigateToProfile(): void {
    this.router.navigate(['/profile']);
    this.closeMobileMenu();
  }

  navigateToOrders(): void {
    this.router.navigate(['/profile/orders']);
    this.closeMobileMenu();
  }

  navigateToAdmin(): void {
    this.router.navigate(['/admin']);
    this.closeMobileMenu();
  }

  // Notification methods
  markAllAsRead(): void {
    const notifications = this.notificationsSubject.value;
    const updatedNotifications = notifications.map(n => ({ ...n, read: true }));
    this.notificationsSubject.next(updatedNotifications);
  }

  markAsRead(notification: any): void {
    const notifications = this.notificationsSubject.value;
    const updatedNotifications = notifications.map(n => 
      n.id === notification.id ? { ...n, read: true } : n
    );
    this.notificationsSubject.next(updatedNotifications);
  }

  getNotificationIcon(type: string): string {
    switch (type) {
      case 'success': return 'check_circle';
      case 'warning': return 'warning';
      case 'error': return 'error';
      case 'info': 
      default: return 'info';
    }
  }

  // Utility methods
  private detectMobile(): void {
    this.isMobile = window.innerWidth < 768;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
    this.closeMobileMenu();
    this.closeMegaMenu();
  }
}