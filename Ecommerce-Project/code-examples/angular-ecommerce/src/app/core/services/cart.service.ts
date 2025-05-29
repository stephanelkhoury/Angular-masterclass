import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';

import { environment } from '../../../environments/environment';
import { Product } from '../models/product.model';
import { CartItem } from '../models/cart-item.model'; // Use cart-item.model
import { AppState } from '../../store';
import { addToCart, removeFromCart, updateCartItemQuantity } from '../../store/actions/cart.actions';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = `${environment.apiUrl}/cart`;

  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) {}

  loadCart(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(this.apiUrl);
  }

  getCart(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(this.apiUrl);
  }

  addToCart(product: Product, quantity: number = 1): void {
    const cartItem: CartItem = {
      productId: product.id,
      quantity: quantity,
      name: product.name,
      price: product.discountPrice || product.price,
      unitPrice: product.discountPrice || product.price,
      image: product.imageUrl,
      imageUrl: product.imageUrl
    };
    this.store.dispatch(addToCart({ item: cartItem }));
  }

  getCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(this.apiUrl);
  }

  removeFromCart(id: string): void { // id is productId
    this.store.dispatch(removeFromCart({ productId: id }));
  }

  updateQuantity(id: string, quantity: number): void { // id is productId
    this.store.dispatch(updateCartItemQuantity({ productId: id, quantity }));
  }

  clearCart(): void {
    this.http.delete<void>(`${this.apiUrl}/clear`).subscribe();
  }

  syncCart(items: CartItem[]): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/sync`, { items });
  }
}
