import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Cart, CartItem, CartAddItemRequest, CartUpdateItemRequest } from '../models/cart.model';
import { NotificationService } from './notification.service';
import { StorageService } from './storage.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = `${environment.apiUrl}/cart`;
  private cartSubject = new BehaviorSubject<Cart | null>(null);
  
  cart$ = this.cartSubject.asObservable();

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private storageService: StorageService,
    private notificationService: NotificationService
  ) {
    this.initCart();
  }

  private initCart(): void {
    // If user is logged in, get cart from API, otherwise from localStorage
    if (this.authService.isAuthenticated()) {
      this.getCartFromApi().subscribe();
    } else {
      const savedCart = this.storageService.getItem<Cart>('cart');
      if (savedCart) {
        this.cartSubject.next(savedCart);
      } else {
        this.createEmptyCart();
      }
    }
  }

  getCartFromApi(): Observable<Cart> {
    return this.http.get<Cart>(this.apiUrl).pipe(
      tap(cart => this.cartSubject.next(cart)),
      catchError(error => {
        this.notificationService.error('Failed to load your cart. Please try again.');
        return throwError(() => error);
      })
    );
  }

  addItem(request: CartAddItemRequest): Observable<Cart> {
    if (this.authService.isAuthenticated()) {
      return this.http.post<Cart>(`${this.apiUrl}/items`, request).pipe(
        tap(cart => {
          this.cartSubject.next(cart);
          this.notificationService.success('Item added to cart');
        }),
        catchError(error => {
          this.notificationService.error('Failed to add item to cart. Please try again.');
          return throwError(() => error);
        })
      );
    } else {
      // Handle guest cart in local storage
      return this.addItemToLocalCart(request);
    }
  }

  updateItem(request: CartUpdateItemRequest): Observable<Cart> {
    if (this.authService.isAuthenticated()) {
      return this.http.put<Cart>(`${this.apiUrl}/items/${request.itemId}`, { quantity: request.quantity }).pipe(
        tap(cart => {
          this.cartSubject.next(cart);
          this.notificationService.success('Cart updated');
        }),
        catchError(error => {
          this.notificationService.error('Failed to update cart. Please try again.');
          return throwError(() => error);
        })
      );
    } else {
      // Handle guest cart in local storage
      return this.updateItemInLocalCart(request);
    }
  }

  removeItem(itemId: string): Observable<Cart> {
    if (this.authService.isAuthenticated()) {
      return this.http.delete<Cart>(`${this.apiUrl}/items/${itemId}`).pipe(
        tap(cart => {
          this.cartSubject.next(cart);
          this.notificationService.success('Item removed from cart');
        }),
        catchError(error => {
          this.notificationService.error('Failed to remove item from cart. Please try again.');
          return throwError(() => error);
        })
      );
    } else {
      // Handle guest cart in local storage
      return this.removeItemFromLocalCart(itemId);
    }
  }

  clearCart(): Observable<Cart> {
    if (this.authService.isAuthenticated()) {
      return this.http.delete<Cart>(this.apiUrl).pipe(
        tap(cart => {
          this.cartSubject.next(cart);
          this.notificationService.success('Cart cleared');
        }),
        catchError(error => {
          this.notificationService.error('Failed to clear cart. Please try again.');
          return throwError(() => error);
        })
      );
    } else {
      // Handle guest cart in local storage
      return this.clearLocalCart();
    }
  }

  syncLocalCartToServer(): Observable<Cart> {
    const localCart = this.cartSubject.value;
    
    if (!localCart || localCart.items.length === 0) {
      return this.getCartFromApi();
    }

    // Send all local cart items to the server
    const items = localCart.items.map(item => ({
      productId: item.productId,
      quantity: item.quantity
    }));

    return this.http.post<Cart>(`${this.apiUrl}/sync`, { items }).pipe(
      tap(cart => {
        this.cartSubject.next(cart);
        this.storageService.removeItem('cart');
      }),
      catchError(error => {
        this.notificationService.error('Failed to sync your cart. Please try again.');
        return throwError(() => error);
      })
    );
  }

  private createEmptyCart(): void {
    const emptyCart: Cart = {
      id: `local-${new Date().getTime()}`,
      items: [],
      itemCount: 0,
      subtotal: 0,
      discount: 0,
      total: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    this.cartSubject.next(emptyCart);
    this.storageService.setItem('cart', emptyCart);
  }

  private addItemToLocalCart(request: CartAddItemRequest): Observable<Cart> {
    let cart = this.cartSubject.value;
    
    if (!cart) {
      this.createEmptyCart();
      cart = this.cartSubject.value;
    }
    
    if (!cart) {
      return throwError(() => new Error('Failed to initialize cart'));
    }

    // Check if the item already exists in the cart
    const existingItemIndex = cart.items.findIndex(item => item.productId === request.productId);
    
    if (existingItemIndex >= 0) {
      // Update quantity if item already exists
      const updatedItems = [...cart.items];
      updatedItems[existingItemIndex] = {
        ...updatedItems[existingItemIndex],
        quantity: updatedItems[existingItemIndex].quantity + request.quantity
      };
      
      return this.updateLocalCart({
        ...cart,
        items: updatedItems
      });
    } else {
      // Add new item
      const newItem: CartItem = {
        id: `local-item-${new Date().getTime()}`,
        productId: request.productId,
        quantity: request.quantity
      };
      
      return this.updateLocalCart({
        ...cart,
        items: [...cart.items, newItem]
      });
    }
  }

  private updateItemInLocalCart(request: CartUpdateItemRequest): Observable<Cart> {
    const cart = this.cartSubject.value;
    
    if (!cart) {
      return throwError(() => new Error('Cart not initialized'));
    }
    
    const itemIndex = cart.items.findIndex(item => item.id === request.itemId);
    
    if (itemIndex < 0) {
      return throwError(() => new Error('Item not found in cart'));
    }
    
    const updatedItems = [...cart.items];
    
    if (request.quantity <= 0) {
      // Remove the item if quantity is 0 or less
      updatedItems.splice(itemIndex, 1);
    } else {
      // Update the quantity
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        quantity: request.quantity
      };
    }
    
    return this.updateLocalCart({
      ...cart,
      items: updatedItems
    });
  }

  private removeItemFromLocalCart(itemId: string): Observable<Cart> {
    const cart = this.cartSubject.value;
    
    if (!cart) {
      return throwError(() => new Error('Cart not initialized'));
    }
    
    const updatedItems = cart.items.filter(item => item.id !== itemId);
    
    return this.updateLocalCart({
      ...cart,
      items: updatedItems
    });
  }

  private clearLocalCart(): Observable<Cart> {
    this.createEmptyCart();
    return this.cart$;
  }

  private updateLocalCart(cart: Cart): Observable<Cart> {
    // Recalculate totals (in a real app, we would probably fetch product details first)
    const updatedCart: Cart = {
      ...cart,
      itemCount: cart.items.reduce((count, item) => count + item.quantity, 0),
      updatedAt: new Date().toISOString()
    };
    
    this.cartSubject.next(updatedCart);
    this.storageService.setItem('cart', updatedCart);
    this.notificationService.success('Cart updated');
    
    return this.cart$.pipe(
      map(currentCart => {
        if (!currentCart) {
          throw new Error('Cart not available');
        }
        return currentCart;
      })
    );
  }
}
