# Angular PWA Demo

This project demonstrates the implementation of Progressive Web App (PWA) features in an Angular application, as covered in Chapter 21 of the Angular Masterclass.

## Key PWA Features Implemented

1. **Offline Capabilities**
   - Service worker configuration for asset caching
   - Offline-first approach for data handling
   - IndexedDB for offline data storage

2. **App Installation**
   - Web app manifest configuration
   - Custom install prompt
   - Installation status detection

3. **Push Notifications**
   - Push notification support setup
   - Notification permission handling
   - Message receiving demonstration

4. **Background Sync**
   - Background data synchronization
   - Offline data queueing
   - Automatic sync when connection is restored

## Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. Note that service workers don't work in development mode with `ng serve`.

## Testing PWA Features

To properly test PWA features:

1. Build the production version:
   ```
   ng build --configuration production
   ```

2. Serve the production build:
   ```
   npx http-server -p 8080 dist/pwa-demo
   ```

3. Open `http://localhost:8080` in Chrome or another modern browser

## Testing Offline Mode

1. Open the application in Chrome
2. Open DevTools (F12)
3. Go to the Network tab
4. Enable "Offline" mode
5. Refresh the page and observe that the app still works

## Testing App Installation

1. Visit the site in Chrome on desktop or mobile
2. Wait for the install prompt or click the "Install" button
3. On desktop, look for the install icon in the address bar
4. On mobile, wait for the "Add to Home Screen" prompt

## Testing Background Sync

1. Click the "Offline Post" button while online to see immediate sync
2. Go offline and click the button again
3. Come back online and observe the sync process in the console

## Project Structure

- `src/app/components/` - PWA-related components
- `src/app/services/` - Services for PWA functionality
- `ngsw-config.json` - Service worker configuration
- `manifest.webmanifest` - Web app manifest file

## Requirements

- Node.js version v18.19 or higher (current: v18.17.0)
- Angular CLI version 16.1.0 or higher

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
