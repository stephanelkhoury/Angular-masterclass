import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Product } from '../models/product.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private readonly WISHLIST_KEY = 'ecommerce_wishlist';
  private wishlistSubject = new BehaviorSubject<Product[]>([]);
  
  public wishlist$ = this.wishlistSubject.asObservable();
  public wishlistCount$ = this.wishlist$.pipe(
    map(items => items.length)
  );

  constructor(private storageService: StorageService) {
    this.loadWishlist();
  }

  private loadWishlist(): void {
    const savedWishlist = this.storageService.getItem(this.WISHLIST_KEY);
    if (savedWishlist && Array.isArray(savedWishlist)) {
      this.wishlistSubject.next(savedWishlist);
    }
  }

  private saveWishlist(): void {
    this.storageService.setItem(this.WISHLIST_KEY, this.wishlistSubject.value);
  }

  addToWishlist(product: Product): void {
    const currentWishlist = this.wishlistSubject.value;
    const existingIndex = currentWishlist.findIndex(item => item.id === product.id);
    
    if (existingIndex === -1) {
      const updatedWishlist = [...currentWishlist, product];
      this.wishlistSubject.next(updatedWishlist);
      this.saveWishlist();
    }
  }

  removeFromWishlist(productId: string): void {
    const currentWishlist = this.wishlistSubject.value;
    const updatedWishlist = currentWishlist.filter(item => item.id !== productId);
    this.wishlistSubject.next(updatedWishlist);
    this.saveWishlist();
  }

  isInWishlist(productId: string): Observable<boolean> {
    return this.wishlist$.pipe(
      map(items => items.some(item => item.id === productId))
    );
  }

  clearWishlist(): void {
    this.wishlistSubject.next([]);
    this.saveWishlist();
  }

  getWishlist(): Product[] {
    return this.wishlistSubject.value;
  }
}
