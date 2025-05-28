import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';

import { environment } from '../../../environments/environment';
import { CartItem } from '../models/cart.model';
import { Product } from '../models/product.model';
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

  addToCart(product: Product, quantity = 1): Observable<CartItem> {
    // Dispatch action to add to cart in store
    this.store.dispatch(addToCart({ product, quantity }));
    
    // Also sync with server
    const cartItem: Partial<CartItem> = {
      productId: product.id,
      quantity
    };
    return this.http.post<CartItem>(this.apiUrl, cartItem);
  }

  removeFromCart(id: string): Observable<void> {
    this.store.dispatch(removeFromCart({ productId: id }));
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateItemQuantity(id: string, quantity: number): Observable<CartItem> {
    this.store.dispatch(updateCartItemQuantity({ productId: id, quantity }));
    return this.http.patch<CartItem>(`${this.apiUrl}/${id}`, { quantity });
  }

  clearCart(): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/clear`);
  }

  syncCart(items: CartItem[]): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/sync`, { items });
  }
}
