import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from '../../store';
import { logout } from '../../store/actions/auth.actions';
import { setError } from '../../store/actions/ui.actions';
import { NotificationService } from '../services/notification.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private store: Store<AppState>,
    private notificationService: NotificationService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'An unknown error occurred';
        
        if (error.error instanceof ErrorEvent) {
          // Client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // Server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          
          if (error.status === 401) {
            // Unauthorized - log out user
            this.store.dispatch(logout());
            this.router.navigate(['/auth/login']);
            errorMessage = 'Your session has expired. Please log in again.';
          }
          
          if (error.status === 403) {
            this.router.navigate(['/']);
            errorMessage = 'You do not have permission to access this resource.';
          }
          
          if (error.status === 404) {
            errorMessage = 'The requested resource was not found.';
          }
          
          if (error.status >= 500) {
            errorMessage = 'A server error occurred. Please try again later.';
          }
        }
        
        // Display error notification
        this.notificationService.showError(errorMessage);
        
        // Store error in the NgRx store
        this.store.dispatch(setError({ error: errorMessage }));
        
        return throwError(() => new Error(errorMessage));
      })
    );
  }
}