import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../../../store';
import { Product } from '../../../../core/models/product.model';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent implements OnInit {
  @Input() title = 'Featured Products';
  @Input() showViewAll = true;
  @Input() viewAllLink = '/products';
  @Input() limit = 8;
  
  @Output() addToCart = new EventEmitter<Product>();
  @Output() addToWishlist = new EventEmitter<Product>();
  @Output() viewDetails = new EventEmitter<Product>();
  
  products$: Observable<Product[]>;
  loading$: Observable<boolean>;
  
  constructor(private store: Store<AppState>) {
    this.loading$ = this.store.select(state => state.ui.loading);
    this.products$ = this.store.select(state => {
      let filteredProducts = state.products.items.filter((product: Product) => product.featured);
      return filteredProducts.slice(0, this.limit);
    });
  }
  
  ngOnInit(): void {
    // Any initialization logic if needed
  }
  
  onAddToCart(event: { product: Product; quantity: number }): void {
    this.addToCart.emit(event.product);
  }
  
  onAddToWishlist(product: Product): void {
    this.addToWishlist.emit(product);
  }
  
  onViewDetails(product: Product): void {
    this.viewDetails.emit(product);
  }
}
