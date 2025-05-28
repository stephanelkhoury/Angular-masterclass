import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';

// Feature modules
import { BasicAnimationsModule } from './basic-animations/basic-animations.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'basic', loadChildren: () => 
    import('./basic-animations/basic-animations.module').then(m => m.BasicAnimationsModule) 
  },
  { path: 'advanced', loadChildren: () => 
    import('./advanced-animations/advanced-animations.module').then(m => m.AdvancedAnimationsModule) 
  },
  { path: 'keyframes', loadChildren: () => 
    import('./keyframes/keyframes.module').then(m => m.KeyframesModule) 
  },
  { path: 'stagger', loadChildren: () => 
    import('./stagger/stagger.module').then(m => m.StaggerModule) 
  },
  { path: 'route-animations', loadChildren: () => 
    import('./route-animations/route-animations.module').then(m => m.RouteAnimationsModule) 
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }