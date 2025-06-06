import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CartItem } from '../../core/models/cart-item.model';
import { updateCartItemQuantity, removeFromCart, clearCart } from '../../store/actions/cart.actions';
import { selectCartItems, selectCartTotal, selectCartItemCount } from '../../store/selectors/cart.selectors';
import { AppState } from '../../store';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems$: Observable<CartItem[]>;
  total$: Observable<number>;
  itemCount$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.cartItems$ = this.store.select(selectCartItems);
    this.total$ = this.store.select(selectCartTotal);
    this.itemCount$ = this.store.select(selectCartItemCount);
  }

  ngOnInit(): void {}

  trackByItemId(index: number, item: CartItem): string {
    return item.productId;
  }

  updateQuantity(item: CartItem, quantity: number): void {
    if (quantity > 0) {
      this.store.dispatch(updateCartItemQuantity({ 
        productId: item.productId, 
        quantity 
      }));
    } else {
      this.removeItem(item);
    }
  }

  incrementQuantity(item: CartItem): void {
    this.store.dispatch(updateCartItemQuantity({ 
      productId: item.productId, 
      quantity: item.quantity + 1 
    }));
  }

  decrementQuantity(item: CartItem): void {
    if (item.quantity > 1) {
      this.store.dispatch(updateCartItemQuantity({ 
        productId: item.productId, 
        quantity: item.quantity - 1 
      }));
    } else {
      this.removeItem(item);
    }
  }

  removeItem(item: CartItem): void {
    this.store.dispatch(removeFromCart({ productId: item.productId }));
  }

  clearCart(): void {
    this.store.dispatch(clearCart());
  }
}
