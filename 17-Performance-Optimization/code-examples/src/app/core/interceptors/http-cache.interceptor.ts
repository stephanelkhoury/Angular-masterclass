import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CacheService } from '../services/cache.service';

@Injectable()
export class HttpCacheInterceptor implements HttpInterceptor {

  constructor(private cacheService: CacheService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Only cache GET requests
    if (request.method !== 'GET') {
      return next.handle(request);
    }
    
    // Don't cache requests with 'no-cache' header
    if (request.headers.get('no-cache')) {
      return next.handle(request);
    }
    
    // Check if we have a cached response
    const cachedResponse = this.cacheService.get(request);
    if (cachedResponse) {
      // Return the cached response as an observable
      return of(cachedResponse);
    }
    
    // No cache hit, forward request and cache response
    return next.handle(request).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          this.cacheService.put(request, event);
        }
      })
    );
  }
}
