import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';

interface CacheEntry {
  response: HttpResponse<any>;
  timestamp: number;
}

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  private cache = new Map<string, CacheEntry>();
  private readonly CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds
  
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Only cache GET requests
    if (request.method !== 'GET') {
      return next.handle(request);
    }
    
    // Don't cache requests with 'no-cache' header
    if (request.headers.get('no-cache')) {
      return next.handle(request);
    }
    
    // Don't cache authentication requests
    if (request.url.includes('/auth/')) {
      return next.handle(request);
    }
    
    // Create a cache key from the request URL
    const cacheKey = request.url;
    
    // Check if we have a cached response and it's still valid
    const cachedEntry = this.cache.get(cacheKey);
    if (cachedEntry) {
      const now = Date.now();
      if (now - cachedEntry.timestamp < this.CACHE_DURATION) {
        // Return the cached response
        return of(cachedEntry.response);
      } else {
        // Cache expired, remove it
        this.cache.delete(cacheKey);
      }
    }
    
    // No cache hit or expired cache, forward the request
    return next.handle(request).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          // Cache the response
          this.cache.set(cacheKey, {
            response: event,
            timestamp: Date.now()
          });
        }
      }),
      // Use shareReplay to handle multiple subscribers requesting the same API
      shareReplay(1)
    );
  }
  
  // Method to clear the cache
  clearCache(): void {
    this.cache.clear();
  }
  
  // Method to remove a specific entry from the cache
  removeFromCache(url: string): void {
    this.cache.delete(url);
  }
}