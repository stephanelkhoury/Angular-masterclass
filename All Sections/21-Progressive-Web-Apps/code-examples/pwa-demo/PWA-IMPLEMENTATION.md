# PWA Implementation Guide

This document provides detailed explanations of how the Progressive Web App (PWA) features are implemented in our Angular application. Use this as a reference for understanding the code and concepts.

## Service Worker Implementation

Our PWA uses Angular's built-in service worker support through `@angular/service-worker`. The service worker is configured in two key places:

1. **App Module Configuration**:
```typescript
ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
  registrationStrategy: 'registerWhenStable:30000'
})
```

2. **ngsw-config.json**:
This file defines the caching strategies and is processed during build time to generate the actual service worker script.

### Caching Strategies Explained

Our `ngsw-config.json` defines several asset groups with different caching strategies:

- **App Shell (Prefetch Strategy)**: Critical resources needed for the app shell are pre-cached aggressively.
- **Assets (Lazy Strategy)**: Non-critical assets are cached on first use.
- **API Data (Performance & Freshness Strategy)**: API responses use a combination of strategies based on importance.

## Offline Capabilities

Offline functionality is implemented through several mechanisms:

1. **Service Worker Cache**: Static assets and data are cached according to the rules in `ngsw-config.json`.

2. **IndexedDB Storage**: Dynamic data is stored in IndexedDB for offline access via the `OfflineDataService`:
```typescript
// Key methods in OfflineDataService
public fetch<T>(url: string): Observable<T> // Attempts network fetch, falls back to cache
public cacheData<T>(url: string, data: T): Promise<void> // Stores data in IndexedDB
private getCachedData<T>(url: string): Observable<T> // Retrieves cached data
```

3. **Offline Status Detection**: The app monitors network status through browser events:
```typescript
window.addEventListener('online', this.updateOnlineStatus.bind(this));
window.addEventListener('offline', this.updateOnlineStatus.bind(this));
```

## Background Sync

Background sync is implemented using:

1. **Sync Queue**: The `OfflineDataService` maintains a queue of operations that need to be synchronized:
```typescript
public async addToSyncQueue(method: string, url: string, data: any): Promise<void>
public async processSyncQueue(): Promise<void>
```

2. **Browser Sync API**: When available, we register with the SyncManager:
```typescript
if ('serviceWorker' in navigator && 'SyncManager' in window) {
  navigator.serviceWorker.ready.then(registration => {
    registration.sync.register('syncData');
  });
}
```

3. **Online Event Handling**: When the app comes back online, it processes the sync queue automatically.

## Push Notifications

Push notifications are implemented through:

1. **Service Worker Push API**: We use the `SwPush` service from Angular:
```typescript
subscribeToPushNotifications() {
  return this.swPush.requestSubscription({
    serverPublicKey: this.VAPID_PUBLIC_KEY
  });
}
```

2. **Permission Management**: The app requests and tracks notification permissions.

3. **Notification Click Handling**: The service worker listens for notification clicks and routes users to the appropriate page.

## App Installation Features

The app installation experience is handled by:

1. **Web App Manifest**: The `manifest.webmanifest` file defines how the app appears when installed:
```json
{
  "name": "PWA Demo",
  "short_name": "PWA Demo",
  "theme_color": "#1976d2",
  "background_color": "#fafafa",
  "display": "standalone",
  "scope": "./",
  "start_url": "./",
  "icons": [...]
}
```

2. **Install Prompt Detection**: The app listens for the `beforeinstallprompt` event to provide a custom install experience:
```typescript
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  this.deferredPrompt = e;
  this.showInstallButton = true;
});
```

3. **Custom Install UI**: A dedicated component provides a user-friendly installation flow.

## Service Worker Communication

Two-way communication between the app and service worker is handled by:

1. **Message Channels**: The `ServiceWorkerMessageService` establishes communication:
```typescript
sendMessageToSW(message: any): Promise<any> {
  const messageChannel = new MessageChannel();
  messageChannel.port1.onmessage = (event) => {
    // Handle response
  };
  navigator.serviceWorker.controller.postMessage(message, [messageChannel.port2]);
}
```

2. **Message Handlers**: The service listens for messages from the service worker:
```typescript
navigator.serviceWorker.addEventListener('message', (event) => {
  console.log('Received message from service worker', event.data);
  this.messageSubject.next(event.data);
});
```

## Testing PWA Features

To properly test PWA features:

1. **Build for Production**: Service workers only work in production builds:
```
ng build --configuration production
```

2. **Use HTTP Server**: Serve with a proper HTTP server:
```
npx http-server -p 8080 dist/pwa-demo
```

3. **Test Offline Capability**: Use DevTools to simulate offline mode.

4. **Verify Caching**: Check the Cache Storage section in DevTools.

5. **Test Installation**: Verify the install prompt appears.

## Browser Compatibility

Our PWA works in most modern browsers, with the following considerations:

- **Full Support**: Chrome, Edge, Firefox, Opera
- **Partial Support**: Safari (limited service worker and push notification support)
- **No Support**: IE 11

Feature detection is used throughout the app to gracefully handle browser limitations.
