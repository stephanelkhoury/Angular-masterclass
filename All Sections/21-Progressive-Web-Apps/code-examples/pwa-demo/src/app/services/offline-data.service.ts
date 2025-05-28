import { Injectable } from '@angular/core';
import { Observable, from, of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

interface SyncQueueItem {
  id: string;
  method: string;
  url: string;
  data: any;
  timestamp: number;
}

@Injectable({
  providedIn: 'root'
})
export class OfflineDataService {
  private readonly SYNC_QUEUE_KEY = 'pwa_sync_queue';
  private readonly CACHED_DATA_PREFIX = 'pwa_cached_';
  private dbPromise: Promise<IDBDatabase> | null = null;

  constructor(private http: HttpClient) {
    this.initDatabase();
  }

  private initDatabase(): Promise<IDBDatabase> {
    if (this.dbPromise) {
      return this.dbPromise;
    }

    this.dbPromise = new Promise((resolve, reject) => {
      const request = indexedDB.open('PWA_OfflineDB', 1);

      request.onerror = (event) => {
        console.error('IndexedDB error:', event);
        reject('Error opening IndexedDB');
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        
        // Create object stores for offline data
        if (!db.objectStoreNames.contains('syncQueue')) {
          db.createObjectStore('syncQueue', { keyPath: 'id' });
        }
        
        if (!db.objectStoreNames.contains('cachedData')) {
          db.createObjectStore('cachedData', { keyPath: 'url' });
        }
      };

      request.onsuccess = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        resolve(db);
      };
    });

    return this.dbPromise;
  }

  // Function to execute a network request with offline fallback
  public fetch<T>(url: string, options?: RequestInit): Observable<T> {
    return this.http.get<T>(url).pipe(
      catchError(error => {
        // If we're offline, try to load from cache
        if (!navigator.onLine) {
          return this.getCachedData<T>(url);
        }
        return throwError(() => error);
      })
    );
  }

  // Save data to IndexedDB
  public async cacheData<T>(url: string, data: T): Promise<void> {
    const db = await this.initDatabase();
    
    return new Promise<void>((resolve, reject) => {
      const transaction = db.transaction(['cachedData'], 'readwrite');
      const store = transaction.objectStore('cachedData');
      
      const request = store.put({
        url,
        data,
        timestamp: Date.now()
      });

      request.onerror = () => reject(new Error('Error caching data'));
      request.onsuccess = () => resolve();
    });
  }

  // Get cached data from IndexedDB
  private getCachedData<T>(url: string): Observable<T> {
    return from(this.initDatabase()).pipe(
      switchMap(db => {
        return new Promise<T>((resolve, reject) => {
          const transaction = db.transaction(['cachedData'], 'readonly');
          const store = transaction.objectStore('cachedData');
          
          const request = store.get(url);

          request.onerror = () => reject(new Error('Error retrieving cached data'));
          request.onsuccess = () => {
            if (request.result) {
              resolve(request.result.data as T);
            } else {
              reject(new Error('No cached data found'));
            }
          };
        });
      }),
      catchError(error => {
        console.error('Error retrieving cached data:', error);
        return throwError(() => new Error('No cached data available'));
      })
    );
  }

  // Add an item to the sync queue
  public async addToSyncQueue(method: string, url: string, data: any): Promise<void> {
    if (navigator.onLine) {
      // If we're online, directly perform the request
      return this.performRequest(method, url, data).then();
    }

    const db = await this.initDatabase();

    return new Promise<void>((resolve, reject) => {
      const transaction = db.transaction(['syncQueue'], 'readwrite');
      const store = transaction.objectStore('syncQueue');
      
      const queueItem: SyncQueueItem = {
        id: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
        method,
        url,
        data,
        timestamp: Date.now()
      };

      const request = store.add(queueItem);

      request.onerror = () => reject(new Error('Error adding to sync queue'));
      request.onsuccess = () => {
        console.log('Item added to sync queue:', queueItem);
        resolve();
      };
    });
  }

  // Process the sync queue (called when coming back online)
  public async processSyncQueue(): Promise<void> {
    if (!navigator.onLine) {
      console.log('Still offline, cannot process sync queue');
      return;
    }

    const db = await this.initDatabase();
    
    return new Promise<void>((resolve, reject) => {
      const transaction = db.transaction(['syncQueue'], 'readwrite');
      const store = transaction.objectStore('syncQueue');
      
      const request = store.getAll();

      request.onerror = () => reject(new Error('Error getting sync queue items'));
      request.onsuccess = async () => {
        const items: SyncQueueItem[] = request.result;
        
        console.log(`Processing ${items.length} items in sync queue`);
        
        // Process each item in the queue
        for (const item of items) {
          try {
            await this.performRequest(item.method, item.url, item.data);
            
            // Remove the item from the queue
            const deleteTransaction = db.transaction(['syncQueue'], 'readwrite');
            const deleteStore = deleteTransaction.objectStore('syncQueue');
            deleteStore.delete(item.id);
          } catch (error) {
            console.error('Error processing sync item:', error);
            // Keep the item in the queue for future retry
          }
        }
        
        resolve();
      };
    });
  }

  // Perform network request
  private async performRequest(method: string, url: string, data?: any): Promise<any> {
    const options: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    if (data && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);
    
    if (!response.ok) {
      throw new Error(`Network request failed: ${response.status}`);
    }
    
    return response.json();
  }

  // Setup background sync
  public setupBackgroundSync(): void {
    // Register online/offline events
    window.addEventListener('online', this.handleOnlineStatus.bind(this));
    window.addEventListener('offline', this.handleOfflineStatus.bind(this));

    // Register with service worker if background sync is supported
    if ('serviceWorker' in navigator && 'SyncManager' in window) {
      navigator.serviceWorker.ready.then(registration => {
        // Register a sync event
        registration.sync.register('syncData').catch(err => {
          console.error('Error registering background sync:', err);
        });
      });
    }
  }

  private handleOnlineStatus(): void {
    console.log('App is online, processing sync queue');
    this.processSyncQueue().catch(err => {
      console.error('Error processing sync queue:', err);
    });
  }

  private handleOfflineStatus(): void {
    console.log('App is offline, sync will resume when online');
  }
}
