import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() title: string = 'Angular Material Dashboard';
  @Input() isDarkTheme: boolean = false;
  
  @Output() toggleThemeEvent = new EventEmitter<void>();
  @Output() toggleSidenavEvent = new EventEmitter<void>();
  
  currentUser: User | null = null;
  
  // Notifications - would typically come from a service
  notifications = [
    { id: 1, message: 'New user registered', read: false },
    { id: 2, message: 'New order received', read: false },
    { id: 3, message: 'Server update completed', read: true }
  ];
  
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}
  
  ngOnInit(): void {
    // Subscribe to the current user observable
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }
  
  toggleTheme(): void {
    this.toggleThemeEvent.emit();
  }
  
  toggleSidenav(): void {
    this.toggleSidenavEvent.emit();
  }
  
  logout(): void {
    this.authService.logout();
  }
  
  markAsRead(notification: any): void {
    notification.read = true;
  }
  
  clearAllNotifications(): void {
    this.notifications = [];
  }
  
  get unreadNotificationsCount(): number {
    return this.notifications.filter(n => !n.read).length;
  }
}
