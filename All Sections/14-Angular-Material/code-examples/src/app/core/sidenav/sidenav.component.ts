import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface NavItem {
  label: string;
  icon: string;
  route?: string;
  children?: NavItem[];
  expanded?: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  navItems: NavItem[] = [
    { 
      label: 'Dashboard',
      icon: 'dashboard',
      route: '/dashboard'
    },
    { 
      label: 'Users',
      icon: 'people',
      route: '/users'
    },
    {
      label: 'Products',
      icon: 'inventory_2',
      route: '/products'
    },
    {
      label: 'Reports',
      icon: 'analytics',
      expanded: false,
      children: [
        {
          label: 'Sales Report',
          icon: 'attach_money',
          route: '/reports/sales'
        },
        {
          label: 'Traffic Report',
          icon: 'trending_up',
          route: '/reports/traffic'
        }
      ]
    },
    {
      label: 'Settings',
      icon: 'settings',
      route: '/settings'
    }
  ];
  
  constructor(private router: Router) {}
  
  toggleExpand(item: NavItem): void {
    item.expanded = !item.expanded;
  }
  
  isActiveRoute(route: string): boolean {
    return this.router.isActive(route, {
      paths: 'exact',
      queryParams: 'exact',
      fragment: 'ignored',
      matrixParams: 'ignored'
    });
  }
}
