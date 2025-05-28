import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  isMenuOpen = false;
  isSearchOpen = false;
  isCartOpen = false;
  activeRoute: string = '';
  activeDropdown: string | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Track active route for highlighting current page in navigation
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const url = this.router.url;
        if (url === '/') {
          this.activeRoute = 'home';
        } else {
          // Extract the first segment of the URL path
          this.activeRoute = url.split('/')[1];
        }
      });
  }

  // Track scroll position to change navbar styling
  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    
    // Close other elements if menu is opened
    if (this.isMenuOpen) {
      this.isSearchOpen = false;
      this.isCartOpen = false;
    }
  }

  toggleSearch() {
    this.isSearchOpen = !this.isSearchOpen;
    
    // Close other elements if search is opened
    if (this.isSearchOpen) {
      this.isMenuOpen = false;
      this.isCartOpen = false;
    }
  }

  toggleCart() {
    this.isCartOpen = !this.isCartOpen;
    
    // Close other elements if cart is opened
    if (this.isCartOpen) {
      this.isMenuOpen = false;
      this.isSearchOpen = false;
    }
  }

  toggleDropdown(dropdown: string) {
    this.activeDropdown = this.activeDropdown === dropdown ? null : dropdown;
  }
}
