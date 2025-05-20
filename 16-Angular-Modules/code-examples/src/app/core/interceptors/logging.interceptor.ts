import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const startTime = Date.now();
    
    return next.handle(request).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          const endTime = Date.now();
          const duration = endTime - startTime;
          
          console.log(`${request.method} ${request.urlWithParams} completed in ${duration}ms`);
          console.log(`Status: ${event.status}`);
          
          // Only log in development mode
          if (!this.isProduction()) {
            console.log('Response body:', event.body);
          }
        }
      })
    );
  }
  
  private isProduction(): boolean {
    return false; // Replace with environment check in real app
  }
}
