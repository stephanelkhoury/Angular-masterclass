# PWA Troubleshooting Guide

This guide addresses common issues encountered when developing and deploying Progressive Web Apps with Angular.

## Service Worker Not Loading

**Symptoms:**
- Service worker is not registering
- Offline functionality doesn't work
- No service worker appears in Chrome DevTools

**Common Causes and Solutions:**

1. **Serving with ng serve**

   **Problem:** Service workers don't work with `ng serve`.
   
   **Solution:** Build with production configuration and use a real HTTP server:
   ```
   ng build --configuration production
   npx http-server -p 8080 dist/pwa-demo
   ```

2. **Non-HTTPS Connection**

   **Problem:** Service workers require HTTPS (except on localhost).
   
   **Solution:** Use HTTPS in production. For local testing, use localhost or set up a local HTTPS server with a self-signed certificate.

3. **Incorrect Path**

   **Problem:** Service worker file path is incorrect.
   
   **Solution:** Check that `ngsw-worker.js` is in the correct location and referenced properly.

## App Not Working Offline

**Symptoms:**
- App crashes when offline
- Assets not available offline
- API requests fail when offline

**Common Causes and Solutions:**

1. **Incorrect Cache Configuration**

   **Problem:** Assets not properly configured in `ngsw-config.json`.
   
   **Solution:** Check asset groups and patterns in the config file:
   ```json
   "assetGroups": [
     {
       "name": "app",
       "installMode": "prefetch",
       "resources": {
         "files": ["/favicon.ico", "/index.html", "/*.css", "/*.js"]
       }
     }
   ]
   ```

2. **Missing API Caching Strategy**

   **Problem:** API responses not cached for offline use.
   
   **Solution:** Configure data groups in `ngsw-config.json`:
   ```json
   "dataGroups": [
     {
       "name": "api-performance",
       "urls": ["/api/**"],
       "cacheConfig": {
         "strategy": "performance",
         "maxSize": 100,
         "maxAge": "1h"
       }
     }
   ]
   ```

3. **Dynamic Routes Not Cached**

   **Problem:** URLs with parameters not cached correctly.
   
   **Solution:** Use URL patterns in `dataGroups` and implement IndexedDB caching for complex data needs.

## Service Worker Update Issues

**Symptoms:**
- Updates not being detected
- Old version still showing after deploy
- Service worker update cycle issues

**Common Causes and Solutions:**

1. **Browser Caching**

   **Problem:** Browser caches the old service worker.
   
   **Solution:** In Chrome DevTools:
   - Go to Application > Service Workers
   - Check "Update on reload" 
   - Click "Unregister" and refresh

2. **Manifest Not Updated**

   **Problem:** Service worker version not changed.
   
   **Solution:** Angular automatically handles this for production builds, but check if any custom handling breaks this.

3. **Multiple Tabs Open**

   **Problem:** Service worker controlled by another tab.
   
   **Solution:** Close all tabs and reopen, or implement proper skip waiting:
   ```typescript
   swUpdate.available.subscribe(() => {
     if (confirm('New version available. Update now?')) {
       window.location.reload();
     }
   });
   ```

## Push Notification Issues

**Symptoms:**
- Permissions not being requested
- Notifications not showing
- Subscription errors

**Common Causes and Solutions:**

1. **Invalid VAPID Keys**

   **Problem:** Push notification keys incorrect or missing.
   
   **Solution:** Generate proper VAPID keys:
   ```
   npx web-push generate-vapid-keys
   ```

2. **Permission Already Denied**

   **Problem:** User previously denied notification permission.
   
   **Solution:** Indicate this to the user and guide them to reset permissions in browser settings.

3. **Safari Limitations**

   **Problem:** iOS Safari has limited push notification support.
   
   **Solution:** Design your app to work without push on unsupported platforms, using feature detection.

## Install Prompt Not Showing

**Symptoms:**
- Install button doesn't work
- Install prompt never appears
- `beforeinstallprompt` event not firing

**Common Causes and Solutions:**

1. **PWA Criteria Not Met**

   **Problem:** Site doesn't meet Chrome's installability criteria.
   
   **Solution:** Ensure your app:
   - Has a valid manifest with proper icons
   - Is served over HTTPS
   - Has a registered service worker
   - Has at least one icon of 192x192px

2. **Already Installed**

   **Problem:** The app is already installed.
   
   **Solution:** Check installed status:
   ```typescript
   window.matchMedia('(display-mode: standalone)').matches
   ```

3. **Chrome Heuristics**

   **Problem:** Chrome's undocumented heuristics prevent the prompt.
   
   **Solution:** Ensure user engages with the site meaningfully before trying to show the install prompt.

## IndexedDB Issues

**Symptoms:**
- Offline data not persisting
- IndexedDB errors in console
- Data sync not working

**Common Causes and Solutions:**

1. **Incognito Mode**

   **Problem:** IndexedDB storage limited in private browsing.
   
   **Solution:** Detect private mode and warn users:
   ```typescript
   function isPrivateMode() {
     try {
       localStorage.setItem('test', 'test');
       localStorage.removeItem('test');
       return false;
     } catch (e) {
       return true;
     }
   }
   ```

2. **Storage Permission Denied**

   **Problem:** User denied persistent storage.
   
   **Solution:** Request persistent storage explicitly:
   ```typescript
   if (navigator.storage && navigator.storage.persist) {
     navigator.storage.persist().then(isPersisted => {
       console.log(`Persisted storage granted: ${isPersisted}`);
     });
   }
   ```

3. **Version Migration Issues**

   **Problem:** IndexedDB schema changes cause errors.
   
   **Solution:** Implement proper version migration in your IndexedDB setup.

## Performance Issues

**Symptoms:**
- Slow initial load
- High memory usage
- Poor performance on low-end devices

**Common Causes and Solutions:**

1. **Over-Caching**

   **Problem:** Caching too much data.
   
   **Solution:** Be selective with what you cache, set proper size limits:
   ```json
   "cacheConfig": {
     "maxSize": 100,
     "maxAge": "1d"
   }
   ```

2. **Large Bundle Size**

   **Problem:** JavaScript bundles too large.
   
   **Solution:** Implement code splitting and lazy loading:
   ```typescript
   const routes: Routes = [
     {
       path: 'feature',
       loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule)
     }
   ];
   ```

3. **Expensive Background Processing**

   **Problem:** Service worker doing too much work.
   
   **Solution:** Move complex operations to web workers, not service workers.

## Debugging Tools

1. **Chrome DevTools Application Panel**
   - Service Worker status
   - Cache Storage contents
   - IndexedDB data
   - Manifest validation

2. **Lighthouse**
   - PWA audit
   - Performance analysis
   - Best practices check

3. **Workbox Window**
   - Service worker lifecycle monitoring
   - Update detection
   ```typescript
   import { Workbox } from 'workbox-window';
   const wb = new Workbox('/sw.js');
   wb.register();
   ```

## Common Error Codes

1. **SecurityError: Failed to register a ServiceWorker**
   - Cause: HTTPS requirement not met
   - Solution: Use HTTPS or localhost

2. **Uncaught (in promise) DOMException: Failed to execute 'subscribe' on 'PushManager'**
   - Cause: Push permission denied or invalid VAPID key
   - Solution: Check permissions and key validity

3. **Manifest: Line: 1, column: 1, Syntax error**
   - Cause: Invalid manifest JSON
   - Solution: Validate your manifest using a JSON linter
