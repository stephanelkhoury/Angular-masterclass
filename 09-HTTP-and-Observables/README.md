# Chapter 9: HTTP Client and Observables

## Overview

This chapter explores how to use Angular's HttpClient to make API requests and work with Observables to handle asynchronous operations. You'll learn how to interact with RESTful services, handle responses, manage errors, and leverage RxJS Observables for effective asynchronous programming. By the end of this chapter, you'll be able to build Angular applications that effectively communicate with back-end services.

## Introduction to HttpClient

Angular's HttpClient module provides a simplified API for HTTP requests that works well with RxJS Observables. It offers features like:

- Typed response objects
- Request and response interception
- Observable APIs
- Streamlined error handling
- Testing capabilities

### Setting Up HttpClient

To use HttpClient, first import the HttpClientModule in your application module:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule // Import HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Making HTTP Requests

To make HTTP requests, inject the HttpClient service into your component or service:

### GET Requests

```typescript
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

@Component({
  selector: 'app-posts',
  template: `
    <div *ngIf="loading">Loading...</div>
    <div *ngIf="error">{{ error }}</div>
    <div *ngFor="let post of posts">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </div>
  `
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  loading = false;
  error = '';
  
  constructor(private http: HttpClient) {}
  
  ngOnInit() {
    this.loading = true;
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe({
        next: (data) => {
          this.posts = data;
          this.loading = false;
        },
        error: (error) => {
          this.error = 'Failed to load posts';
          this.loading = false;
          console.error('Error fetching posts', error);
        }
      });
  }
}
```

### POST Requests

```typescript
createPost(post: Post) {
  return this.http.post<Post>('https://jsonplaceholder.typicode.com/posts', post)
    .subscribe({
      next: (response) => {
        console.log('Post created', response);
      },
      error: (error) => {
        console.error('Error creating post', error);
      }
    });
}
```

### PUT Requests

```typescript
updatePost(post: Post) {
  return this.http.put<Post>(`https://jsonplaceholder.typicode.com/posts/${post.id}`, post)
    .subscribe({
      next: (response) => {
        console.log('Post updated', response);
      },
      error: (error) => {
        console.error('Error updating post', error);
      }
    });
}
```

### DELETE Requests

```typescript
deletePost(id: number) {
  return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .subscribe({
      next: (response) => {
        console.log('Post deleted', response);
      },
      error: (error) => {
        console.error('Error deleting post', error);
      }
    });
}
```

### Request Options

HttpClient methods accept a configuration object as the last parameter:

```typescript
this.http.get<User[]>('https://api.example.com/users', {
  headers: new HttpHeaders({
    'Authorization': `Bearer ${this.authToken}`
  }),
  params: new HttpParams()
    .set('page', '1')
    .set('limit', '10'),
  observe: 'response', // get the full response instead of just the body
  responseType: 'json' // 'text', 'blob', 'arraybuffer'
});
```

## Creating a Data Service

Best practice is to encapsulate HTTP requests in a service:

```typescript
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  // Get all posts
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl)
      .pipe(
        retry(1), // Retry once if the request fails
        catchError(this.handleError)
      );
  }

  // Get a single post
  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Create a new post
  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, post)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Update a post
  updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.apiUrl}/${post.id}`, post)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Delete a post
  deletePost(id: number): Observable<{}> {
    return this.http.delete(`${this.apiUrl}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Error handling
  private handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
```

## Error Handling

Error handling is crucial for HTTP requests. Angular provides ways to handle both client-side and server-side errors:

```typescript
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

getItems() {
  return this.http.get<Item[]>('https://api.example.com/items')
    .pipe(
      catchError(this.handleError)
    );
}

