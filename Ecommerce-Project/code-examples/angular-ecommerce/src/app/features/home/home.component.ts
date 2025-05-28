import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, combineLatest, map, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';

import { AppState } from '../../store';
import { Product } from '../../core/models/product.model';
import { Category } from '../../core/models/product.model';
import { ProductService } from '../../core/services/product.service';
import { CartService } from '../../core/services/cart.service';
import { WishlistService } from '../../core/services/wishlist.service';
import { CompareService } from '../../core/services/compare.service';
import { NotificationService } from '../../core/services/notification.service';

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
  bestSellers$: Observable<Product[]>;
  discountedProducts$: Observable<Product[]>;
  popularCategories$: Observable<Category[]>;
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
    private cartService: CartService,
    private wishlistService: WishlistService,
    private compareService: CompareService,
    private notificationService: NotificationService,
    private router: Router
  ) {
    // Initialize product data streams
    this.featuredProducts$ = this.store.select(state => 
      state.products.items.filter((product: Product) => product.featured).slice(0, 8)
    );

    this.newArrivals$ = this.store.select(state => 
      state.products.items
        .sort((a: Product, b: Product) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, 8)
    );

    this.bestSellers$ = this.store.select(state => 
      state.products.items
        .filter((product: Product) => product.featured) // Using featured as bestseller proxy
        .slice(0, 8)
    );

    this.discountedProducts$ = this.store.select(state => 
      state.products.items
        .filter((product: Product) => product.discountPrice && product.discountPrice < product.price)
        .slice(0, 8)
    );

    this.popularCategories$ = this.store.select(state => 
      state.products.categories
        .filter((category: Category) => category.featured)
        .slice(0, 6)
    );

    this.loading$ = this.store.select(state => state.ui.loading);
  }

  ngOnInit(): void {
    // Load products and categories if not already loaded
    this.productService.loadProducts();
    this.productService.loadCategories();
  }

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

  onSearch(): void {
    const query = this.searchControl.value;
    if (query) {
      this.router.navigate(['/products'], { queryParams: { search: query } });
    }
  }

  clearSearch(): void {
    this.searchControl.setValue('');
  }

  // Product interaction methods
  addToCart(event: { product: Product; quantity: number } | Product): void {
    const product = 'product' in event ? event.product : event;
    const quantity = 'quantity' in event ? event.quantity : 1;
    this.cartService.addToCart(product, quantity);
    this.notificationService.show(`${product.name} added to cart`);
  }

  addToWishlist(product: Product): void {
    this.wishlistService.addToWishlist(product);
    this.notificationService.show(`${product.name} added to wishlist`);
  }

  removeFromWishlist(product: Product): void {
    this.wishlistService.removeFromWishlist(product.id);
    this.notificationService.show('Product removed from wishlist');
  }

  addToCompare(product: Product): void {
    this.compareService.addToCompare(product);
    this.notificationService.show(`${product.name} added to compare`);
  }

  removeFromCompare(product: Product): void {
    this.compareService.removeFromCompare(product.id);
    this.notificationService.show(`${product.name} removed from compare`);
  }

  quickView(product: Product): void {
    console.log('Quick view for product:', product);
    // Implement quick view modal logic here
  }

  openQuickView(product: Product): void {
    this.quickView(product);
  }

  viewProductDetails(product: Product): void {
    this.router.navigate(['/products', product.id]);
  }

  viewCategory(category: any): void {
    this.router.navigate(['/products'], { queryParams: { category: category.id } });
  }

  buyNow(event: { product: Product; quantity: number } | Product): void {
    const product = 'product' in event ? event.product : event;
    this.addToCart(event);
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

  // Helper methods for template
  isInWishlist(productId: string): Observable<boolean> {
    return this.wishlistService.isInWishlist(productId);
  }

  isInCompare(productId: string): Observable<boolean> {
    return this.compareService.isInCompare(productId);
  }

  getCompareCount(): Observable<number> {
    return this.compareService.compareCount$;
  }

  getWishlistCount(): Observable<number> {
    return this.wishlistService.wishlistCount$;
  }

  searchProducts(query: string): void {
    if (query) {
      this.router.navigate(['/products'], { queryParams: { search: query } });
    }
  }
}
