# PWA Optimization Best Practices

This guide provides advanced optimization techniques for Progressive Web Apps built with Angular, focusing on performance, user experience, and engagement.

## Performance Optimizations

### 1. Optimize Bundle Size

Large JavaScript bundles significantly impact initial load time, especially on mobile devices with limited resources.

**Techniques:**

- **Code Splitting**: Lazy load routes and features:
  ```typescript
  const routes = [
    { 
      path: 'dashboard', 
      loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) 
    }
  ];
  ```

- **Tree Shaking**: Only include code that's actually used:
  ```json
  // In angular.json
  "optimization": true,
  "buildOptimizer": true
  ```

- **Differential Loading**: Serve modern JavaScript to modern browsers:
  ```json
  // In tsconfig.json
  "target": "es2015",
  "module": "esnext"
  ```

- **Compression**: Enable Brotli or Gzip compression on your server:
  ```nginx
  # Nginx example
  gzip on;
  gzip_types text/plain text/css application/javascript application/json;
  ```

### 2. Smart Caching Strategies

Effective caching is the cornerstone of PWA performance.

**Techniques:**

- **Tiered Caching Strategy**:
  ```json
  // In ngsw-config.json
  {
    "dataGroups": [
      {
        "name": "freshness-critical-apis",
        "urls": ["/api/user-profile", "/api/payments"],
        "cacheConfig": {
          "strategy": "freshness",
          "maxAge": "1h",
          "timeout": "5s"
        }
      },
      {
        "name": "performance-apis",
        "urls": ["/api/static-content", "/api/product-catalog"],
        "cacheConfig": {
          "strategy": "performance",
          "maxAge": "7d"
        }
      }
    ]
  }
  ```

- **Precaching Critical Resources**:
  - Identify and precache only what's needed for core functionality
  - Use resource hints like preload and prefetch:
    ```html
    <link rel="preload" href="critical-style.css" as="style">
    <link rel="prefetch" href="next-page-resource.js">
    ```

- **Cache Versioning**:
  - Angular Service Worker handles cache versioning automatically
  - For custom resources, include version parameters:
    ```typescript
    fetch(`/api/data?v=${APP_VERSION}`)
    ```

### 3. Resource Optimization

Optimize every byte sent over the network.

**Techniques:**

- **Image Optimization**:
  - Use WebP format with fallbacks
  - Implement responsive images with srcset:
    ```html
    <img srcset="small.jpg 400w, medium.jpg 800w, large.jpg 1200w"
         sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
         src="fallback.jpg" alt="Description">
    ```
  - Consider lazy loading off-screen images:
    ```html
    <img loading="lazy" src="image.jpg" alt="Description">
    ```

- **Font Optimization**:
  - Use `font-display: swap` to prevent FOIT (Flash of Invisible Text)
  - Subset fonts to include only needed characters
  - Consider system fonts: 
    ```css
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", sans-serif;
    ```

- **CSS Optimization**:
  - Extract critical CSS inline in `<head>`
  - Defer non-critical styles
  - Use CSS containment for complex layouts:
    ```css
    .complex-component {
      contain: content;
    }
    ```

## User Experience Optimizations

### 1. App Shell Architecture

The App Shell is the minimal HTML, CSS, and JavaScript needed to power the user interface.

**Implementation:**

1. Identify core UI components (header, navigation, footer, etc.)
2. Create a shell component rendered on initial load
3. Configure in the service worker:
   ```json
   // In ngsw-config.json
   {
     "assetGroups": [
       {
         "name": "app-shell",
         "resources": {
           "files": [
             "/index.html",
             "/main.*.js",
             "/polyfills.*.js",
             "/styles.*.css"
           ]
         }
       }
     ]
   }
   ```

### 2. Skeleton Screens

Instead of spinners, use skeleton screens that mimic the layout of upcoming content.

**Implementation:**

```html
<div class="card" *ngIf="loading">
  <div class="skeleton-header"></div>
  <div class="skeleton-image"></div>
  <div class="skeleton-text"></div>
  <div class="skeleton-text skeleton-text--short"></div>
</div>

<div class="card" *ngIf="!loading">
  <!-- Actual content -->
</div>
```

```css
.skeleton-header, .skeleton-image, .skeleton-text {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

### 3. Offline UX Patterns

Create intuitive experiences when users are offline.

**Techniques:**

- **Offline Indicators**: Clear visual cues about connectivity status
  ```typescript
  @HostBinding('class.is-offline')
  get isOfflineMode() {
    return !navigator.onLine;
  }
  ```

- **Offline Actions Queue**:
  ```typescript
  async performAction(data) {
    if (!navigator.onLine) {
      await this.offlineQueue.add(data);
      this.notifyUser('Action will complete when you're back online');
      return;
    }
    // Normal processing
  }
  ```

- **Contextual Messaging**: Explain what's happening and what users can do
  ```html
  <div *ngIf="!isOnline" class="offline-message">
    <p>You're currently offline. Some features may be limited.</p>
    <ul>
      <li>Browse previously viewed products</li>
      <li>View items in your cart</li>
      <li>Read saved articles</li>
    </ul>
  </div>
  ```

## Engagement Optimizations

### 1. Push Notification Best Practices

Push notifications are powerful but can be intrusive if used poorly.

**Guidelines:**

- **Permission Request Timing**: Ask after demonstrating value
  ```typescript
  // BAD: On page load
  ngOnInit() {
    this.requestNotificationPermission();
  }
  
  // GOOD: After user engagement
  onImportantAction() {
    this.showNotificationValue();
  }
  ```

- **Notification Content**:
  - Keep messages concise and valuable
  - Include actionable content
  - Personalize when possible
  ```typescript
  showNotification(user) {
    return this.swPush.showNotification('New items for you', {
      body: `${user.name}, we've added ${user.recommendations.length} items based on your interests`,
      icon: '/assets/icons/icon-128x128.png',
      actions: [
        { action: 'view', title: 'View Now' }
      ],
      data: {
        url: '/recommendations'
      }
    });
  }
  ```

- **Frequency Control**:
  - Implement a notification frequency cap
  - Allow users to set preferences
  ```typescript
  canSendNotification(userId) {
    const lastNotification = this.userService.getLastNotificationTime(userId);
    const minInterval = this.userService.getNotificationPreference(userId);
    
    return Date.now() - lastNotification > minInterval;
  }
  ```

### 2. App Installation Experience

Optimize the installation flow to increase adoption.

**Techniques:**

- **Contextual Install Prompt**: Show the prompt when it makes sense
  ```typescript
  @HostListener('click')
  onUserEngagement() {
    if (this.deferredPrompt && this.hasEngagedEnough) {
      this.showInstallPromotion();
    }
  }
  ```

- **Value Proposition**: Clearly explain benefits of installing
  ```html
  <div class="install-banner">
    <h3>Get a faster experience</h3>
    <ul>
      <li>Work offline</li>
      <li>Faster loading</li>
      <li>Use less data</li>
    </ul>
    <button (click)="installApp()">Add to Home Screen</button>
  </div>
  ```

- **Installation Success**: Track and celebrate successful installations
  ```typescript
  window.addEventListener('appinstalled', () => {
    // Hide install promotion
    this.installPromotion = false;
    
    // Log analytics
    this.analyticsService.trackEvent('app_installed');
    
    // Thank the user
    this.snackBar.open('Thanks for installing our app!', 'Close', {
      duration: 3000
    });
  });
  ```

### 3. Periodic Background Sync

Keep content fresh even when the app isn't open.

**Implementation:**

1. Request permission:
   ```typescript
   async requestPeriodicSyncPermission() {
     if ('periodicSync' in navigator.serviceWorker.controller) {
       const status = await navigator.permissions.query({
         name: 'periodic-background-sync'
       });
       
       if (status.state === 'granted') {
         const registration = await navigator.serviceWorker.ready;
         try {
           await registration.periodicSync.register('content-sync', {
             minInterval: 24 * 60 * 60 * 1000 // once per day
           });
           return true;
         } catch (e) {
           console.error('Periodic sync registration failed:', e);
           return false;
         }
       }
     }
     return false;
   }
   ```

2. Handle sync in the service worker:
   ```javascript
   // In a custom service worker extension
   self.addEventListener('periodicsync', (event) => {
     if (event.tag === 'content-sync') {
       event.waitUntil(syncContent());
     }
   });
   
   async function syncContent() {
     // Fetch new content
     const newContent = await fetch('/api/latest-content').then(r => r.json());
     
     // Update IndexedDB
     const db = await openDatabase();
     const tx = db.transaction('content', 'readwrite');
     await tx.objectStore('content').put({
       id: 'latest',
       data: newContent,
       timestamp: Date.now()
     });
     
     // Optionally notify the user about new content
     self.registration.showNotification('New content available', {
       body: 'Fresh content has been downloaded for offline use',
       icon: '/assets/icons/icon-128x128.png'
     });
   }
   ```

## Monitoring and Analytics

### 1. Core Web Vitals Monitoring

Track real user experience metrics for your PWA.

**Implementation:**

```typescript
// Report Web Vitals using the web-vitals library
import { getCLS, getFID, getLCP } from 'web-vitals';

function sendToAnalytics({name, delta, value, id}) {
  this.analyticsService.trackMetric(name, value, {
    delta,
    id
  });
}

getCLS(sendToAnalytics); // Cumulative Layout Shift
getFID(sendToAnalytics); // First Input Delay
getLCP(sendToAnalytics); // Largest Contentful Paint
```

### 2. Service Worker Lifecycle Analytics

Understand how your service worker performs in the wild.

**Metrics to Track:**

```typescript
// Service worker registration success rate
navigator.serviceWorker.register('/ngsw-worker.js')
  .then(reg => {
    this.analyticsService.trackEvent('sw_registered', {
      scope: reg.scope
    });
  })
  .catch(err => {
    this.analyticsService.trackEvent('sw_registration_failed', {
      error: err.message
    });
  });

// Update detection and application
this.swUpdate.available.subscribe(event => {
  this.analyticsService.trackEvent('sw_update_available', {
    current: event.current.hash,
    available: event.available.hash
  });
  
  // Track if the user accepts the update
  this.swUpdate.activated.subscribe(() => {
    this.analyticsService.trackEvent('sw_update_activated');
  });
});
```

### 3. Offline Usage Analytics

Collect analytics even when users are offline.

**Implementation:**

```typescript
class OfflineAnalytics {
  private queue = [];
  
  constructor() {
    window.addEventListener('online', this.flushQueue.bind(this));
  }
  
  trackEvent(event, properties) {
    const analyticsData = {
      event,
      properties,
      timestamp: Date.now(),
      isOffline: !navigator.onLine
    };
    
    if (navigator.onLine) {
      this.sendToAnalytics(analyticsData);
    } else {
      // Store in IndexedDB
      this.queue.push(analyticsData);
      this.saveQueueToStorage();
    }
  }
  
  async flushQueue() {
    if (!navigator.onLine) return;
    
    // Load queue from storage
    const queue = await this.loadQueueFromStorage();
    
    // Process in batches
    while (queue.length) {
      const batch = queue.splice(0, 10);
      try {
        await this.sendBatchToAnalytics(batch);
      } catch (e) {
        // If sending fails, put items back in queue
        queue.unshift(...batch);
        break;
      }
    }
    
    // Save any remaining items
    this.queue = queue;
    this.saveQueueToStorage();
  }
  
  // Implementation details for storage and sending omitted
}
```

## Lighthouse Score Optimization Checklist

Use this checklist to achieve a perfect Lighthouse PWA score:

1. **Fast and Reliable Network**
   - [ ] Page load is fast even on 3G
   - [ ] App responds with a 200 when offline
   - [ ] Performance score is 90+

2. **Installable**
   - [ ] Uses HTTPS
   - [ ] Registers a service worker
   - [ ] Has a valid web app manifest
   - [ ] Includes appropriate icons
   - [ ] Provides a custom splash screen
   - [ ] Sets a theme color

3. **PWA Optimized**
   - [ ] Redirects HTTP to HTTPS
   - [ ] Configured for a custom splash screen
   - [ ] Sets a theme color for the address bar
   - [ ] Content is sized correctly for the viewport
   - [ ] Register for a custom install experience

This comprehensive checklist ensures your PWA meets the highest standards of performance and user experience.
