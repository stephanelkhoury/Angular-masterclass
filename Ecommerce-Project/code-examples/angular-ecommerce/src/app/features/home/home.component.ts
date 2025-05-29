import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store'; // Import select
import { Observable, map } from 'rxjs';
import { FormControl } from '@angular/forms';

import { AppState } from '../../store';
import { Product, Category } from '../../core/models/product.model';
import { ProductService } from '../../core/services/product.service';
import { CartService } from '../../core/services/cart.service';
import { WishlistService } from '../../core/services/wishlist.service';
import { NotificationService } from '../../core/services/notification.service';
import { selectFeaturedProducts, selectAllProducts, selectFeaturedCategories } from '../../store/selectors/product.selectors'; 
// Importing product actions from the correct path
import * as ProductActions from '../../store/actions/product.actions';


// Placeholder for selectNewArrivals - replace with your actual selector
// Ensure this selector is correctly defined in your product.selectors.ts
const selectNewArrivals = (state: AppState) => state.products.items; // Example: all products, then sorted

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  // Product data streams
  featuredProducts$: Observable<Product[]>;
  newArrivals$: Observable<Product[]>;
  topCategories$: Observable<Category[]>;
  bestSellers$: Observable<Product[]>;
  onSaleProducts$: Observable<Product[]>;
  loading$: Observable<boolean>;

  // View and filter controls
  viewMode: 'grid' | 'list' = 'grid';
  gridSize: 'small' | 'medium' | 'large' = 'medium';
  sortBy: 'name' | 'price' | 'rating' | 'newest' = 'newest';
  selectedCategory: string = 'all';
  searchControl = new FormControl('');

  // Filter and sorting options
  sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'name', label: 'Name A-Z' },
    { value: 'price', label: 'Price Low to High' },
    { value: 'rating', label: 'Highest Rated' }
  ];

  categoryOptions = [
    { value: 'all', label: 'All Categories' },
    { value: 'electronics', label: 'Electronics' },
    { value: 'clothing', label: 'Clothing' },
    { value: 'home', label: 'Home & Garden' },
    { value: 'books', label: 'Books' },
    { value: 'sports', label: 'Sports & Outdoors' }
  ];

  // Stats data
  siteStats = {
    totalProducts: 1250,
    happyCustomers: 15000,
    yearsExperience: 10,
    countriesServed: 25
  };

  // Newsletter subscription
  newsletterEmail = new FormControl('');
  isSubscribing = false;

  constructor(
    private store: Store<AppState>,
    private productService: ProductService,
    private router: Router, // Inject Router
    private cartService: CartService, // Inject CartService
    private wishlistService: WishlistService, // Inject WishlistService
    private notificationService: NotificationService // Inject NotificationService
  ) {
    this.store.dispatch(ProductActions.loadProducts({ params: {} })); // Dispatch action to load products
    this.store.dispatch(ProductActions.loadCategories()); // Dispatch action to load categories

    this.featuredProducts$ = this.store.pipe(
      select(selectFeaturedProducts), // Use your actual selector
      map(products => products.slice(0, 8)) 
    );

    this.newArrivals$ = this.store.select(selectNewArrivals).pipe( // Using the placeholder
      map(products => 
        [...(products || [])].sort((a: Product, b: Product) => {
          const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
          const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
          return dateB - dateA;
        }).slice(0, 8)
      )
    );

    this.topCategories$ = this.store.pipe(
      select(selectFeaturedCategories), // Use your actual selector for featured categories
       map(categories => (categories || []).slice(0, 6))
    );
    
    this.bestSellers$ = this.store.pipe(
      select(selectAllProducts), // Example: select all products
      map(products => 
        [...(products || [])]
          .filter(p => p.featured) // Or a more specific bestseller logic
          .sort((a, b) => (b.rating || 0) - (a.rating || 0)) // Example: sort by rating
          .slice(0, 8)
      )
    );

    this.onSaleProducts$ = this.store.pipe(
      select(selectAllProducts), // Example: select all products
      map(products => 
        [...(products || [])]
          .filter(p => p.discountPrice && p.discountPrice < p.price)
          .slice(0, 8)
      )
    );

    this.loading$ = this.store.select(state => state.ui.loading);
  }

  ngOnInit(): void {}

  // View and filter methods
  setViewMode(mode: 'grid' | 'list'): void {
    this.viewMode = mode;
  }

  setGridSize(size: 'small' | 'medium' | 'large'): void {
    this.gridSize = size;
  }

  onSortChange(sortBy: string): void {
    this.sortBy = sortBy as any;
  }

  onCategoryChange(categoryId: string): void {
    this.selectedCategory = categoryId;
  }

  onSearch(query: string): void {
    if (query.trim()) {
      this.router.navigate(['/products'], { queryParams: { search: query } });
    }
  }

  clearSearch(): void {
    this.searchControl.setValue('');
  }

  // Product interaction methods
  addToCart(payload: Product | { product: Product; quantity: number }): void {
    if ('product' in payload) {
      // Payload is { product: Product, quantity: number }
      this.cartService.addToCart(payload.product, payload.quantity);
      this.notificationService.show(`${payload.product.name} added to cart`);
    } else {
      // Payload is Product (fallback)
      this.cartService.addToCart(payload, 1);
      this.notificationService.show(`${payload.name} added to cart`);
    }
  }

  addToWishlist(product: Product): void {
    this.wishlistService.toggleWishlist(product.id).subscribe((added) => {
      if (added) {
        this.notificationService.show(`${product.name} added to wishlist`);
      } else {
        this.notificationService.show(`${product.name} removed from wishlist`);
      }
    });
  }

  removeFromWishlist(product: Product): void {
    this.wishlistService.toggleWishlist(product.id).subscribe(() => {
      this.notificationService.show('Product removed from wishlist');
    });
  }

  openQuickView(product: Product): void {
    // Open quick view modal or navigate to product detail
    console.log('Quick view for:', product.name);
    // For now, navigate to product detail
    this.router.navigate(['/products', product.id]);
  }

  viewProductDetails(product: Product): void {
    this.router.navigate(['/products', product.id]);
  }

  onCategoryClick(category: Category): void {
    this.router.navigate(['/products'], { queryParams: { category: category.id } });
  }

  buyNow(payload: Product | { product: Product; quantity: number }): void {
    // Add to cart and navigate to cart/checkout
    this.addToCart(payload);
    this.router.navigate(['/cart']);
  }

  // Helper methods for template
  trackByCategory(index: number, category: any): any {
    return category.id || index;
  }

  trackByProduct(index: number, product: Product): any {
    return product.id || index;
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    // Apply filtering logic here
    console.log('Filtering by category:', category);
  }

  sortProducts(sortBy: string): void {
    this.sortBy = sortBy as any;
    // Apply sorting logic here
    console.log('Sorting by:', sortBy);
  }

  // Newsletter subscription
  async subscribeToNewsletter(): Promise<void> {
    const email = this.newsletterEmail.value;
    if (!email) {
      this.notificationService.error('Please enter a valid email address');
      return;
    }

    this.isSubscribing = true;
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      this.notificationService.success('Successfully subscribed to newsletter!');
      this.newsletterEmail.setValue('');
    } catch (error) {
      this.notificationService.error('Failed to subscribe. Please try again.');
    } finally {
      this.isSubscribing = false;
    }
  }

  // Search functionality
  searchProducts(query: string): void {
    if (query.trim()) {
      this.router.navigate(['/products'], { queryParams: { search: query } });
    }
  }

  // Compare functionality
  addToCompare(product: Product): void {
    // Implement compare functionality here
    // For now, just show a notification
    this.notificationService.show(`${product.name} added to compare`);
    console.log('Product added to compare:', product);
  }

  // Category navigation
  viewCategory(category: Category): void {
    this.router.navigate(['/products'], { queryParams: { category: category.id } });
  }

  // Helper methods for wishlist and compare status
  isInWishlist(productId: string): Observable<boolean> {
    return this.wishlistService.isInWishlist(productId);
  }

  isInCompare(productId: string): Observable<boolean> {
    // return this.compareService.isInCompare(productId);
    return new Observable(observer => observer.next(false)); // Placeholder
  }

  get compareCount$(): Observable<number> {
    // return this.compareService.compareCount$;
    return new Observable(observer => observer.next(0)); // Placeholder
  }

  get wishlistCount$(): Observable<number> {
    return this.wishlistService.wishlistCount$;
  }
}
