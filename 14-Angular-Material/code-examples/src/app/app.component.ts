import { Component, HostBinding, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular Material Dashboard';
  
  // Properties for theme handling
  isDarkTheme = false;
  @HostBinding('class') className = '';
  
  // Properties for sidenav
  isSidenavOpen = true;
  
  constructor(private overlayContainer: OverlayContainer) {}
  
  ngOnInit(): void {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDarkTheme = savedTheme === 'dark';
      this.applyTheme();
    }
    
    // Check viewport size to set initial sidenav state
    if (window.innerWidth < 768) {
      this.isSidenavOpen = false;
    }
  }
  
  /**
   * Toggle between light and dark themes
   */
  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    this.applyTheme();
    localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
  }
  
  /**
   * Apply the current theme to the app and overlay container
   */
  applyTheme(): void {
    const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
    
    if (this.isDarkTheme) {
      this.className = 'dark-theme';
      overlayContainerClasses.add('dark-theme');
    } else {
      this.className = '';
      overlayContainerClasses.remove('dark-theme');
    }
  }
  
  /**
   * Toggle the sidenav open/closed state
   */
  toggleSidenav(): void {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
}
