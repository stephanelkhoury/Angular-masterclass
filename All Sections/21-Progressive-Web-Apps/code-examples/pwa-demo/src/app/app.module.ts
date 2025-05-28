import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

// PWA Components
import { OfflineStatusComponent } from './components/offline-status/offline-status.component';
import { UpdateNotificationComponent } from './components/update-notification/update-notification.component';
import { InstallPromptComponent } from './components/install-prompt/install-prompt.component';

// Services
import { PwaService } from './services/pwa.service';
import { PushNotificationService } from './services/push-notification.service';
import { OfflineDataService } from './services/offline-data.service';
import { ServiceWorkerMessageService } from './services/service-worker-message.service';

@NgModule({
  declarations: [
    AppComponent,
    OfflineStatusComponent,
    UpdateNotificationComponent,
    InstallPromptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    PwaService,
    PushNotificationService,
    OfflineDataService,
    ServiceWorkerMessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
