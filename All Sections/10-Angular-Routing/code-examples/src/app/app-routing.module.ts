// This file sets up the basic routing structure for our Angular application
// app-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { ProductResolver } from './resolvers/product.resolver';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';
import { ProductEditComponent } from './components/products/product-edit/product-edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'products', 
    children: [
      { path: '', component: ProductListComponent },
      { 
        path: ':id', 
        component: ProductDetailComponent,
        resolve: {
          product: ProductResolver
        }
      },
      { 
        path: ':id/edit', 
        component: ProductEditComponent,
        canDeactivate: [CanDeactivateGuard]
      }
    ]
  },
  { path: 'login', component: LoginComponent },
  { 
    path: 'admin', 
    component: AdminDashboardComponent,
    canActivate: [AuthGuard]
  },
  { 
    // Lazy loaded module
    path: 'user', 
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
  },
  // Wildcard route for 404
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
