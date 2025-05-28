# Chapter 12: State Management in Angular

## Overview

State management is a critical aspect of modern web applications. As applications grow in complexity, managing the state across components becomes challenging. In this chapter, we'll explore different approaches to state management in Angular, from simple solutions to more robust frameworks.

In this chapter, you'll learn:

- What state management is and why it matters
- Component state vs. application state
- Different approaches to state management in Angular
- Using services for state management
- Implementing observable store patterns
- Introduction to NgRx and Redux patterns

## What is State Management?

State management refers to how we manage the data or state of our application, including:

- UI state (loading indicators, toggle states, form inputs)
- Client state (user settings, UI preferences, cached data)
- Server state (data fetched from APIs, authentication status)

As Angular applications grow, components need to share data and stay in sync with each other. Effective state management helps us:

- Maintain a single source of truth for our data
- Share data across components that aren't directly related
- Persist and restore state across page reloads
- Handle complex state transitions and side effects
- Debug and trace state changes

## Component State vs. Application State

### Component State

Component state is local to a specific component. It's managed within the component itself and used for data that doesn't need to be shared outside that component:

```typescript
@Component({
  selector: 'app-counter',
  template: `
    <div>
      <h2>Count: {{ count }}</h2>
      <button (click)="increment()">Increment</button>
      <button (click)="decrement()">Decrement</button>
    </div>
  `
})
export class CounterComponent {
  count = 0;
  
  increment() {
    this.count++;
  }
  
  decrement() {
    this.count--;
  }
}
```

### Application State

Application state is shared across multiple components and represents data that is relevant to the entire application or a significant portion of it:

- User authentication information
- Shopping cart contents
- Feature-specific data used by multiple components
- Global UI state (themes, sidebar visibility)

## Approaches to State Management

### 1. Component Interaction

For simple parent-child component communication:

- `@Input()` and `@Output()` for passing data between parent and child components
- Template reference variables for direct component access
- `ViewChild` and `ContentChild` for parent-to-child access

Advantages:
- Simple to implement for basic scenarios
- No additional packages required
- Standard Angular patterns

Limitations:
- Only works for related components
- Can become complex with deeply nested components
- Difficult to share state between unrelated components

### 2. Angular Services with RxJS

For sharing state across unrelated components:

```typescript
// state.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface AppState {
  username: string;
  isAuthenticated: boolean;
  theme: 'light' | 'dark';
}

const initialState: AppState = {
  username: '',
  isAuthenticated: false,
  theme: 'light'
};

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private stateSubject = new BehaviorSubject<AppState>(initialState);
  
  // Expose the observable$ but not the subject
  state$: Observable<AppState> = this.stateSubject.asObservable();
  
  // Get current state value
  get state(): AppState {
    return this.stateSubject.getValue();
  }
  
  // Update state
  updateState(newState: Partial<AppState>): void {
    this.stateSubject.next({
      ...this.state,
      ...newState
    });
  }
  
  // Example actions
  login(username: string): void {
    this.updateState({
      username,
      isAuthenticated: true
    });
  }
  
  logout(): void {
    this.updateState({
      username: '',
      isAuthenticated: false
    });
  }
  
  toggleTheme(): void {
    const newTheme = this.state.theme === 'light' ? 'dark' : 'light';
    this.updateState({ theme: newTheme });
  }
}
```

Using the service in components:

```typescript
// header.component.ts
@Component({
  selector: 'app-header',
  template: `
    <header [class]="theme">
      <h1>My App</h1>
      <div *ngIf="isAuthenticated; else loginButton">
        Welcome, {{ username }}!
        <button (click)="logout()">Logout</button>
      </div>
      <ng-template #loginButton>
        <button (click)="login()">Login</button>
      </ng-template>
      <button (click)="toggleTheme()">Toggle Theme</button>
    </header>
  `
})
export class HeaderComponent implements OnInit, OnDestroy {
  username: string = '';
  isAuthenticated: boolean = false;
  theme: string = 'light';
  
  private subscription: Subscription = new Subscription();
  
  constructor(private stateService: StateService) {}
  
  ngOnInit(): void {
    this.subscription = this.stateService.state$.subscribe(state => {
      this.username = state.username;
      this.isAuthenticated = state.isAuthenticated;
      this.theme = state.theme;
    });
  }
  
  login(): void {
    // In a real app, you'd have login form/dialog
    this.stateService.login('ExampleUser');
  }
  
  logout(): void {
    this.stateService.logout();
  }
  
  toggleTheme(): void {
    this.stateService.toggleTheme();
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
```

Advantages:
- Simple to implement
- Uses built-in Angular dependency injection
- Reactive approach with RxJS
- No additional libraries required

Limitations:
- No standardized patterns for complex state management
- Can get unwieldy for large applications
- Limited tooling for debugging state changes

### 3. Observable Store Pattern

A more structured approach using a custom store implementation:

```typescript
// store.ts
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

export class Store<T> {
  private state$: BehaviorSubject<T>;
  
  constructor(initialState: T) {
    this.state$ = new BehaviorSubject<T>(initialState);
  }
  
  // Get current state
  getState(): T {
    return this.state$.getValue();
  }
  
  // Select a slice of state
  select<K>(mapFn: (state: T) => K): Observable<K> {
    return this.state$.asObservable().pipe(
      map(mapFn),
      distinctUntilChanged()
    );
  }
  
  // Update state
  setState(newState: Partial<T>): void {
    this.state$.next({
      ...this.getState(),
      ...newState
    });
  }
}
```

Creating a specific store:

```typescript
// user.store.ts
import { Injectable } from '@angular/core';
import { Store } from './store';

export interface UserState {
  user: {
    id: string;
    name: string;
    email: string;
  } | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  isLoading: false,
  error: null
};

@Injectable({
  providedIn: 'root'
})
export class UserStore extends Store<UserState> {
  constructor() {
    super(initialState);
  }
  
  // Selectors
  get user$() {
    return this.select(state => state.user);
  }
  
  get isLoading$() {
    return this.select(state => state.isLoading);
  }
  
  get error$() {
    return this.select(state => state.error);
  }
  
  get isLoggedIn$() {
    return this.select(state => !!state.user);
  }
  
  // Actions
  setLoading(isLoading: boolean): void {
    this.setState({ isLoading });
  }
  
  setUser(user: UserState['user']): void {
    this.setState({ user, error: null });
  }
  
  setError(error: string): void {
    this.setState({ error, isLoading: false });
  }
  
  login(email: string, password: string): void {
    // In a real app, make API call here
    this.setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (email === 'user@example.com' && password === 'password') {
        this.setUser({
          id: '1',
          name: 'Example User',
          email: 'user@example.com'
        });
      } else {
        this.setError('Invalid credentials');
      }
      this.setLoading(false);
    }, 1000);
  }
  
  logout(): void {
    this.setState({ user: null });
  }
}
```

Using the store in a component:

```typescript
// login.component.ts
@Component({
  selector: 'app-login',
  template: `
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" formControlName="email">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" formControlName="password">
      </div>
      <button type="submit" [disabled]="loginForm.invalid || (isLoading$ | async)">
        {{ (isLoading$ | async) ? 'Logging in...' : 'Login' }}
      </button>
      <div *ngIf="error$ | async as error" class="error">
        {{ error }}
      </div>
    </form>
  `
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isLoading$ = this.userStore.isLoading$;
  error$ = this.userStore.error$;
  
  constructor(
    private fb: FormBuilder,
    private userStore: UserStore,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    
    // Redirect if already logged in
    this.userStore.isLoggedIn$.pipe(
      filter(isLoggedIn => isLoggedIn),
      take(1)
    ).subscribe(() => {
      this.router.navigate(['/dashboard']);
    });
  }
  
  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.userStore.login(email, password);
    }
  }
}
```

Advantages:
- More structured approach than simple services
- Better separation of concerns
- Still uses RxJS and Angular's DI system
- Provides a consistent pattern for state management

Limitations:
- No built-in support for time-travel debugging
- Requires manual implementation of patterns
- Limited tooling compared to mature state management libraries

### 4. NgRx (Redux Pattern)

