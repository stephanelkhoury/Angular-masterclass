import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private prefix = 'angular-ecommerce_';

  constructor() {}

  setItem<T>(key: string, value: T): void {
    const storageKey = this.prefix + key;
    localStorage.setItem(storageKey, JSON.stringify(value));
  }

  getItem<T>(key: string): T | null {
    const storageKey = this.prefix + key;
    const item = localStorage.getItem(storageKey);
    
    if (!item) {
      return null;
    }
    
    try {
      return JSON.parse(item) as T;
    } catch (error) {
      console.error(`Error parsing stored item with key ${key}:`, error);
      return null;
    }
  }

  removeItem(key: string): void {
    const storageKey = this.prefix + key;
    localStorage.removeItem(storageKey);
  }

  clear(): void {
    // Only clear items with our prefix
    Object.keys(localStorage)
      .filter(key => key.startsWith(this.prefix))
      .forEach(key => localStorage.removeItem(key));
  }
}
