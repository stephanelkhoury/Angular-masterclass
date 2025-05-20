import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpCacheInterceptor } from './interceptors/http-cache.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CacheService } from './services/cache.service';
import { PerformanceMonitorService } from './services/performance-monitor.service';
import { CustomPreloadingStrategy } from './strategies/custom-preloading.strategy';

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SidenavComponent,
    FooterComponent
  ],
  providers: [
    CacheService,
    PerformanceMonitorService,
    CustomPreloadingStrategy,
    { provide: HTTP_INTERCEPTORS, useClass: HttpCacheInterceptor, multi: true }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule has already been loaded. Import CoreModule in the AppModule only.');
    }
  }
}
