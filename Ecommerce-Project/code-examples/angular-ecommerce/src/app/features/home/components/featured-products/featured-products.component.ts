import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { AppState } from '../../../../store';
import { Product } from '../../../../core/models/product.model';
import { CartItem } from '../../../../core/models/cart-item.model'; // Import CartItem
import * as CartActions from '../../../../store/actions/cart.actions';
import { WishlistService } from '../../../../core/services/wishlist.service';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturedProductsComponent implements OnInit {
  @Input() title = 'Featured Products';
  @Input() showViewAll = true;
  @Input() viewAllLink = '/products';
  @Input() limit = 8;
  @Input() products: Product[] = [];
  @Input() layout: 'grid' | 'carousel' = 'grid';

  @Output() addToCart = new EventEmitter<Product>();
  @Output() addToWishlist = new EventEmitter<Product>();
  @Output() viewDetails = new EventEmitter<Product>();
  @Output() productClicked = new EventEmitter<Product>();

  loading$: Observable<boolean>;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private wishlistService: WishlistService
  ) {
    this.loading$ = this.store.select(state => state.ui.loading);
  }

  ngOnInit(): void {
    // Any initialization logic if needed
  }

  onAddToCart(payload: { product: Product; quantity: number }): void {
    console.log('Featured: Add to cart', payload);
    const cartItem: CartItem = {
      productId: payload.product.id,
      quantity: payload.quantity,
      name: payload.product.name,
      price: payload.product.discountPrice || payload.product.price,
      unitPrice: payload.product.discountPrice || payload.product.price,
      image: payload.product.imageUrl,
      imageUrl: payload.product.imageUrl
    };
    this.store.dispatch(CartActions.addToCart({ item: cartItem }));
    // Optionally emit further up
    // this.productClicked.emit(payload.product); 
  }

  onAddToWishlist(product: Product): void {
    console.log('Featured: Add to wishlist', product);
    this.wishlistService.toggleWishlist(product.id).subscribe();
    this.addToWishlist.emit(product);
  }

  onViewDetails(product: Product): void {
    console.log('Featured: View details', product);
    this.router.navigate(['/products', product.id]);
    this.viewDetails.emit(product);
  }

  trackByProductId(index: number, product: Product): string {
    return product.id;
  }
}
