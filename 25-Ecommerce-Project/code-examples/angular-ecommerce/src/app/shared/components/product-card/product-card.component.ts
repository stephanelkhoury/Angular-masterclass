import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  @Input() showActions = true;
  @Output() addToCart = new EventEmitter<Product>();
  @Output() addToWishlist = new EventEmitter<Product>();
  @Output() viewDetails = new EventEmitter<Product>();

  discountPercentage: number = 0;

  ngOnInit(): void {
    // Calculate discount percentage if regular price exists and is higher than sale price
    if (this.product.regularPrice && this.product.regularPrice > this.product.price) {
      this.discountPercentage = Math.round(
        ((this.product.regularPrice - this.product.price) / this.product.regularPrice) * 100
      );
    }
  }

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }

  onAddToWishlist(): void {
    this.addToWishlist.emit(this.product);
  }

  onViewDetails(): void {
    this.viewDetails.emit(this.product);
  }
}
