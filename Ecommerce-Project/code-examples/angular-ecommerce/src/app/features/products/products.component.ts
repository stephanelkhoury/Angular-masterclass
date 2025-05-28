import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subject, combineLatest } from 'rxjs';
import { takeUntil, debounceTime, map } from 'rxjs/operators';

import { AppState } from '../../store';
import { Product, Category } from '../../core/models/product.model';
import { ProductService } from '../../core/services/product.service';
import { CartService } from '../../core/services/cart.service';
import { NotificationService } from '../../core/services/notification.service';

interface ProductFilters {
  [key: string]: string | number | undefined;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
  sort?: string;
  search?: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products$: Observable<Product[]>;
  categories$: Observable<Category[]>;
  filteredProducts$: Observable<Product[]>;
  loading$: Observable<boolean>;
  
  filters: ProductFilters = {};
  searchControl = new FormControl('');
  
  viewMode: 'grid' | 'list' = 'grid';
  
  private destroy$ = new Subject<void>();
  
  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService,
    private notificationService: NotificationService
  ) {
    this.products$ = this.store.select(state => state.products.items);
    this.categories$ = this.store.select(state => state.products.categories);
    this.loading$ = this.store.select(state => state.ui.loading);
    
    // Create filtered products stream
    this.filteredProducts$ = combineLatest([
      this.products$,
      this.route.queryParams.pipe(map(params => {
        const filters: ProductFilters = {};
        
        if (params['category']) filters.category = params['category'];
        if (params['minPrice']) filters.minPrice = Number(params['minPrice']);
        if (params['maxPrice']) filters.maxPrice = Number(params['maxPrice']);
        if (params['rating']) filters.rating = Number(params['rating']);
        if (params['sort']) filters.sort = params['sort'];
        if (params['search']) {
          filters.search = params['search'];
          this.searchControl.setValue(params['search']);
        }
        
        this.filters = filters;
        return filters;
      }))
    ]).pipe(
      map(([products, filters]) => this.filterProducts(products, filters))
    );
  }
  
  ngOnInit(): void {
    // Load products and categories
    this.productService.loadProducts();
    this.productService.loadCategories();
    
    // Handle search input with debounce
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      takeUntil(this.destroy$)
    ).subscribe(value => {
      this.updateFilters({ search: value || undefined });
    });
  }
  
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  
  onCategoryChange(categoryId: string | null): void {
    this.updateFilters({ category: categoryId || undefined });
  }
  
  onPriceRangeChange(priceRange: { min: number, max: number }): void {
    this.updateFilters({
      minPrice: priceRange.min,
      maxPrice: priceRange.max
    });
  }
  
  onRatingChange(rating: number | null): void {
    this.updateFilters({ rating: rating || undefined });
  }
  
  onSortChange(sort: string): void {
    this.updateFilters({ sort });
  }
  
  onViewModeChange(mode: 'grid' | 'list'): void {
    this.viewMode = mode;
  }
  
  onAddToCart(product: Product): void {
    this.cartService.addToCart(product);
    this.notificationService.show(`${product.name} added to cart`);
  }
  
  onAddToWishlist(product: Product): void {
    // This would dispatch the appropriate action for the wishlist
    this.notificationService.show(`${product.name} added to wishlist`);
  }
  
  onViewDetails(product: Product): void {
    this.router.navigate(['/products', product.id]);
  }
  
  resetFilters(): void {
    this.searchControl.setValue('');
    this.updateFilters({
      category: undefined,
      minPrice: undefined,
      maxPrice: undefined,
      rating: undefined,
      sort: undefined,
      search: undefined
    });
  }
  
  private updateFilters(newFilters: Partial<ProductFilters>): void {
    const updatedFilters = { ...this.filters, ...newFilters };
    
    // Remove undefined values
    Object.keys(updatedFilters).forEach(key => {
      if (updatedFilters[key] === undefined) {
        delete updatedFilters[key];
      }
    });
    
    // Navigate with new query params
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { ...updatedFilters },
      queryParamsHandling: 'merge'
    });
  }
  
  private filterProducts(products: Product[], filters: ProductFilters): Product[] {
    if (!filters || Object.keys(filters).length === 0) {
      return products;
    }
    
    let filtered = [...products];
    
    // Filter by category
    if (filters.category) {
      filtered = filtered.filter(product => product.category?.id === filters.category);
    }
    
    // Filter by price range
    if (filters.minPrice !== undefined) {
      filtered = filtered.filter(product => product.price >= filters.minPrice!);
    }
    
    if (filters.maxPrice !== undefined) {
      filtered = filtered.filter(product => product.price <= filters.maxPrice!);
    }
    
    // Filter by rating
    if (filters.rating !== undefined) {
      filtered = filtered.filter(product => product.rating >= filters.rating!);
    }
    
    // Filter by search term
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchTerm) || 
        product.description.toLowerCase().includes(searchTerm) ||
        product.category?.name.toLowerCase().includes(searchTerm)
      );
    }
    
    // Sort products
    if (filters.sort) {
      switch (filters.sort) {
        case 'price-low':
          filtered.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          filtered.sort((a, b) => b.price - a.price);
          break;
        case 'rating':
          filtered.sort((a, b) => b.rating - a.rating);
          break;
        case 'newest':
          filtered.sort((a, b) => 
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
          break;
        case 'popularity':
          filtered.sort((a, b) => (b.reviews?.length || 0) - (a.reviews?.length || 0));
          break;
      }
    }
    
    return filtered;
  }
}
