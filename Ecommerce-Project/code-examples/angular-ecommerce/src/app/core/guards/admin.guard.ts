import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { AppState } from '../../store';
import { selectCurrentUser } from '../../store/selectors/auth.selectors';
import { NotificationService } from '../services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    return this.store.select(selectCurrentUser).pipe(
      take(1),
      map(user => {
        if (user?.isAdmin) {
          return true;
        }
        
        this.notificationService.error('You do not have permission to access this area');
        return this.router.createUrlTree(['/']);
      })
    );
  }
}
