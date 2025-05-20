import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { CustomPreloadingStrategy } from './core/strategies/custom-preloading.strategy';
import { HomeComponent } from './home/home.component';
import { PerformanceDemoComponent } from './performance-demo/performance-demo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'demo', component: PerformanceDemoComponent },
  { 
    path: 'change-detection', 
    loadChildren: () => import('./features/change-detection/change-detection.module').then(m => m.ChangeDetectionModule),
    data: { preload: true }
  },
  { 
    path: 'virtual-scroll', 
    loadChildren: () => import('./features/virtual-scroll/virtual-scroll.module').then(m => m.VirtualScrollModule) 
  },
  { 
    path: 'memoization', 
    loadChildren: () => import('./features/memoization/memoization.module').then(m => m.MemoizationModule) 
  },
  { 
    path: 'web-workers', 
    loadChildren: () => import('./features/web-workers/web-workers.module').then(m => m.WebWorkersModule) 
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // Use custom preloading strategy
      preloadingStrategy: CustomPreloadingStrategy,
      
      // Performance optimizations
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload'
    })
  ],
  exports: [RouterModule],
  providers: [CustomPreloadingStrategy]
})
export class AppRoutingModule { }
