import { Injectable } from '@angular/core';
import { SwPush } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {
  readonly VAPID_PUBLIC_KEY = 'BPV85AYoOUl0UdLKUHZ_ghYDJWQ8fYSrFwOiLpQUJhXnI6Cuf6qDYT9vtiJTh50m9uyG5we9ERl4MXcA0qQJqeA';

  constructor(private swPush: SwPush) { }

  subscribeToPushNotifications() {
    if (!this.swPush.isEnabled) {
      console.log('Push notifications are not enabled');
      return Promise.reject('Push notifications are not enabled');
    }

    return this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })
    .then(subscription => {
      // Here you would typically send the subscription to your server
      console.log('Push notification subscription:', subscription);
      return subscription;
    })
    .catch(err => {
      console.error('Could not subscribe to push notifications', err);
      return Promise.reject(err);
    });
  }

  unsubscribeFromPushNotifications() {
    if (!this.swPush.isEnabled) {
      return Promise.reject('Push notifications not enabled');
    }

    return this.swPush.unsubscribe()
      .then(() => {
        console.log('Successfully unsubscribed from push notifications');
        return true;
      })
      .catch(err => {
        console.error('Error unsubscribing from push notifications', err);
        return Promise.reject(err);
      });
  }

  setupPushNotificationListener() {
    if (this.swPush.isEnabled) {
      this.swPush.notificationClicks.subscribe(event => {
        console.log('Notification click:', event);
        
        // Handle the notification click, e.g., navigate to a specific page
        const url = event.notification.data.url;
        if (url) {
          window.open(url, '_blank');
        }
      });
    }
  }
}
