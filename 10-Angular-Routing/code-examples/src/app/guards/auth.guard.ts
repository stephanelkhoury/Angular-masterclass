// guards/auth.guard.ts

import { Injectable } from '@angular/core';
import { 
  CanActivate, 
  ActivatedRouteSnapshot, 
  RouterStateSnapshot, 
  Router 
} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authService.isAuthenticated()) {
      // Check if a specific role is required for this route
      const requiredRole = route.data?.['requiredRole'];
      
      if (requiredRole && !this.authService.hasRole(requiredRole)) {
        // User doesn't have required role, navigate to home
        this.router.navigate(['/']);
        return false;
      }
      
      return true;
    }
    
    // Store the attempted URL for redirecting after login
    this.authService.redirectUrl = state.url;
    
    // Navigate to login page
    this.router.navigate(['/login']);
    return false;
  }
}
