import { Injectable } from '@angular/core';
import { 
  ActivatedRouteSnapshot, 
  RouterStateSnapshot, 
  Router, 
  UrlTree,
  CanActivateFn
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}
  
  canActivate: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
    if (this.authService.isLoggedIn) {
      return true;
    }
    
    // Store the attempted URL for redirecting
    const returnUrl = state.url;
    
    this.snackBar.open('Please log in to access this page', 'Close', {
      duration: 3000
    });
    
    // Navigate to the login page with extras
    return this.router.createUrlTree(['/login'], { 
      queryParams: { returnUrl }
    });
  }
}