private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // Client-side error
    console.error('Client error:', error.error.message);
  } else {
    // Server-side error
    console.error(
      `Server returned code ${error.status}, ` +
      `body was: ${error.error}`
    );
  }
  // Return an observable with a user-facing error message
  return throwError(() => new Error('Something went wrong; please try again later.'));
}
```

## HTTP Interceptors

Interceptors provide a way to intercept and modify HTTP requests and responses. They're useful for:

- Adding authentication headers
- Logging requests
- Handling errors
- Loading indicators
- Caching strategies

### Creating an Interceptor

```typescript
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const startTime = Date.now();
    let status: string;

    return next.handle(request).pipe(
      tap(
        event => {
          status = '';
          if (event instanceof HttpResponse) {
            status = 'succeeded';
          }
        },
        error => status = 'failed'
      ),
      finalize(() => {
        const elapsedTime = Date.now() - startTime;
        const message = `${request.method} "${request.urlWithParams}" ${status} in ${elapsedTime}ms`;
        console.log(message);
      })
    );
  }
}
```

### Registering an Interceptor

```typescript
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggingInterceptor } from './logging.interceptor';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class AppModule { }
```

### Authentication Interceptor Example

```typescript
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Get the auth token
    const authToken = this.auth.getToken();

    // Clone the request and set the new header
    const authReq = request.clone({
      setHeaders: { Authorization: `Bearer ${authToken}` }
    });

    // Pass the cloned request instead of the original request
    return next.handle(authReq);
  }
}
```

## Introduction to RxJS and Observables

RxJS is a library for reactive programming using Observables. It provides powerful tools for managing asynchronous operations and event-based programs.

### Core RxJS Concepts

#### Observables

Observables represent a stream of values over time:

```typescript
import { Observable } from 'rxjs';

// Create an Observable
const observable = new Observable<number>(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});

// Subscribe to the Observable
const subscription = observable.subscribe({
  next: value => console.log('Value:', value),
  error: err => console.error('Error:', err),
  complete: () => console.log('Complete')
});

// Don't forget to unsubscribe when done
setTimeout(() => subscription.unsubscribe(), 2000);
```

#### Subjects

Subjects are special Observables that can be both subscribed to and can emit values:

```typescript
import { Subject } from 'rxjs';

const subject = new Subject<number>();

// Subscribe to the subject
subject.subscribe({
  next: value => console.log('Observer A:', value)
});

// Emit values
subject.next(1);
subject.next(2);

// Add another subscriber
subject.subscribe({
  next: value => console.log('Observer B:', value)
});

// Emit more values
subject.next(3);
```

#### BehaviorSubject

BehaviorSubjects are Subjects that require an initial value and emit their current value to new subscribers:

```typescript
import { BehaviorSubject } from 'rxjs';

const behaviorSubject = new BehaviorSubject<number>(0);

// First subscriber gets the initial value
behaviorSubject.subscribe({
  next: value => console.log('Observer A:', value)
});

// Emit a new value
behaviorSubject.next(1);

// Second subscriber gets the current value (1)
behaviorSubject.subscribe({
  next: value => console.log('Observer B:', value)
});

// Emit another value, both subscribers get it
behaviorSubject.next(2);
```

### RxJS Operators

RxJS provides a vast array of operators to transform, filter, combine, and manipulate Observables:

```typescript
import { of, from, interval } from 'rxjs';
import { map, filter, take, mergeMap, catchError } from 'rxjs/operators';

// Create an Observable from values
const source = of(1, 2, 3, 4, 5);

// Apply operators
const result = source.pipe(
  map(x => x * 10),      // Transform: multiply by 10
  filter(x => x > 20),   // Filter: keep only values > 20
  take(2)                // Take only first 2 values
);

// Subscribe to the result
result.subscribe(value => console.log(value));
// Output: 30, 40
```

## Common RxJS Patterns in Angular

### Combining Multiple HTTP Requests

```typescript
import { forkJoin } from 'rxjs';

// Make multiple HTTP requests in parallel
getUserData(userId: string) {
  return forkJoin({
    user: this.http.get<User>(`/api/users/${userId}`),
    posts: this.http.get<Post[]>(`/api/users/${userId}/posts`),
    followers: this.http.get<User[]>(`/api/users/${userId}/followers`)
  });
}

// Usage
this.userService.getUserData('123').subscribe({
  next: ({ user, posts, followers }) => {
    console.log('User:', user);
    console.log('Posts:', posts);
    console.log('Followers:', followers);
  },
  error: error => console.error('Error fetching user data', error)
});
```

### Sequential Requests

```typescript
import { switchMap } from 'rxjs/operators';

