import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Product } from '../models/product.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class CompareService {
  private readonly COMPARE_KEY = 'ecommerce_compare';
  private readonly MAX_COMPARE_ITEMS = 4;
  private compareSubject = new BehaviorSubject<Product[]>([]);
  
  public compare$ = this.compareSubject.asObservable();
  public compareCount$ = this.compare$.pipe(
    map(items => items.length)
  );

  constructor(private storageService: StorageService) {
    this.loadCompareList();
  }

  private loadCompareList(): void {
    const savedCompare = this.storageService.getItem(this.COMPARE_KEY);
    if (savedCompare && Array.isArray(savedCompare)) {
      this.compareSubject.next(savedCompare);
    }
  }

  private saveCompareList(): void {
    this.storageService.setItem(this.COMPARE_KEY, this.compareSubject.value);
  }

  addToCompare(product: Product): Observable<{success: boolean, message: string}> {
    return new Observable(observer => {
      const currentCompare = this.compareSubject.value;
      const existingIndex = currentCompare.findIndex(item => item.id === product.id);
      
      if (existingIndex !== -1) {
        observer.next({success: false, message: 'Product is already in compare list'});
        observer.complete();
        return;
      }

      if (currentCompare.length >= this.MAX_COMPARE_ITEMS) {
        observer.next({success: false, message: `You can only compare up to ${this.MAX_COMPARE_ITEMS} products`});
        observer.complete();
        return;
      }

      const updatedCompare = [...currentCompare, product];
      this.compareSubject.next(updatedCompare);
      this.saveCompareList();
      observer.next({success: true, message: 'Product added to compare list'});
      observer.complete();
    });
  }

  removeFromCompare(productId: string): void {
    const currentCompare = this.compareSubject.value;
    const updatedCompare = currentCompare.filter(item => item.id !== productId);
    this.compareSubject.next(updatedCompare);
    this.saveCompareList();
  }

  isInCompare(productId: string): Observable<boolean> {
    return this.compare$.pipe(
      map(items => items.some(item => item.id === productId))
    );
  }

  clearCompare(): void {
    this.compareSubject.next([]);
    this.saveCompareList();
  }

  getCompareList(): Product[] {
    return this.compareSubject.value;
  }

  canAddMore(): boolean {
    return this.compareSubject.value.length < this.MAX_COMPARE_ITEMS;
  }

  getMaxItems(): number {
    return this.MAX_COMPARE_ITEMS;
  }
}
