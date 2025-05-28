import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

interface CacheEntry {
  url: string;
  response: HttpResponse<any>;
  timestamp: number;
}

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  // Cache with configurable max age
  private cache = new Map<string, CacheEntry>();
  private maxAge = 5 * 60 * 1000; // 5 minutes default TTL
  private maxCacheSize = 100; // Maximum number of entries
  
  constructor() { }
  
  /**
   * Get cached response for a request
   */
  get(req: HttpRequest<any>): HttpResponse<any> | null {
    const url = req.urlWithParams;
    const cachedResponse = this.cache.get(url);
    
    if (!cachedResponse) {
      return null;
    }
    
    // Check if the cached response has expired
    const now = Date.now();
    if (cachedResponse.timestamp + this.maxAge < now) {
      this.cache.delete(url);
      return null;
    }
    
    return cachedResponse.response;
  }
  
  /**
   * Store response in cache
   */
  put(req: HttpRequest<any>, response: HttpResponse<any>): void {
    // Don't cache POST, PUT, DELETE requests
    if (req.method !== 'GET') {
      return;
    }
    
    // Remove oldest entry if cache is full
    if (this.cache.size === this.maxCacheSize) {
      this.removeOldest();
    }
    
    const url = req.urlWithParams;
    const entry: CacheEntry = {
      url,
      response,
      timestamp: Date.now()
    };
    
    this.cache.set(url, entry);
  }
  
  /**
   * Clear the entire cache
   */
  clearCache(): void {
    this.cache.clear();
  }
  
  /**
   * Remove an entry from the cache
   */
  invalidate(url: string): void {
    this.cache.delete(url);
  }
  
  /**
   * Remove the oldest entry from the cache
   */
  private removeOldest(): void {
    // Find the oldest entry
    let oldest: CacheEntry | null = null;
    let oldestKey: string | null = null;
    
    for (const [key, entry] of this.cache.entries()) {
      if (!oldest || entry.timestamp < oldest.timestamp) {
        oldest = entry;
        oldestKey = key;
      }
    }
    
    if (oldestKey) {
      this.cache.delete(oldestKey);
    }
  }
}
