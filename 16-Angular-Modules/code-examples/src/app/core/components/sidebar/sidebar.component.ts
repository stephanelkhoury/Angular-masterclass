import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface NavItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  template: `
    <aside class="sidebar">
      <nav class="sidebar-nav">
        <ul>
          <li *ngFor="let item of navItems">
            <a [routerLink]="item.route" routerLinkActive="active">
              <span class="icon">{{ item.icon }}</span>
              <span class="label">{{ item.label }}</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  `,
  styles: [`
    .sidebar {
      width: 250px;
      background-color: #f9f9f9;
      height: 100%;
      border-right: 1px solid #e0e0e0;
    }
    
    .sidebar-nav ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }
    
    .sidebar-nav li {
      margin: 0;
    }
    
    .sidebar-nav a {
      display: flex;
      align-items: center;
      padding: 15px 20px;
      color: #333;
      text-decoration: none;
      border-left: 3px solid transparent;
    }
    
    .sidebar-nav a.active {
      background-color: #e3f2fd;
      border-left-color: #3f51b5;
      color: #3f51b5;
    }
    
    .icon {
      margin-right: 10px;
    }
  `]
})
export class SidebarComponent {
  navItems: NavItem[] = [
    { label: 'Dashboard', icon: '📊', route: '/dashboard' },
    { label: 'Products', icon: '📦', route: '/products' },
    { label: 'Analytics', icon: '📈', route: '/admin/analytics' },
    { label: 'Settings', icon: '⚙️', route: '/admin/settings' }
  ];
}
