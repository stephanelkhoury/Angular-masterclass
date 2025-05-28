import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { User, AuthResponse, LoginRequest, RegisterRequest, ForgotPasswordRequest } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  public currentUser$: Observable<User | null> = this.currentUserSubject.asObservable();
  
  // Normally, this would be an environment variable
  private apiUrl = '/api';
  
  constructor(
    private http: HttpClient, 
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    // Check if user is already logged in from localStorage
    this.loadUserFromStorage();
  }
  
  private loadUserFromStorage() {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
      try {
        const user = JSON.parse(userData) as User;
        this.currentUserSubject.next(user);
      } catch (error) {
        this.logout();
      }
    }
  }
  
  get isLoggedIn(): boolean {
    return !!this.currentUserSubject.value;
  }
  
  get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }
  
  login(loginData: LoginRequest): Observable<AuthResponse> {
    // For demo purposes, we're simulating a successful login
    // In a real app, this would make an HTTP request to your backend
    
    if (loginData.email === 'admin@example.com' && loginData.password === 'password') {
      const mockUser: User = {
        id: '1',
        firstName: 'John',
        lastName: 'Doe',
        email: 'admin@example.com',
        role: 'Admin',
        avatar: 'assets/images/avatars/avatar-1.png',
        createdAt: new Date(),
        updatedAt: new Date()
      };
      
      const response: AuthResponse = {
        token: 'mock-jwt-token',
        user: mockUser
      };
      
      // Store user details and token in local storage
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
      
      this.currentUserSubject.next(response.user);
      
      return of(response);
    }
    
    return throwError(() => new Error('Invalid email or password'));
    
    // Real implementation would look like this:
    // return this.http.post<AuthResponse>(`${this.apiUrl}/auth/login`, loginData)
    //   .pipe(
    //     tap(response => {
    //       localStorage.setItem('token', response.token);
    //       localStorage.setItem('user', JSON.stringify(response.user));
    //       this.currentUserSubject.next(response.user);
    //     })
    //   );
  }
  
  register(registerData: RegisterRequest): Observable<AuthResponse> {
    // For demo purposes - in a real app, this would call your API
    if (registerData.email === 'admin@example.com') {
      return throwError(() => new Error('Email already in use'));
    }
    
    const mockUser: User = {
      id: '2', // Different ID for new user
      firstName: registerData.firstName,
      lastName: registerData.lastName,
      email: registerData.email,
      role: 'User',
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    const response: AuthResponse = {
      token: 'mock-jwt-token-new-user',
      user: mockUser
    };
    
    return of(response).pipe(
      tap(res => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));
        this.currentUserSubject.next(res.user);
      })
    );
    
    // Real implementation would look like this:
    // return this.http.post<AuthResponse>(`${this.apiUrl}/auth/register`, registerData);
  }
  
  forgotPassword(request: ForgotPasswordRequest): Observable<{ message: string }> {
    // For demo purposes - simulate a successful password reset email
    return of({ message: 'If the email exists in our system, a password reset link has been sent.' });
    
    // Real implementation:
    // return this.http.post<{ message: string }>(`${this.apiUrl}/auth/forgot-password`, request);
  }
  
  logout(): void {
    // Remove user from local storage and reset the BehaviorSubject
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);
    
    // Navigate to login page
    this.router.navigate(['/login']);
    this.snackBar.open('You have been logged out successfully', 'Close', {
      duration: 3000
    });
  }
  
  // Helper method to add the JWT token to headers if the user is logged in
  getAuthorizationHeader(): string | null {
    const token = localStorage.getItem('token');
    return token ? `Bearer ${token}` : null;
  }
}
