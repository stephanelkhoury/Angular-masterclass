import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface User {
  id: string;
  username: string;
  email: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  
  constructor() {
    // For demo purposes, check if user is in local storage
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUserSubject.next(JSON.parse(storedUser));
    }
  }
  
  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }
  
  isLoggedIn(): boolean {
    return !!this.currentUserSubject.value;
  }
  
  login(email: string, password: string): Observable<User> {
    // Mock login - in a real app, this would call an API
    const mockUser: User = {
      id: '1',
      username: 'demouser',
      email: email,
      role: 'user'
    };
    
    this.currentUserSubject.next(mockUser);
    localStorage.setItem('currentUser', JSON.stringify(mockUser));
    
    return this.currentUserSubject.asObservable();
  }
  
  logout(): void {
    this.currentUserSubject.next(null);
    localStorage.removeItem('currentUser');
  }
}