NgRx is a framework for building reactive applications in Angular. It provides a state management system based on the Redux pattern, using RxJS observables.

Key concepts in NgRx:

- **Store**: Single source of truth for application state
- **Actions**: Events that trigger state changes
- **Reducers**: Pure functions that specify how state changes in response to actions
- **Selectors**: Functions that extract specific pieces of state
- **Effects**: Handle side effects like API calls
- **Facades**: Simplified API layer for components to interact with the store

We'll cover NgRx in depth in the next chapter, but here's a brief introduction:

```typescript
// user.actions.ts
import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

export const login = createAction(
  '[Auth] Login',
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: User }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>()
);

export const logout = createAction('[Auth] Logout');
```

```typescript
// user.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
import { User } from '../models/user.model';

export interface UserState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

export const initialState: UserState = {
  user: null,
  isLoading: false,
  error: null
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.login, state => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(UserActions.loginSuccess, (state, { user }) => ({
    ...state,
    user,
    isLoading: false,
    error: null
  })),
  on(UserActions.loginFailure, (state, { error }) => ({
    ...state,
    user: null,
    isLoading: false,
    error
  })),
  on(UserActions.logout, state => ({
    ...state,
    user: null,
    error: null
  }))
);
```

Advantages:
- Comprehensive state management solution
- Strong community support
- Excellent developer tools with time-travel debugging
- Well-defined patterns and best practices
- Better testability
- Built-in support for handling side effects

Limitations:
- Steeper learning curve
- More boilerplate code
- Might be overkill for small applications
- Requires additional packages

## When to Use Each Approach

### Use Component State When:

- State is only relevant to a single component
- State doesn't need to persist across component life cycles
- The component has simple internal logic

### Use Services with RxJS When:

- Sharing state between a few related components
- Medium-sized applications
- You want to avoid additional dependencies
- State management needs are straightforward

### Use Observable Store Pattern When:

- You need more structured state management than services
- Your application is growing in complexity
- You want to prepare for scaling without adding external libraries
- You want to follow Redux-like patterns without the overhead

### Use NgRx (or Other State Management Libraries) When:

- Building large, complex applications
- Managing state across many features and components
- You need advanced capabilities like time-travel debugging
- Working with a team that benefits from standardized patterns
- Handling complex side effects and async operations
- You value strong typing and predictability

## Practical Example: Shopping Cart State Management

Let's implement a shopping cart using the Observable Store pattern:

1. First, define our models:

```typescript
// models/product.model.ts
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

// models/cart-item.model.ts
export interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

// models/cart.model.ts
export interface Cart {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}
```

2. Create a cart store:

```typescript
// stores/cart.store.ts
import { Injectable } from '@angular/core';
import { Store } from './store';
import { Cart } from '../models/cart.model';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';

const initialState: Cart = {
  items: [],
  totalItems: 0,
  totalPrice: 0
};

@Injectable({
  providedIn: 'root'
})
export class CartStore extends Store<Cart> {
  constructor() {
    super(initialState);
  }
  
  // Selectors
  get cart$() {
    return this.select(state => state);
  }
  
  get items$() {
    return this.select(state => state.items);
  }
  
  get totalItems$() {
    return this.select(state => state.totalItems);
  }
  
  get totalPrice$() {
    return this.select(state => state.totalPrice);
  }
  
  // Helper function to recalculate cart totals
  private calculateTotals(items: CartItem[]): { totalItems: number; totalPrice: number } {
    const totalItems = items.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0);
    
    return { totalItems, totalPrice };
  }
  
  // Actions
  addToCart(product: Product, quantity = 1): void {
    const state = this.getState();
    const existingItemIndex = state.items.findIndex(item => item.productId === product.id);
    
    let updatedItems: CartItem[];
    
    if (existingItemIndex >= 0) {
      // Item exists, update quantity
      updatedItems = state.items.map((item, index) => 
        index === existingItemIndex 
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      // Item doesn't exist, add new item
      const newItem: CartItem = {
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity
      };
      
      updatedItems = [...state.items, newItem];
    }
    
    const { totalItems, totalPrice } = this.calculateTotals(updatedItems);
    
    this.setState({
      items: updatedItems,
      totalItems,
      totalPrice
    });
  }
  
  updateQuantity(productId: string, quantity: number): void {
    const state = this.getState();
    
    // Don't allow negative quantities
    if (quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }
    
    const updatedItems = state.items.map(item => 
      item.productId === productId ? { ...item, quantity } : item
    );
    
    const { totalItems, totalPrice } = this.calculateTotals(updatedItems);
    
    this.setState({
      items: updatedItems,
      totalItems,
      totalPrice
    });
  }
  
  removeFromCart(productId: string): void {
    const state = this.getState();
    const updatedItems = state.items.filter(item => item.productId !== productId);
    
    const { totalItems, totalPrice } = this.calculateTotals(updatedItems);
    
    this.setState({
      items: updatedItems,
      totalItems,
      totalPrice
    });
  }
  
  clearCart(): void {
    this.setState(initialState);
  }
}
```

