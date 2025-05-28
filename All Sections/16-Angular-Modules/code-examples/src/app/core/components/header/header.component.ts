import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  template: `
    <header class="app-header">
      <div class="logo">
        <h1>Angular Modules Demo</h1>
      </div>
      
      <nav class="main-nav">
        <ul>
          <li><a routerLink="/dashboard" routerLinkActive="active">Dashboard</a></li>
          <li><a routerLink="/products" routerLinkActive="active">Products</a></li>
          <li><a routerLink="/admin" routerLinkActive="active">Admin</a></li>
        </ul>
      </nav>
      
      <div class="user-controls">
        <button *ngIf="!isLoggedIn" (click)="login()">Login</button>
        <div *ngIf="isLoggedIn" class="user-info">
          <span>Welcome, {{ username }}</span>
          <button (click)="logout()">Logout</button>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .app-header {
      background-color: #3f51b5;
      color: white;
      padding: 0 20px;
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    .logo h1 {
      margin: 0;
      font-size: 1.5rem;
    }
    
    .main-nav ul {
      display: flex;
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
    
    .main-nav li {
      margin: 0 10px;
    }
    
    .main-nav a {
      color: white;
      text-decoration: none;
      padding: 5px 10px;
    }
    
    .main-nav a.active {
      border-bottom: 2px solid white;
    }
    
    .user-controls button {
      padding: 8px 16px;
      background-color: transparent;
      border: 1px solid white;
      color: white;
      border-radius: 4px;
      cursor: pointer;
    }
    
    .user-info {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  `]
})
export class HeaderComponent {
  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
  
  get username(): string {
    return this.authService.getCurrentUser()?.username || 'User';
  }
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  
  login(): void {
    this.router.navigate(['/auth/login']);
  }
  
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
