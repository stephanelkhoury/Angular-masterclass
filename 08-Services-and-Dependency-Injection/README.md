# Chapter 8: Angular Services & Dependency Injection

## Overview

This chapter explores Angular's services and dependency injection (DI) system. Services are a fundamental building block in Angular that provide a way to organize and share code across your application. Dependency injection is the mechanism Angular uses to provide instances of these services to components and other services that need them. By the end of this chapter, you'll understand how to create, provide, and consume services effectively.

## What are Services?

Services in Angular are singleton objects that get instantiated only once during the lifetime of an application. They provide methods that maintain data throughout the life of an application, thus avoiding the need to pass data between components. Services are used for:

- Data sharing between components
- Business logic implementation
- External interactions (e.g., HTTP calls)
- Application-wide state management
- Common utility functions

Services help in adhering to the Single Responsibility Principle by moving data access and manipulation logic away from components, which should focus primarily on the user experience.

## Creating a Service

To create a service using Angular CLI:

```bash
ng generate service services/data
# or shorter
ng g s services/data
```

This generates a basic service:

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  
  // Service methods
  getData() {
    return [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' }
    ];
  }
}
```

## Understanding Dependency Injection

Dependency injection is a design pattern where a class receives its dependencies from external sources rather than creating them itself. Angular's DI system consists of:

1. **Dependency**: The service that we want to use
2. **Provider**: Tells Angular how to create the service
3. **Injector**: Creates instances of services and injects them into components/other services
4. **Consumer**: The component or service that needs the dependency

### The Injectable Decorator

The `@Injectable()` decorator marks a class as available to the dependency injection system. It accepts a metadata object that determines how the service is provided:

```typescript
@Injectable({
  providedIn: 'root' // Service is available application-wide
})
```

## Providing Services

There are several levels at which you can provide services:

### 1. Root Level (Application-wide)

Using `providedIn: 'root'` makes a service available throughout the application and ensures there's only one instance of the service:

```typescript
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  // This service has a single instance shared across the app
}
```

### 2. Module Level

Providing a service in a module makes it available to all components within that module:

```typescript
@NgModule({
  providers: [UserService],
  // other module properties
})
export class UserModule { }
```

### 3. Component Level

Providing a service in a component creates a new instance for that component and its children:

```typescript
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  providers: [DashboardService]
})
export class UserDashboardComponent {
  // This component and its children get their own instance of DashboardService
}
```

## Consuming Services

### Injecting Services into Components

To use a service in a component, inject it via the constructor:

```typescript
import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-item-list',
  template: `
    <ul>
      <li *ngFor="let item of items">{{ item.name }}</li>
    </ul>
  `
})
export class ItemListComponent {
  items: any[] = [];

  constructor(private dataService: DataService) {
    this.items = this.dataService.getData();
  }
}
```

### Injecting Services into Other Services

Services can also be injected into other services:

```typescript
import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private logService: LogService) { }
  
  getProducts() {
    this.logService.log('Getting products');
    // Return products
  }
}
```

## Service Lifecycle

Services are created when they are first injected and destroyed when the application shuts down, or when the provider (module/component) is destroyed if they're not provided at the root level.

### Service Initialization

Services can implement the `OnInit` interface, but since services aren't actually part of the component tree, Angular doesn't call `ngOnInit()`. Instead, initialization should happen in the constructor:

```typescript
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config: any;
  
  constructor() {
    this.initialize();
  }
  
  private initialize() {
    // Load configuration
    this.config = { apiUrl: 'https://api.example.com' };
  }
  
  getConfig() {
    return this.config;
  }
}
```

### Service Destruction with OnDestroy

If a service needs cleanup when it's destroyed (e.g., unsubscribing from observables), it can implement `OnDestroy`:

```typescript
import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStreamService implements OnDestroy {
  private subscription: Subscription;
  
  constructor(private dataSource: DataSourceService) {
    this.subscription = this.dataSource.data$.subscribe(
      data => console.log('New data:', data)
    );
  }
  
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
```

## Service Communication Patterns

### Using Observables in Services

Services often use RxJS Observables to provide asynchronous data streams:

```typescript
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<any>(null);
  
  // Expose the observable, not the subject
  user$ = this.userSubject.asObservable();
  
  updateUser(user: any) {
    this.userSubject.next(user);
  }
  
  getCurrentUser(): any {
    return this.userSubject.getValue();
  }
}
```

### Caching Data in Services

Services can cache data to avoid redundant API calls:

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsCache: any[] = null;
  private apiUrl = 'https://api.example.com/products';
  
  constructor(private http: HttpClient) { }
  
  getProducts(): Observable<any[]> {
    // Return cached data if available
    if (this.productsCache) {
      return of(this.productsCache);
    }
    
    // Otherwise fetch from API and cache
    return this.http.get<any[]>(this.apiUrl).pipe(
      tap(products => {
        this.productsCache = products;
      }),
      catchError(error => {
        console.error('Error fetching products', error);
        return of([]);
      })
    );
  }
  
  // Method to force refresh the cache
  refreshProducts(): Observable<any[]> {
    this.productsCache = null;
    return this.getProducts();
  }
}
```