3. Use the cart store in components:

```typescript
// product-list.component.ts
@Component({
  selector: 'app-product-list',
  template: `
    <div class="products-container">
      <app-product-card 
        *ngFor="let product of products" 
        [product]="product"
        (addToCart)="onAddToCart($event)">
      </app-product-card>
    </div>
  `
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  
  constructor(
    private productService: ProductService,
    private cartStore: CartStore
  ) {}
  
  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }
  
  onAddToCart(product: Product): void {
    this.cartStore.addToCart(product);
  }
}
```

```typescript
// cart.component.ts
@Component({
  selector: 'app-cart',
  template: `
    <div class="cart-container" *ngIf="(cartItems$ | async)?.length; else emptyCart">
      <div class="cart-item" *ngFor="let item of cartItems$ | async">
        <img [src]="item.image" [alt]="item.name">
        <div class="item-details">
          <h3>{{ item.name }}</h3>
          <p class="price">{{ item.price | currency }}</p>
          <div class="quantity-controls">
            <button (click)="decrementQuantity(item)">-</button>
            <span>{{ item.quantity }}</span>
            <button (click)="incrementQuantity(item)">+</button>
          </div>
          <p class="subtotal">Subtotal: {{ item.price * item.quantity | currency }}</p>
          <button class="remove-btn" (click)="removeItem(item.productId)">Remove</button>
        </div>
      </div>
      <div class="cart-summary">
        <div class="summary-row">
          <span>Items:</span>
          <span>{{ totalItems$ | async }}</span>
        </div>
        <div class="summary-row total">
          <span>Total:</span>
          <span>{{ totalPrice$ | async | currency }}</span>
        </div>
        <button class="checkout-btn">Checkout</button>
        <button class="clear-btn" (click)="clearCart()">Clear Cart</button>
      </div>
    </div>
    
    <ng-template #emptyCart>
      <div class="empty-cart">
        <h2>Your cart is empty</h2>
        <p>Add some products to your cart to see them here.</p>
        <button routerLink="/products">Continue Shopping</button>
      </div>
    </ng-template>
  `
})
export class CartComponent {
  cartItems$ = this.cartStore.items$;
  totalItems$ = this.cartStore.totalItems$;
  totalPrice$ = this.cartStore.totalPrice$;
  
  constructor(private cartStore: CartStore) {}
  
  incrementQuantity(item: CartItem): void {
    this.cartStore.updateQuantity(item.productId, item.quantity + 1);
  }
  
  decrementQuantity(item: CartItem): void {
    if (item.quantity > 1) {
      this.cartStore.updateQuantity(item.productId, item.quantity - 1);
    } else {
      this.removeItem(item.productId);
    }
  }
  
  removeItem(productId: string): void {
    this.cartStore.removeFromCart(productId);
  }
  
  clearCart(): void {
    this.cartStore.clearCart();
  }
}
```

4. Create a cart counter component for the header:

```typescript
// cart-counter.component.ts
@Component({
  selector: 'app-cart-counter',
  template: `
    <div class="cart-icon" routerLink="/cart">
      <i class="fa fa-shopping-cart"></i>
      <span class="badge" *ngIf="totalItems$ | async as totalItems">
        {{ totalItems }}
      </span>
    </div>
  `,
  styles: [`
    .cart-icon {
      position: relative;
      cursor: pointer;
    }
    .badge {
      position: absolute;
      top: -8px;
      right: -8px;
      background-color: #ff4081;
      color: white;
      border-radius: 50%;
      padding: 2px 6px;
      font-size: 12px;
    }
  `]
})
export class CartCounterComponent {
  totalItems$ = this.cartStore.totalItems$;
  
  constructor(private cartStore: CartStore) {}
}
```

## State Persistence

For many applications, persisting state across page reloads is important. Here's how to implement it with the Observable Store pattern:

```typescript
// storage.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  
  saveState<T>(key: string, state: T): void {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem(key, serializedState);
    } catch (err) {
      console.error('Could not save state', err);
    }
  }
  
  loadState<T>(key: string): T | undefined {
    try {
      const serializedState = localStorage.getItem(key);
      if (!serializedState) return undefined;
      return JSON.parse(serializedState);
    } catch (err) {
      console.error('Could not load state', err);
      return undefined;
    }
  }
  
  clearState(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (err) {
      console.error('Could not clear state', err);
    }
  }
}
```

Updating the cart store to use persistence:

```typescript
// stores/cart.store.ts
import { Injectable } from '@angular/core';
import { Store } from './store';
import { Cart } from '../models/cart.model';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';
import { StorageService } from '../services/storage.service';

const CART_STORAGE_KEY = 'app_cart';

const initialState: Cart = {
  items: [],
  totalItems: 0,
  totalPrice: 0
};

@Injectable({
  providedIn: 'root'
})
export class CartStore extends Store<Cart> {
  constructor(private storageService: StorageService) {
    // Load persisted state or use initial state
    const savedState = storageService.loadState<Cart>(CART_STORAGE_KEY);
    super(savedState || initialState);
    
    // Subscribe to state changes to persist them
    this.state$.subscribe(state => {
      this.storageService.saveState(CART_STORAGE_KEY, state);
    });
  }
  
  // ... rest of the store implementation
}
```

## Best Practices

1. **Choose the right tool for the job**:
   - Smaller applications might not need complex state management
   - Larger applications benefit from structured approaches like NgRx

2. **Follow immutability principles**:
   - Always create new state objects rather than mutating existing ones
   - Use the spread operator, `Object.assign()`, or immutability libraries

3. **Organize by feature**:
   - Group state logic by feature or domain
   - Keep related actions, reducers, and effects together

4. **Use selectors for derived state**:
   - Create selectors to compute derived state
   - Memoize selectors for performance

5. **Document your state shape**:
   - Use interfaces or types to define your state structure
   - Add comments to explain complex state relationships

6. **Handle side effects properly**:
   - Keep components free of side effects
   - Use services or effects to handle API calls and other side effects

7. **Optimize for performance**:
   - Use `OnPush` change detection strategy
   - Avoid unnecessary state updates
   - Use the `distinctUntilChanged` operator when selecting state

8. **Plan for debugging**:
   - Add logging for important state transitions
   - Consider using Redux DevTools for NgRx applications

## Practical Exercise: Task Management Application

Build a task management application with the following features:
1. Display a list of tasks categorized by status (Todo, In Progress, Done)
2. Add, edit, and delete tasks
3. Filter tasks by status and priority
4. Track task statistics (total, completed, pending)
5. Persist tasks between page reloads

Use the Observable Store pattern to manage the application state.

## Additional Resources

- [Angular Documentation on Component Interaction](https://angular.io/guide/component-interaction)
- [RxJS Documentation](https://rxjs.dev/)
- [NgRx Documentation](https://ngrx.io/)
- [Akita State Management](https://datorama.github.io/akita/)
- [NGXS State Management](https://www.ngxs.io/)
- [Redux Pattern Explained](https://redux.js.org/introduction/core-concepts)

## Next Steps

In the next chapter, we'll dive deeper into NgRx, exploring its core concepts and advanced features for state management in large Angular applications.
