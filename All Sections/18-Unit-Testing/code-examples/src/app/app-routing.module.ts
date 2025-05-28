import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'component-tests', 
    loadChildren: () => import('./features/component-tests/component-tests.module').then(m => m.ComponentTestsModule) 
  },
  { 
    path: 'service-tests', 
    loadChildren: () => import('./features/service-tests/service-tests.module').then(m => m.ServiceTestsModule) 
  },
  { 
    path: 'pipe-tests', 
    loadChildren: () => import('./features/pipe-tests/pipe-tests.module').then(m => m.PipeTestsModule) 
  },
  { 
    path: 'directive-tests', 
    loadChildren: () => import('./features/directive-tests/directive-tests.module').then(m => m.DirectiveTestsModule) 
  },
  { 
    path: 'form-tests', 
    loadChildren: () => import('./features/form-tests/form-tests.module').then(m => m.FormTestsModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
