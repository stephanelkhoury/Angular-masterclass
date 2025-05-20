# Chapter 10: Angular Routing

## Overview

Angular Routing allows you to create Single Page Applications (SPAs) with multiple views and navigate between them without page reloads. It enables you to map different URL paths to specific components, making your application more user-friendly and providing a better navigation experience.

In this chapter, we'll explore:

- Setting up the Angular Router
- Creating routes and navigation
- Route parameters and query parameters
- Child routes and lazy loading
- Route guards for protecting routes
- Navigation events and hooks

## Setting Up the Angular Router

### Installation

Angular Router comes with the Angular package, but you need to configure it in your application:

1. Import the `RouterModule` in your `app.module.ts`:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';

// Define your routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: '**', component: NotFoundComponent } // Wildcard route for a 404
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    // Register the routes with forRoot
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

2. Add the router outlet in your `app.component.html`:

```html
<nav>
  <ul>
    <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a></li>
    <li><a routerLink="/products" routerLinkActive="active">Products</a></li>
  </ul>
</nav>

<!-- This is where your routed components will be displayed -->
<router-outlet></router-outlet>
```

3. Add styles for the active route in `app.component.css`:

```css
.active {
  font-weight: bold;
  color: #3f51b5;
}
```

## Route Configuration Options

### Basic Routes

The most basic route maps a URL path to a component:

```typescript
{ path: 'products', component: ProductsComponent }
```

### Route Parameters

To pass dynamic values to a route:

```typescript
{ path: 'products/:id', component: ProductDetailComponent }
```

### Query Parameters

Query parameters can be added to any route and don't need to be defined in advance.

### Optional Route Parameters

Use the `data` property to pass static data to a route:

```typescript
{ 
  path: 'products', 
  component: ProductsComponent,
  data: { title: 'Product List' } 
}
```

### Redirects

Redirect one path to another:

```typescript
{ path: 'product-list', redirectTo: 'products', pathMatch: 'full' }
```

## Navigating Between Routes

### Using Router Directives

1. `routerLink` directive:

```html
<a routerLink="/products">Products</a>
<a [routerLink]="['/products', product.id]">{{ product.name }}</a>
```

2. `routerLinkActive` directive:

```html
<a routerLink="/products" routerLinkActive="active">Products</a>
```

### Using Router Service

Navigate programmatically:

```typescript
import { Router } from '@angular/router';

@Component({...})
export class YourComponent {
  constructor(private router: Router) {}
  
  navigateToProducts() {
    this.router.navigate(['/products']);
  }
  
  navigateToProduct(id: string) {
    this.router.navigate(['/products', id]);
  }
  
  navigateWithQueryParams() {
    this.router.navigate(['/products'], { 
      queryParams: { category: 'electronics' } 
    });
  }
}
```

## Working with Route Parameters

### Accessing Route Parameters

```typescript
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({...})
export class ProductDetailComponent implements OnInit {
  product: any;
  
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}
  
  ngOnInit() {
    // Method 1: Using snapshot (doesn't update if params change while on the same component)
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id).subscribe(product => this.product = product);
    
    // Method 2: Using observable (reactive approach, updates when params change)
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        return this.productService.getProduct(id);
      })
    ).subscribe(product => this.product = product);
  }
}
```

### Accessing Query Parameters

```typescript
import { ActivatedRoute } from '@angular/router';

@Component({...})
export class ProductsComponent implements OnInit {
  category: string;
  
  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    // Method 1: Using snapshot
    this.category = this.route.snapshot.queryParamMap.get('category');
    
    // Method 2: Using observable
    this.route.queryParamMap.subscribe(params => {
      this.category = params.get('category');
    });
  }
}
```

## Child Routes

Child routes allow you to create nested views:

```typescript
const routes: Routes = [
  { 
    path: 'products', 
    component: ProductsComponent,
    children: [
      { path: '', component: ProductListComponent },
      { path: 'new', component: ProductNewComponent },
      { path: ':id', component: ProductDetailComponent },
      { path: ':id/edit', component: ProductEditComponent }
    ]
  }
];
```

In the parent component template (`ProductsComponent`), add another `router-outlet`:

```html
<div class="products-container">
  <div class="sidebar">
    <!-- Sidebar content -->
  </div>
  <div class="main-content">
    <router-outlet></router-outlet>
  </div>
</div>
```

## Lazy Loading Routes

Lazy loading helps improve performance by loading modules only when they're needed:

First, create a feature module with its own routing module:

