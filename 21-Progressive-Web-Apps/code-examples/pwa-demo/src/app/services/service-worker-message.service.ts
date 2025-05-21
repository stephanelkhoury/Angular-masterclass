import { Injectable } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceWorkerMessageService {
  private messageSubject = new Subject<any>();
  public messages$: Observable<any> = this.messageSubject.asObservable();

  constructor() {
    // Listen for messages from service worker
    navigator.serviceWorker.addEventListener('message', (event) => {
      console.log('Received message from service worker', event.data);
      this.messageSubject.next(event.data);
    });
  }

  /**
   * Send a message to the service worker
   */
  sendMessageToSW(message: any): Promise<any> {
    return new Promise((resolve, reject) => {
      // Check if there's an active service worker
      if (!navigator.serviceWorker || !navigator.serviceWorker.controller) {
        return reject(new Error('No active service worker found'));
      }

      // Create a message channel
      const messageChannel = new MessageChannel();

      // Set up the response handler
      messageChannel.port1.onmessage = (event) => {
        if (event.data.error) {
          reject(event.data.error);
        } else {
          resolve(event.data);
        }
      };

      // Send the message
      navigator.serviceWorker.controller.postMessage(message, [messageChannel.port2]);
    });
  }

  /**
   * Check the cache status for specific URLs
   */
  checkCacheStatus(urls: string[]): Promise<{[url: string]: boolean}> {
    return this.sendMessageToSW({
      type: 'CHECK_CACHE',
      payload: { urls }
    });
  }

  /**
   * Force update of the service worker
   */
  forceUpdate(): Promise<any> {
    return this.sendMessageToSW({
      type: 'FORCE_UPDATE'
    });
  }

  /**
   * Clear all caches
   */
  clearCaches(): Promise<any> {
    return this.sendMessageToSW({
      type: 'CLEAR_CACHES'
    });
  }
}