## Advanced Dependency Injection

### Injection Tokens

For injecting values that aren't classes, use `InjectionToken`:

```typescript
import { InjectionToken, Injectable } from '@angular/core';

export const API_URL = new InjectionToken<string>('api.url');

// In a module
@NgModule({
  providers: [
    { provide: API_URL, useValue: 'https://api.example.com' }
  ]
})
export class AppModule { }

// In a service
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(@Inject(API_URL) private apiUrl: string) { }
  
  getData() {
    // Use this.apiUrl to make API calls
  }
}
```

### Provider Types

Angular supports several ways to provide dependencies:

#### useValue

```typescript
providers: [
  { provide: API_URL, useValue: 'https://api.example.com' }
]
```

#### useClass

```typescript
// Switch implementations based on environment
providers: [
  { 
    provide: LogService, 
    useClass: environment.production ? ProductionLogService : DebugLogService 
  }
]
```

#### useFactory

```typescript
// Create a service with dependencies
providers: [
  {
    provide: ProductService,
    useFactory: (http: HttpClient, config: ConfigService) => {
      return new ProductService(http, config.getApiUrl());
    },
    deps: [HttpClient, ConfigService]
  }
]
```

#### useExisting

```typescript
// Alias an existing service
providers: [
  { provide: AbstractValidator, useExisting: EmailValidator }
]
```

### Hierarchical Dependency Injection

Angular's DI system is hierarchical, meaning an injector has a reference to its parent injector:

1. If a component requests a service, Angular checks if it's provided in that component
2. If not, it checks the parent component
3. This continues up to the root injector

This allows for different instances of a service at different levels:

```typescript
@Component({
  selector: 'app-parent',
  providers: [{ provide: CountService, useValue: { count: 0 } }]
})
export class ParentComponent {
  // This component gets the instance from its own provider
}

@Component({
  selector: 'app-child',
  // No provider here, so it gets the instance from the parent
})
export class ChildComponent {
  // This component gets the instance from parent
}

@Component({
  selector: 'app-special-child',
  providers: [{ provide: CountService, useValue: { count: 100 } }]
})
export class SpecialChildComponent {
  // This component gets its own instance
}
```

### Multi Providers

Angular supports registering multiple providers for the same token:

```typescript
import { InjectionToken } from '@angular/core';

export const VALIDATOR = new InjectionToken<Validator[]>('app.validators');

@NgModule({
  providers: [
    { provide: VALIDATOR, useClass: RequiredValidator, multi: true },
    { provide: VALIDATOR, useClass: EmailValidator, multi: true },
    { provide: VALIDATOR, useClass: MinLengthValidator, multi: true }
  ]
})
export class AppModule { }

// Inject all validators
constructor(@Inject(VALIDATOR) private validators: Validator[]) {
  // validators is an array of instances of all three validator classes
}
```

## Project: Creating a Service-Oriented Application

In this project, we'll build an application that demonstrates effective service design:

1. Create a new Angular application
2. Implement a user authentication service
3. Create data services with HTTP interactions
4. Implement a notification service
5. Set up service-to-service communication

### Step 1: Create a new Angular application

```bash
ng new service-demo
cd service-demo
```

### Step 2: Generate the services

```bash
ng g s services/auth
ng g s services/user
ng g s services/product
ng g s services/notification
```

### Step 3: Set up service communication

Implement the services with proper communication patterns.

### Step 4: Create components that use the services

Create components that consume and demonstrate the services.

## Exercises

1. Create a theme service that allows components to change the application theme
2. Implement a caching HTTP service that stores responses to avoid redundant API calls
3. Create a logging service with different implementations for production and development
4. Implement a shopping cart service that persists cart items in localStorage
5. Create a service that uses a factory provider to determine its implementation based on a configuration value

## Additional Resources

- [Angular Dependency Injection Guide](https://angular.io/guide/dependency-injection)
- [Hierarchical Injectors](https://angular.io/guide/hierarchical-dependency-injection)
- [Provider Types](https://angular.io/guide/dependency-injection-providers)
- [DI in Action](https://angular.io/guide/dependency-injection-in-action)

## Next Steps

In the next chapter, we'll explore HTTP Client and Observables. You'll learn how to make API requests, handle responses, manage errors, and work with RxJS Observables for asynchronous operations.