// First get the user, then get their posts
getUserAndPosts(userId: string) {
  return this.http.get<User>(`/api/users/${userId}`).pipe(
    switchMap(user => {
      return this.http.get<Post[]>(`/api/users/${user.id}/posts`).pipe(
        map(posts => ({ user, posts }))
      );
    })
  );
}
```

### Handling Search with debounceTime

```typescript
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  template: `
    <input type="text" [formControl]="searchControl">
    <div *ngIf="loading">Loading...</div>
    <div *ngFor="let result of results">
      {{ result.name }}
    </div>
  `
})
export class SearchComponent implements OnInit {
  searchControl = new FormControl('');
  results: any[] = [];
  loading = false;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),         // Wait for 300ms pause
      distinctUntilChanged(),    // Skip if same as last value
      switchMap(term => {        // Cancel previous requests
        this.loading = true;
        return this.searchService.search(term);
      })
    ).subscribe({
      next: results => {
        this.results = results;
        this.loading = false;
      },
      error: err => {
        console.error('Error searching', err);
        this.loading = false;
      }
    });
  }
}
```

### Cache HTTP Responses

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config$: Observable<any> = null;
  private apiUrl = '/api/config';

  constructor(private http: HttpClient) { }

  getConfig(): Observable<any> {
    if (!this.config$) {
      this.config$ = this.http.get(this.apiUrl).pipe(
        // Cache the response and share it with all subscribers
        shareReplay(1)
      );
    }
    return this.config$;
  }
}
```

### Polling for Data

```typescript
import { interval } from 'rxjs';
import { switchMap, startWith } from 'rxjs/operators';

// Poll API every 10 seconds
getDataWithPolling() {
  return interval(10000).pipe(
    startWith(0),  // Emit immediately
    switchMap(() => this.http.get('/api/data'))
  );
}
```

### Retry Mechanism

```typescript
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

getData() {
  return this.http.get('/api/data').pipe(
    retry(3),  // Retry up to 3 times
    catchError(error => {
      console.error('Error even after retrying', error);
      return throwError(() => new Error('Failed to fetch data'));
    })
  );
}
```

## Best Practices for HTTP and Observables

1. **Unsubscribe from Observables**: Always unsubscribe to prevent memory leaks
   ```typescript
   private subscription: Subscription;
   
   ngOnInit() {
     this.subscription = this.dataService.getData()
       .subscribe(/* ... */);
   }
   
   ngOnDestroy() {
     if (this.subscription) {
       this.subscription.unsubscribe();
     }
   }
   ```

2. **Use the Async Pipe**: Let Angular handle subscriptions and unsubscriptions
   ```html
   <div *ngIf="data$ | async as data">{{ data.name }}</div>
   ```

3. **Create Dedicated Services**: Keep HTTP logic in services, not components

4. **Handle Errors Properly**: Always catch and handle errors 

5. **Use Interceptors for Cross-Cutting Concerns**: Authentication, logging, etc.

6. **Avoid Race Conditions**: Use switchMap to cancel previous requests

7. **Return Observables from Services**: Don't subscribe in services, let components subscribe

8. **Use Strong Typing**: Define interfaces for API responses

## Project: Building a RESTful Client Application

In this project, we'll build a simple application that interacts with a REST API:

1. Create a new Angular application
2. Set up services to interact with a RESTful API
3. Implement error handling and loading states
4. Create components that consume the services
5. Use RxJS operators for complex operations

### Step 1: Create a new Angular application

```bash
ng new rest-client
cd rest-client
```

### Step 2: Set up the HttpClient module

Import HttpClientModule in app.module.ts.

### Step 3: Create data models

Define interfaces for your API data models.

### Step 4: Create services

Implement services that communicate with the API.

### Step 5: Create components that use the services

Build components that display and interact with the data.

## Exercises

1. Build a service that performs CRUD operations on a resource of your choice
2. Create a search feature with auto-complete using debounceTime and switchMap
3. Implement a caching mechanism for API responses
4. Create an authentication system with HTTP interceptors for token management
5. Implement a polling mechanism to periodically refresh data from an API

## Additional Resources

- [Angular HttpClient Guide](https://angular.io/guide/http)
- [RxJS Documentation](https://rxjs.dev/guide/overview)
- [HTTP Interceptors Guide](https://angular.io/guide/http#intercepting-requests-and-responses)
- [RxJS Marbles for Visualization](https://rxmarbles.com/)
- [Learn RxJS - Operators](https://www.learnrxjs.io/learn-rxjs/operators)

## Next Steps

In the next chapter, we'll explore Angular Routing. You'll learn how to create multi-page applications with navigation, handle route parameters, set up child routes, and protect routes with guards.
