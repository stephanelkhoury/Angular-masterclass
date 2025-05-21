import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { PwaService } from './services/pwa.service';
import { PushNotificationService } from './services/push-notification.service';
import { OfflineDataService } from './services/offline-data.service';
import { ServiceWorkerMessageService } from './services/service-worker-message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PWA Demo';
  isOnline = navigator.onLine;
  
  constructor(
    private swUpdate: SwUpdate,
    private pwaService: PwaService,
    private pushNotificationService: PushNotificationService,
    private offlineDataService: OfflineDataService,
    private swMessageService: ServiceWorkerMessageService
  ) { }

  ngOnInit(): void {
    // Setup service worker update checks
    this.pwaService.checkForUpdates();
    
    // Setup push notification listener
    this.pushNotificationService.setupPushNotificationListener();
    
    // Setup background sync
    this.offlineDataService.setupBackgroundSync();
    
    // Check online status
    this.updateOnlineStatus();
    window.addEventListener('online', this.updateOnlineStatus.bind(this));
    window.addEventListener('offline', this.updateOnlineStatus.bind(this));
  }

  updateOnlineStatus(): void {
    this.isOnline = navigator.onLine;
  }

  requestNotificationPermission(): void {
    this.pushNotificationService.subscribeToPushNotifications()
      .then(sub => {
        console.log('Successfully subscribed to push notifications');
      })
      .catch(err => {
        console.error('Failed to subscribe to push notifications', err);
      });
  }

  fetchData(): void {
    this.offlineDataService.fetch('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe({
        next: data => {
          console.log('Data fetched:', data);
          // Cache the data for offline use
          this.offlineDataService.cacheData('https://jsonplaceholder.typicode.com/todos/1', data)
            .then(() => console.log('Data cached successfully'))
            .catch(err => console.error('Error caching data:', err));
        },
        error: err => console.error('Error fetching data:', err)
      });
  }

  simulateOfflinePost(): void {
    this.offlineDataService.addToSyncQueue(
      'POST',
      'https://jsonplaceholder.typicode.com/posts',
      { title: 'Offline Post', body: 'Created while offline', userId: 1 }
    )
    .then(() => console.log('Post queued for sync'))
    .catch(err => console.error('Failed to queue post:', err));
  }

  checkCache(): void {
    if (!navigator.serviceWorker || !navigator.serviceWorker.controller) {
      alert('Service worker is not active. Please reload the page or ensure your browser supports service workers.');
      return;
    }

    const urls = [
      '/index.html',
      '/manifest.webmanifest',
      'https://jsonplaceholder.typicode.com/todos/1'
    ];

    this.swMessageService.checkCacheStatus(urls)
      .then(status => {
        console.log('Cache status:', status);
        let message = 'Cache Status:\n\n';
        
        Object.entries(status).forEach(([url, isCached]) => {
          message += `${url}: ${isCached ? '✅ Cached' : '❌ Not cached'}\n`;
        });
        
        alert(message);
      })
      .catch(err => {
        console.error('Failed to check cache status:', err);
        alert('Failed to check cache status. See console for details.');
      });
  }
}
