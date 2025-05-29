import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Don't add authorization header to external APIs like Fake Store API
    if (request.url.includes('fakestoreapi.com')) {
      console.log('JWT Interceptor: Skipping auth header for Fake Store API:', request.url);
      return next.handle(request);
    }
    
    console.log('JWT Interceptor: Processing request:', request.url);
    
    // Get the token
    const token = this.authService.getToken();
    
    if (token) {
      console.log('JWT Interceptor: Adding auth header');
      // Clone the request and add the authorization header
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    } else {
      console.log('JWT Interceptor: No token found');
    }
    
    return next.handle(request);
  }
}
