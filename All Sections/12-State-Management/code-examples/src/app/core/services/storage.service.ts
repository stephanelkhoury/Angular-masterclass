// Storage service for persistence
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  
  saveState<T>(key: string, state: T): void {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem(key, serializedState);
    } catch (err) {
      console.error('Could not save state', err);
    }
  }
  
  loadState<T>(key: string): T | undefined {
    try {
      const serializedState = localStorage.getItem(key);
      if (!serializedState) return undefined;
      return JSON.parse(serializedState);
    } catch (err) {
      console.error('Could not load state', err);
      return undefined;
    }
  }
  
  clearState(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (err) {
      console.error('Could not clear state', err);
    }
  }
}
