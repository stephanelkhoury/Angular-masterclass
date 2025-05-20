import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() title: string = 'Angular Material Dashboard';
  @Input() isDarkTheme: boolean = false;
  
  @Output() toggleThemeEvent = new EventEmitter<void>();
  @Output() toggleSidenavEvent = new EventEmitter<void>();
  
  // Notifications - would typically come from a service
  notifications = [
    { id: 1, message: 'New user registered', read: false },
    { id: 2, message: 'New order received', read: false },
    { id: 3, message: 'Server update completed', read: true }
  ];
  
  constructor(private router: Router) {}
  
  toggleTheme(): void {
    this.toggleThemeEvent.emit();
  }
  
  toggleSidenav(): void {
    this.toggleSidenavEvent.emit();
  }
  
  logout(): void {
    // Implement logout logic here
    console.log('User logged out');
    this.router.navigate(['/login']);
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
