import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap, catchError } from 'rxjs/operators';

import { AppState } from '../../../store';
import { Product, Review } from '../../../core/models/product.model';
import { ProductService } from '../../../core/services/product.service';
import { CartService } from '../../../core/services/cart.service';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product$: Observable<Product | null>;
  relatedProducts$: Observable<Product[]>;
  loading$: Observable<boolean>;
  error: string | null = null;
  
  selectedImage: string | null = null;
  quantity = 1;
  
  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService,
    private notificationService: NotificationService
  ) {
    this.loading$ = this.store.select(state => state.ui.loading);
    
    // Get product from store based on route param
    this.product$ = this.route.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(id => {
        if (!id) {
          return of(null);
        }
        
        return this.store.select(state => 
          state.products.items.find((product: Product) => product.id === id) || null
        ).pipe(
          tap(product => {
            if (!product) {
              // If product not in store, load it
              this.productService.loadProductById(id);
            } else {
              // Set selected image
              this.selectedImage = product.imageUrl;
            }
          })
        );
      }),
      catchError(err => {
        this.error = 'Failed to load product details';
        return of(null);
      })
    );
    
    // Get related products
    this.relatedProducts$ = this.product$.pipe(
      switchMap(product => {
        if (!product) {
          return of([]);
        }
        
        return this.store.select(state => 
          state.products.items
            .filter((p: Product) => p.category?.id === product.category?.id && p.id !== product.id)
            .slice(0, 4)
        );
      })
    );
  }
  
  ngOnInit(): void {
    // Ensure all products are loaded
    this.productService.loadProducts();
  }
  
  updateSelectedImage(imageUrl: string | null): void {
    this.selectedImage = imageUrl;
  }
  
  incrementQuantity(): void {
    this.quantity++;
  }
  
  decrementQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  
  addToCart(event: { product: Product; quantity: number } | Product): void {
    const product = 'product' in event ? event.product : event;
    const quantity = 'quantity' in event ? event.quantity : this.quantity;
    this.cartService.addToCart(product, quantity);
    this.notificationService.show(`${product.name} added to cart`);
  }
  
  addToWishlist(product: Product): void {
    // This would dispatch the appropriate action for the wishlist
    this.notificationService.show(`${product.name} added to wishlist`);
  }
  
  submitReview(product: Product, review: Review): void {
    // Extract only the required properties for the addProductReview method
    const reviewData = {
      rating: review.rating,
      title: review.title || '', // Ensure title is provided even if it's optional in the Review interface
      comment: review.comment
    };
    this.productService.addProductReview(product.id, reviewData);
    this.notificationService.show('Thank you for your review!');
  }
  
  goBack(): void {
    this.router.navigate(['/products']);
  }
}
