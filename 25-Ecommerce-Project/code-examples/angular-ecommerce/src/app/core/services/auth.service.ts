import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { StorageService } from './storage.service';
import { NotificationService } from './notification.service';
import { User, AuthResponse } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`;
  private tokenExpirationTimer: any;

  constructor(
    private http: HttpClient,
    private storageService: StorageService,
    private notificationService: NotificationService
  ) {}

  signup(email: string, password: string, name: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/signup`, { email, password, name })
      .pipe(
        tap(response => this.handleAuthentication(response)),
        catchError(error => {
          this.notificationService.error('Registration failed. Please try again.');
          return throwError(() => error);
        })
      );
  }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, { email, password })
      .pipe(
        tap(response => this.handleAuthentication(response)),
        catchError(error => {
          this.notificationService.error('Login failed. Please check your credentials and try again.');
          return throwError(() => error);
        })
      );
  }

  logout(): void {
    this.storageService.removeItem('userData');
    this.storageService.removeItem('token');
    
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogin(): Observable<boolean> {
    const userData = this.storageService.getItem<{
      user: User;
      token: string;
      tokenExpirationDate: string;
    }>('userData');

    if (!userData) {
      return of(false);
    }

    const loadedUser = userData.user;
    const tokenExpirationDate = new Date(userData.tokenExpirationDate);

    if (tokenExpirationDate <= new Date()) {
      this.logout();
      return of(false);
    }

    this.setAutoLogoutTimer(tokenExpirationDate.getTime() - new Date().getTime());
    return of(true);
  }

  getCurrentUser(): User | null {
    const userData = this.storageService.getItem<{
      user: User;
      token: string;
      tokenExpirationDate: string;
    }>('userData');
    
    return userData?.user || null;
  }

  getToken(): string | null {
    const userData = this.storageService.getItem<{
      user: User;
      token: string;
      tokenExpirationDate: string;
    }>('userData');
    
    return userData?.token || null;
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  private handleAuthentication(authData: AuthResponse): void {
    const expirationDate = new Date(new Date().getTime() + authData.expiresIn * 1000);
    
    const userData = {
      user: authData.user,
      token: authData.token,
      tokenExpirationDate: expirationDate.toISOString()
    };
    
    this.storageService.setItem('userData', userData);
    this.setAutoLogoutTimer(authData.expiresIn * 1000);
  }

  private setAutoLogoutTimer(duration: number): void {
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, duration);
  }
}
