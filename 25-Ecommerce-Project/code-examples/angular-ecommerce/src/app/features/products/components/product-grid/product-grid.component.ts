import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../../core/models/product.model';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent {
  @Input() products: Product[] | null = [];
  @Input() viewMode: 'grid' | 'list' = 'grid';
  
  @Output() addToCart = new EventEmitter<Product>();
  @Output() addToWishlist = new EventEmitter<Product>();
  @Output() viewDetails = new EventEmitter<Product>();
  
  onAddToCart(product: Product): void {
    this.addToCart.emit(product);
  }
  
  onAddToWishlist(product: Product): void {
    this.addToWishlist.emit(product);
  }
  
  onViewDetails(product: Product): void {
    this.viewDetails.emit(product);
  }
}
