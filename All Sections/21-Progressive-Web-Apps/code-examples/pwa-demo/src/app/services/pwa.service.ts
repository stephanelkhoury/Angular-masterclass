import { Injectable } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { BehaviorSubject, Observable, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PwaService {
  private updateAvailable = new BehaviorSubject<boolean>(false);
  updateAvailable$ = this.updateAvailable.asObservable();

  constructor(private swUpdate: SwUpdate) {
    this.checkForUpdates();
  }

  checkForUpdates(): void {
    if (this.swUpdate.isEnabled) {
      // Subscribe to version updates
      this.swUpdate.versionUpdates
        .pipe(
          filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'),
          map(evt => {
            console.log(`Current version: ${evt.currentVersion}`);
            console.log(`Available version: ${evt.latestVersion}`);
            return true;
          })
        )
        .subscribe(available => {
          this.updateAvailable.next(available);
        });

      // Check for updates every 6 hours
      setInterval(() => {
        console.log('Checking for updates...');
        this.swUpdate.checkForUpdate().then(() => console.log('Update check completed'));
      }, 6 * 60 * 60 * 1000);
    }
  }

  updateApplication(): Promise<boolean> {
    if (!this.swUpdate.isEnabled) {
      return Promise.resolve(false);
    }
    
    return this.swUpdate.activateUpdate().then(() => {
      window.location.reload();
      return true;
    });
  }
}
