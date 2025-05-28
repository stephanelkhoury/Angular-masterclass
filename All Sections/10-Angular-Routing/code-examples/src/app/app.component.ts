// app.component.ts

import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading = false;
  
  constructor(private router: Router) {
    this.setupNavigationEvents();
  }

  // Setup router events to monitor navigation lifecycle
  private setupNavigationEvents() {
    this.router.events
      .pipe(filter(event => 
        event instanceof NavigationStart || 
        event instanceof NavigationEnd || 
        event instanceof NavigationCancel || 
        event instanceof NavigationError
      ))
      .subscribe(event => {
        // Show loading indicator when navigation starts
        if (event instanceof NavigationStart) {
          this.loading = true;
          console.log('Navigation started:', event.url);
        }
        
        // Hide loading indicator when navigation ends, cancels, or errors
        if (
          event instanceof NavigationEnd || 
          event instanceof NavigationCancel || 
          event instanceof NavigationError
        ) {
          this.loading = false;
          
          if (event instanceof NavigationEnd) {
            console.log('Navigation completed:', event.url);
          }
          
          if (event instanceof NavigationError) {
            console.error('Navigation error:', event.error);
          }
        }
      });
  }
}
