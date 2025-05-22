import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../store';
import { Product } from '../../core/models/product.model';
import { Category } from '../../core/models/product.model';
import { ProductService } from '../../core/services/product.service';
import { CartService } from '../../core/services/cart.service';
import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  featuredProducts$: Observable<Product[]>;
  newArrivals$: Observable<Product[]>;
  popularCategories$: Observable<Category[]>;
  loading$: Observable<boolean>;

  constructor(
    private store: Store<AppState>,
    private productService: ProductService,
    private cartService: CartService,
    private notificationService: NotificationService,
    private router: Router
  ) {
    this.featuredProducts$ = this.store.select(state => 
      state.products.items.filter(product => product.featured).slice(0, 8)
    );

    this.newArrivals$ = this.store.select(state => 
      state.products.items
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, 8)
    );

    this.popularCategories$ = this.store.select(state => 
      state.products.categories
        .filter(category => category.featured)
        .slice(0, 6)
    );

    this.loading$ = this.store.select(state => state.ui.loading);
  }

  ngOnInit(): void {
    // Load products and categories if not already loaded
    this.productService.loadProducts();
    this.productService.loadCategories();
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    this.notificationService.show(`${product.name} added to cart`);
  }

  addToWishlist(product: Product): void {
    // This would dispatch the appropriate action for the wishlist
    this.notificationService.show(`${product.name} added to wishlist`);
  }

  viewProductDetails(product: Product): void {
    this.router.navigate(['/products', product.id]);
  }

  viewCategory(category: Category): void {
    this.router.navigate(['/products'], { queryParams: { category: category.id } });
  }

  searchProducts(query: string): void {
    if (query) {
      this.router.navigate(['/products'], { queryParams: { search: query } });
    }
  }
}