```typescript
// products/products-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { 
    path: '', 
    component: ProductsComponent,
    children: [
      { path: ':id', component: ProductDetailComponent }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

// products/products.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
```

Then, set up lazy loading in the app routing module:

```typescript
// app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'products', 
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

## Route Guards

Route guards protect routes and control navigation based on certain conditions.

### Types of Guards

1. **CanActivate**: Controls if a route can be activated
2. **CanActivateChild**: Controls if child routes can be activated
3. **CanDeactivate**: Asks for confirmation before navigating away
4. **CanLoad**: Controls if a lazy-loaded module can be loaded
5. **Resolve**: Pre-fetches data before activating a route

### Example: AuthGuard (CanActivate)

```typescript
// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    }
    
    // Store the attempted URL for redirecting
    this.authService.redirectUrl = state.url;
    
    // Navigate to the login page
    this.router.navigate(['/login']);
    return false;
  }
}
```

Applying the guard:

```typescript
const routes: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'admin', 
    component: AdminComponent, 
    canActivate: [AuthGuard] 
  }
];
```

### Example: CanDeactivate Guard

```typescript
// can-deactivate.guard.ts
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate) {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
```

Using the guard in a component:

```typescript
// product-edit.component.ts
@Component({...})
export class ProductEditComponent implements OnInit, CanComponentDeactivate {
  editForm: FormGroup;
  hasUnsavedChanges = false;
  
  // ...form initialization
  
  // Called when form values change
  onFormValueChanged() {
    this.hasUnsavedChanges = true;
  }
  
  // Implementation for CanDeactivate interface
  canDeactivate(): boolean {
    if (this.hasUnsavedChanges) {
      return confirm('You have unsaved changes! If you leave, your changes will be lost.');
    }
    return true;
  }
}
```

Applying the guard:

```typescript
const routes: Routes = [
  { 
    path: 'products/:id/edit', 
    component: ProductEditComponent,
    canDeactivate: [CanDeactivateGuard]
  }
];
```

### Example: Resolve Guard

```typescript
// product-resolver.service.ts
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from './models/product.model';
import { ProductService } from './services/product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<Product> {
  
  constructor(private productService: ProductService) {}
  
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product> | Promise<Product> | Product {
    const id = route.paramMap.get('id');
    
    return this.productService.getProduct(id).pipe(
      catchError(error => {
        console.error('Error retrieving product data', error);
        return of(null); // Return a default value or navigate away
      })
    );
  }
}
```

Applying the resolver:

```typescript
const routes: Routes = [
  { 
    path: 'products/:id', 
    component: ProductDetailComponent,
    resolve: {
      product: ProductResolver
    }
  }
];
```

Accessing resolved data:

```typescript
// product-detail.component.ts
@Component({...})
export class ProductDetailComponent implements OnInit {
  product: Product;
  
  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    this.route.data.subscribe(data => {
      this.product = data.product;
    });
  }
}
```

## Navigation Events

Angular Router emits events during the navigation lifecycle:

```typescript
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({...})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}
  
  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((event: NavigationStart) => {
      console.log('Navigation started!', event);
    });
    
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      console.log('Navigation completed!', event);
    });
  }
}
```

## Best Practices

1. **Separate routing into a module**: Create an `AppRoutingModule` for better organization.
2. **Use lazy loading** for large feature modules to improve initial load time.
3. **Protect routes** with guards where necessary for security and user experience.
4. **Use the resolve guard** to pre-fetch data before navigation completes.
5. **Preserve URL fragments** and query parameters when they're still relevant after navigation.
6. **Organize your routes hierarchically** with child routes where it makes sense.
7. **Use named outlets** for more complex layouts (such as displaying sidebars or modals).

## Practical Exercise: Build a Multi-Page Application

Create an e-commerce application with the following routes:
- Home page
- Product listing page with filters
- Product detail page
- Shopping cart
- Checkout process with multiple steps
- User profile area (protected by auth guard)

Use child routes for the checkout process and lazy loading for the user profile module.

## Additional Resources

- [Angular Router Documentation](https://angular.io/guide/router)
- [Angular University Router Course](https://angular-university.io/course/angular-router-course)
- [Router State Visualization](https://angular.io/guide/router-reference#router-state)
- [Advanced Angular Routing Techniques](https://blog.angular-university.io/angular-2-router-nested-routes-and-nested-auxiliary-routes-build-a-menu-navigation-system/)

## Next Steps

Now that you understand Angular Routing, proceed to the next chapter to learn about Angular Forms, where you'll explore template-driven forms and reactive forms for handling user input.
