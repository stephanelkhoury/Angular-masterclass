import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';

/**
 * Custom preloading strategy that preloads modules based on the 'preload' data property.
 * Also delays preloading to improve initial load performance.
 */
@Injectable()
export class CustomPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    // Check if this route should be preloaded
    if (route.data && route.data['preload']) {
      console.log(`Preloading: ${route.path}`);
      
      // Delay preloading by 2 seconds to not compete with initial load
      return of(true).pipe(
        delay(2000),
        switchMap(() => load())
      );
    } else {
      return of(null);
    }
  }
}
