# 🛒 Angular E-commerce Application - Complete Documentation

## 📋 Table of Contents
- [Project Overview](#-project-overview)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Development Guide](#-development-guide)
- [API Documentation](#-api-documentation)
- [State Management](#-state-management)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Performance](#-performance)
- [Troubleshooting](#-troubleshooting)
- [Technical Implementation Guide](#-technical-implementation-guide)

---

## 🎯 Project Overview

A modern, full-featured e-commerce application built with Angular 16+, featuring a responsive design, state management with NgRx, and a comprehensive shopping experience.

**Live Application**: http://localhost:4200 (when running locally)

### Key Highlights
- ✅ **Modern Angular 16+** with latest features
- ✅ **NgRx State Management** for scalable architecture
- ✅ **Angular Material UI** components
- ✅ **Responsive Design** (Mobile, Tablet, Desktop)
- ✅ **PWA Features** with Service Workers
- ✅ **Cart Persistence** across sessions
- ✅ **Modern CSS** with custom properties and animations
- ✅ **TypeScript** for type safety
- ✅ **RxJS** for reactive programming

---

## ✨ Features

### 🛍️ Shopping Experience
- **Product Catalog** with filtering and sorting
- **Product Search** with autocomplete
- **Product Details** with image gallery
- **Shopping Cart** with persistent storage
- **Wishlist** functionality
- **Checkout Process** with form validation
- **Order Management** and history

### 👤 User Management
- **User Authentication** with JWT
- **User Profile** management
- **Address Book** for shipping/billing
- **Order History** tracking
- **User Preferences** settings

### 🎨 UI/UX Features
- **Responsive Design** for all devices
- **Modern Animations** with CSS transitions
- **Loading States** and skeleton screens
- **Error Handling** with user-friendly messages
- **Accessibility** WCAG compliant
- **Dark/Light Theme** support (configurable)

### 🔧 Admin Features
- **Product Management** (CRUD operations)
- **Inventory Tracking**
- **Order Processing**
- **Customer Management**
- **Sales Analytics**

---

## 🛠️ Technology Stack

### Frontend
- **Angular 16+** - Main framework
- **TypeScript** - Programming language
- **Angular Material** - UI components
- **NgRx** - State management
- **RxJS** - Reactive programming
- **Angular Router** - Navigation
- **Angular Forms** - Form handling

### Styling
- **SCSS** - CSS preprocessor
- **CSS Custom Properties** - Design system
- **Bootstrap 5** - Utility classes
- **Animate.css** - Animations
- **AOS** - Scroll animations

### Development Tools
- **Angular CLI** - Development toolkit
- **TypeScript Compiler** - Type checking
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks

### Build & Deployment
- **Webpack** - Module bundler
- **Express.js** - Server (for production)
- **Service Workers** - PWA features

---

## 📁 Project Structure

```
src/
├── app/
│   ├── core/                    # Core functionality (singleton services)
│   │   ├── guards/             # Route guards
│   │   ├── interceptors/       # HTTP interceptors
│   │   ├── services/           # Core services
│   │   └── core.module.ts
│   │
│   ├── features/               # Feature modules
│   │   ├── auth/              # Authentication feature
│   │   ├── cart/              # Shopping cart feature
│   │   ├── products/          # Product catalog feature
│   │   ├── checkout/          # Checkout process
│   │   └── user/              # User management
│   │
│   ├── pages/                 # Page components
│   │   ├── home/              # Home page
│   │   ├── about/             # About page
│   │   └── contact/           # Contact page
│   │
│   ├── shared/                # Shared components and utilities
│   │   ├── components/        # Reusable components
│   │   ├── directives/        # Custom directives
│   │   ├── pipes/             # Custom pipes
│   │   ├── models/            # TypeScript interfaces
│   │   └── utils/             # Utility functions
│   │
│   ├── store/                 # NgRx store configuration
│   │   ├── actions/           # NgRx actions
│   │   ├── effects/           # NgRx effects
│   │   ├── reducers/          # NgRx reducers
│   │   ├── selectors/         # NgRx selectors
│   │   └── index.ts           # Store configuration
│   │
│   ├── app-routing.module.ts  # Main routing configuration
│   ├── app.component.*        # Root component
│   └── app.module.ts          # Root module
│
├── assets/                    # Static assets
│   ├── images/               # Images and icons
│   ├── styles/               # Global styles
│   └── data/                 # Mock data files
│
├── environments/             # Environment configurations
│   ├── environment.ts        # Development environment
│   └── environment.prod.ts   # Production environment
│
└── styles.scss              # Global stylesheet
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** (v8 or higher)
- **Angular CLI** (v16 or higher)

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd angular-ecommerce
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm start
# or
ng serve
```

4. **Open your browser**
Navigate to `http://localhost:4200`

### Quick Start with Script
Use the provided shell script for automated setup:
```bash
./run-project.sh
```

This script will:
- Kill any existing processes on port 4200
- Install/update dependencies
- Build the project
- Start the development server

---

## 💻 Development Guide

### Development Commands

```bash
# Start development server
npm start
ng serve

# Build for production
npm run build
ng build --configuration production

# Run tests
npm test
ng test

# Run e2e tests
npm run e2e

# Watch mode for development
npm run watch
ng build --watch --configuration development

# Lint code
ng lint

# Format code
npm run format
```

### Code Generation

```bash
# Generate component
ng generate component features/products/product-list

# Generate service
ng generate service core/services/product

# Generate module
ng generate module features/checkout --routing

# Generate guard
ng generate guard core/guards/auth

# Generate pipe
ng generate pipe shared/pipes/currency-format
```

### Development Best Practices

1. **Component Architecture**
   - Use OnPush change detection strategy
   - Implement OnDestroy for cleanup
   - Keep components small and focused

2. **Service Design**
   - Use dependency injection
   - Implement error handling
   - Use RxJS operators effectively

3. **State Management**
   - Use NgRx for complex state
   - Keep state normalized
   - Use selectors for data access

4. **Styling**
   - Use SCSS for better organization
   - Follow BEM methodology
   - Use CSS custom properties for theming

---

## 🔌 API Documentation

### Base Configuration
```typescript
// Environment configuration
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  stripePublishableKey: 'pk_test_...'
};
```

### API Endpoints

#### Products
```
GET    /api/products              # Get all products
GET    /api/products/:id          # Get product by ID
GET    /api/products/category/:id # Get products by category
POST   /api/products/search       # Search products
```

#### Cart
```
GET    /api/cart                  # Get user cart
POST   /api/cart/add              # Add item to cart
PUT    /api/cart/update/:id       # Update cart item
DELETE /api/cart/remove/:id       # Remove item from cart
```

#### Authentication
```
POST   /api/auth/login           # User login
POST   /api/auth/register        # User registration
POST   /api/auth/refresh         # Refresh token
POST   /api/auth/logout          # User logout
```

#### Orders
```
GET    /api/orders               # Get user orders
POST   /api/orders               # Create new order
GET    /api/orders/:id           # Get order details
PUT    /api/orders/:id           # Update order status
```

### HTTP Interceptors

#### Auth Interceptor
Automatically adds JWT token to requests:
```typescript
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();
    if (token) {
      req = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` }
      });
    }
    return next.handle(req);
  }
}
```

#### Error Interceptor
Handles HTTP errors globally:
```typescript
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle different error types
        if (error.status === 401) {
          this.authService.logout();
        }
        return throwError(error);
      })
    );
  }
}
```

---

## 🗃️ State Management

### NgRx Architecture

#### Store Structure
```typescript
export interface AppState {
  auth: AuthState;
  products: ProductState;
  cart: CartState;
  orders: OrderState;
  ui: UiState;
}
```

#### Actions Example
```typescript
// Cart Actions
export const addToCart = createAction(
  '[Cart] Add To Cart',
  props<{ product: Product; quantity: number }>()
);

export const removeFromCart = createAction(
  '[Cart] Remove From Cart',
  props<{ productId: string }>()
);
```

#### Reducer Example
```typescript
const cartReducer = createReducer(
  initialState,
  on(addToCart, (state, { product, quantity }) => ({
    ...state,
    items: [...state.items, { product, quantity }]
  })),
  on(removeFromCart, (state, { productId }) => ({
    ...state,
    items: state.items.filter(item => item.product.id !== productId)
  }))
);
```

#### Effects Example
```typescript
@Injectable()
export class CartEffects {
  addToCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addToCart),
      tap(() => this.notificationService.showSuccess('Item added to cart')),
      switchMap(() => [])
    ), { dispatch: false }
  );
}
```

#### Selectors Example
```typescript
export const selectCartItems = createSelector(
  selectCartState,
  (state: CartState) => state.items
);

export const selectCartTotal = createSelector(
  selectCartItems,
  (items) => items.reduce((total, item) => 
    total + (item.product.price * item.quantity), 0
  )
);
```

---

## 🧪 Testing

### Unit Testing

#### Component Testing
```typescript
describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCardComponent],
      imports: [MaterialModule]
    });
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

#### Service Testing
```typescript
describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    });
    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should fetch products', () => {
    const mockProducts = [{ id: '1', name: 'Test Product' }];
    
    service.getProducts().subscribe(products => {
      expect(products).toEqual(mockProducts);
    });

    const req = httpMock.expectOne('/api/products');
    expect(req.request.method).toBe('GET');
    req.flush(mockProducts);
  });
});
```

### E2E Testing with Cypress

#### Installation
```bash
npm install --save-dev cypress
npx cypress open
```

#### E2E Test Example
```typescript
describe('Shopping Cart', () => {
  beforeEach(() => {
    cy.visit('/products');
  });

  it('should add product to cart', () => {
    cy.get('[data-testid="product-card"]').first().click();
    cy.get('[data-testid="add-to-cart-btn"]').click();
    cy.get('[data-testid="cart-icon"]').should('contain', '1');
  });

  it('should complete checkout process', () => {
    // Add items to cart
    cy.get('[data-testid="add-to-cart-btn"]').first().click();
    
    // Go to checkout
    cy.get('[data-testid="cart-icon"]').click();
    cy.get('[data-testid="checkout-btn"]').click();
    
    // Fill checkout form
    cy.get('[data-testid="email-input"]').type('test@example.com');
    cy.get('[data-testid="address-input"]').type('123 Test St');
    
    // Complete order
    cy.get('[data-testid="place-order-btn"]').click();
    cy.url().should('include', '/order-confirmation');
  });
});
```

---

## 🚀 Deployment

### Production Build
```bash
# Build for production
ng build --configuration production

# Build with specific environment
ng build --configuration staging
```

### Environment Configuration

#### environment.prod.ts
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://api.yourapp.com',
  stripePublishableKey: 'pk_live_...',
  enableAnalytics: true,
  cacheTimeout: 300000
};
```

### Deployment Options

#### 1. Netlify Deployment
```bash
# Build and deploy
npm run build
# Upload dist/ folder to Netlify
```

#### 2. Vercel Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

#### 3. Firebase Hosting
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Initialize and deploy
firebase init hosting
firebase deploy
```

#### 4. Docker Deployment
```dockerfile
# Dockerfile
FROM node:16-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist/angular-ecommerce /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Production Optimizations

1. **Bundle Analysis**
```bash
npm install --save-dev webpack-bundle-analyzer
ng build --stats-json
npx webpack-bundle-analyzer dist/angular-ecommerce/stats.json
```

2. **Performance Budget**
```json
// angular.json
"budgets": [
  {
    "type": "initial",
    "maximumWarning": "2mb",
    "maximumError": "5mb"
  }
]
```

---

## ⚡ Performance

### Performance Optimizations Implemented

#### 1. Lazy Loading
```typescript
const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./features/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./features/checkout/checkout.module').then(m => m.CheckoutModule)
  }
];
```

#### 2. OnPush Change Detection
```typescript
@Component({
  selector: 'app-product-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `...`
})
export class ProductCardComponent {
  @Input() product: Product;
}
```

#### 3. TrackBy Functions
```typescript
trackByProductId(index: number, product: Product): string {
  return product.id;
}
```

#### 4. Image Optimization
```html
<img 
  [src]="product.image" 
  [alt]="product.name"
  loading="lazy"
  width="300"
  height="200">
```

#### 5. Service Worker Caching
```typescript
// app.module.ts
ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
  registrationStrategy: 'registerWhenStable:30000'
})
```

### Performance Metrics
- **First Contentful Paint**: < 2s
- **Largest Contentful Paint**: < 4s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms
- **Bundle Size**: ~2MB (gzipped)

---

## 🔧 Troubleshooting

### Common Issues

#### 1. Port 4200 Already in Use
```bash
# Kill process on port 4200
lsof -ti:4200 | xargs kill -9

# Or use different port
ng serve --port 4201
```

#### 2. Node Module Issues
```bash
# Clear npm cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

#### 3. Angular CLI Version Conflicts
```bash
# Update Angular CLI globally
npm uninstall -g @angular/cli
npm install -g @angular/cli@latest

# Update project dependencies
ng update @angular/core @angular/cli
```

#### 4. TypeScript Compilation Errors
```bash
# Check TypeScript version
ng version

# Update TypeScript
npm install typescript@latest

# Clear TypeScript cache
rm -rf .angular/cache
```

#### 5. NgRx DevTools Not Working
```typescript
// Ensure proper setup in app.module.ts
StoreDevtoolsModule.instrument({
  maxAge: 25,
  logOnly: environment.production
})
```

### Performance Issues

#### 1. Slow Initial Load
- Enable lazy loading for feature modules
- Implement preloading strategy
- Optimize bundle size

#### 2. Memory Leaks
- Unsubscribe from observables in ngOnDestroy
- Use takeUntil pattern
- Avoid circular references

#### 3. Change Detection Issues
- Use OnPush change detection strategy
- Implement proper trackBy functions
- Avoid function calls in templates

### Development Tips

1. **Use Angular DevTools**
   - Install Angular DevTools browser extension
   - Profile component performance
   - Debug change detection cycles

2. **Monitor Bundle Size**
   - Use webpack-bundle-analyzer
   - Implement tree shaking
   - Remove unused dependencies

3. **Optimize Images**
   - Use WebP format when possible
   - Implement lazy loading
   - Compress images before use

4. **Database Performance**
   - Use indexes for frequent queries
   - Implement pagination
   - Cache frequently accessed data

---

## 🔧 Technical Implementation Guide

### 🌐 FakeStore API Integration Architecture

This section provides detailed technical documentation for development teams on how data is fetched from the FakeStore API and how the cart system operates within our Angular e-commerce application.

#### 📡 Data Fetching Infrastructure

##### **FakeStore API Service Layer**
Our application implements a robust service layer architecture for FakeStore API integration:

**File**: `src/app/core/services/fake-store-api.service.ts`

```typescript
// Core service interfaces for type safety
export interface FakeStoreProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number; };
}
```

**Key Implementation Features:**
- **Type-Safe API Interfaces**: Strongly typed interfaces for FakeStore responses
- **Error Handling Pipeline**: Comprehensive error catching with fallback responses
- **Data Transformation Layer**: Converts external API format to internal application models
- **Query Parameter Management**: Dynamic URL construction with filtering capabilities
- **Caching Strategy**: Built-in response transformation and pagination handling

##### **Product Service Orchestration**
**File**: `src/app/core/services/product.service.ts`

The `ProductService` acts as the primary orchestrator, implementing a **Strategy Pattern** for data source management:

```typescript
getProducts(options): Observable<PaginatedResponse<Product>> {
  if (environment.useFakeStoreApi) {
    return this.fakeStoreApiService.getProducts(options);
  }
  // Fallback to mock data or real API
}
```

**Data Flow Architecture:**
1. **Component Request** → Product Service
2. **Strategy Selection** → Environment flag evaluation
3. **API Service Call** → FakeStore API HTTP request
4. **Response Transformation** → External format to internal models
5. **Observable Stream** → Reactive data delivery to components

##### **Data Transformation Pipeline**

**External API Model** → **Internal Application Model**

```typescript
// FakeStore API Response Structure
{
  id: number,
  title: string,        // → name
  price: number,        // → price
  description: string,  // → description
  category: string,     // → category.name
  image: string,        // → imageUrl
  rating: { rate, count } // → averageRating, reviewCount
}

// Transformed Application Model
{
  id: string,
  name: string,
  price: number,
  discountPrice?: number,
  description: string,
  category: Category,
  imageUrl: string,
  averageRating: number,
  reviewCount: number,
  brand: string,        // Generated from category
  reviews: Review[]     // Mock generated
}
```

**Transformation Features:**
- **Field Mapping**: Automatic conversion of API field names to application schema
- **Data Enrichment**: Addition of calculated fields (brand, reviews, pricing)
- **Type Conversion**: String to number conversions and ID formatting
- **Pagination Wrapper**: Wrapping response in `PaginatedResponse<T>` structure

#### 🛒 Cart Management System Architecture

##### **NgRx State Management Pattern**

Our cart implementation follows the **Redux pattern** with NgRx for predictable state management:

**State Structure** (`src/app/store/reducers/cart.reducer.ts`):
```typescript
export interface State {
  items: CartItem[];     // Array of cart items
  total: number;         // Calculated total price
  loading: boolean;      // Loading state indicator
  error: string | null;  // Error state management
}
```

##### **Action-Based Cart Operations**

**File**: `src/app/store/actions/cart.actions.ts`

**Core Cart Actions:**
- `addToCart` - Adds product to cart with quantity management
- `removeFromCart` - Removes product by productId
- `updateCartItemQuantity` - Updates specific item quantity
- `clearCart` - Empties entire cart
- `loadCart` - Retrieves cart from storage/server
- `syncCartWithServer` - Synchronizes local cart with backend

**Action Payload Structure:**
```typescript
// Add to Cart Action
addToCart = createAction(
  '[Cart Page] Add to Cart',
  props<{ item: CartItem }>()
);

// Cart Item Interface
interface CartItem {
  productId: string;    // Product identifier
  name: string;         // Product display name
  price: number;        // Unit price
  quantity: number;     // Item quantity
  image: string;        // Product image URL
}
```

##### **Cart Reducer Logic Flow**

**File**: `src/app/store/reducers/cart.reducer.ts`

**Add to Cart Process:**
1. **Duplicate Check**: Search existing items by `productId`
2. **Quantity Aggregation**: If exists, sum quantities; if new, append to array
3. **Total Calculation**: Recalculate total price using `calculateTotal()` helper
4. **State Update**: Return new immutable state object

```typescript
on(CartActions.addToCart, (state, { item }) => {
  const existingItemIndex = state.items.findIndex(
    cartItem => cartItem.productId === item.productId
  );
  
  let updatedItems: CartItem[];
  if (existingItemIndex >= 0) {
    // Update existing item quantity
    updatedItems = state.items.map((cartItem, index) => 
      index === existingItemIndex 
        ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
        : cartItem
    );
  } else {
    // Add new item to cart
    updatedItems = [...state.items, item];
  }
  
  return {
    ...state,
    items: updatedItems,
    total: calculateTotal(updatedItems)
  };
})
```

##### **Effects-Based Side Effect Management**

**File**: `src/app/store/effects/cart.effects.ts`

**Cart Effects Pipeline:**
- **Persistence Layer**: Automatic localStorage synchronization
- **Notification System**: User feedback on cart operations
- **Authentication Context**: Different behavior for authenticated vs guest users
- **Server Synchronization**: Background sync for logged-in users

**Add to Cart Effect Flow:**
```typescript
addToCart$ = createEffect(() =>
  this.actions$.pipe(
    ofType(CartActions.addToCart),
    withLatestFrom(
      this.store.select(selectCartItems),
      this.store.select(selectIsAuthenticated)
    ),
    tap(([action, currentItems, isAuthenticated]) => {
      // Show success notification
      this.notificationService.showSuccess(
        `${action.item.name} added to cart`
      );
      
      // Sync with localStorage for guest users
      if (!isAuthenticated) {
        this.updateLocalStorage(currentItems, action.item);
      }
    })
  )
);
```

##### **Cart Service Integration Layer**

**File**: `src/app/core/services/cart.service.ts`

The `CartService` provides a **Facade Pattern** interface for cart operations:

**Key Methods:**
- `addToCart(product: Product, quantity: number)` - Converts Product to CartItem
- `removeFromCart(productId: string)` - Dispatches remove action
- `updateQuantity(productId: string, quantity: number)` - Updates item quantity
- `syncCart(items: CartItem[])` - Server synchronization for authenticated users

**Product to CartItem Transformation:**
```typescript
addToCart(product: Product, quantity: number = 1): void {
  const cartItem: CartItem = {
    productId: product.id,
    quantity: quantity,
    name: product.name,
    price: product.discountPrice || product.price,
    unitPrice: product.discountPrice || product.price,
    image: product.imageUrl,
    imageUrl: product.imageUrl
  };
  this.store.dispatch(addToCart({ item: cartItem }));
}
```

#### 🔄 Complete Add-to-Cart Process Flow

**For Development Teams - End-to-End Implementation:**

1. **UI Component Trigger** 
   - User clicks "Add to Cart" button
   - Component calls `cartService.addToCart(product, quantity)`

2. **Service Layer Processing**
   - `CartService.addToCart()` transforms `Product` to `CartItem`
   - Dispatches `addToCart` action to NgRx store

3. **State Management Pipeline**
   - **Reducer**: Updates cart state immutably
   - **Effects**: Handles side effects (notifications, persistence)
   - **Selectors**: Provide reactive state access

4. **Persistence Strategy**
   - **Guest Users**: Immediate localStorage synchronization
   - **Authenticated Users**: Background server synchronization
   - **Error Handling**: Fallback to local storage on server errors

5. **UI State Updates**
   - **Cart Badge**: Real-time count updates via selectors
   - **Product Pages**: Add-to-cart button state changes
   - **Cart Page**: Automatic item list refresh

#### 🔧 Technical Configuration

**Environment Flags** (`src/environments/environment.ts`):
```typescript
export const environment = {
  useFakeStoreApi: true,    // Enable FakeStore API integration
  useMockData: false,       // Fallback to mock data service
  apiUrl: 'https://api.example.com'  // Backend API URL
};
```

**Key Development Considerations:**
- **Type Safety**: All interfaces strongly typed for compile-time error detection
- **Error Boundaries**: Comprehensive error handling with user-friendly fallbacks
- **Performance**: Lazy loading and efficient state updates
- **Scalability**: Modular architecture supporting multiple data sources
- **Testing**: Mockable services and predictable state management

#### 📊 Data Models Reference

**Core Interface Definitions:**

```typescript
// Product Model
interface Product {
  id: string;
  name: string;
  price: number;
  discountPrice?: number;
  description: string;
  category: Category;
  imageUrl: string;
  averageRating: number;
  reviewCount: number;
  brand: string;
  reviews: Review[];
}

// Cart Item Model  
interface CartItem {
  productId: string;
  name: string;
  price: number;
  unitPrice?: number;
  quantity: number;
  image: string;
  imageUrl?: string;
}

// Paginated Response Wrapper
interface PaginatedResponse<T> {
  items: T[];
  totalCount: number;
  page: number;
  limit: number;
  totalPages: number;
}
```

This architecture ensures **maintainable**, **scalable**, and **type-safe** e-commerce functionality with clear separation of concerns and reactive data flow patterns.

---

## 🎯 Team Development Guidelines

### **FakeStore API Integration Best Practices**

#### **Service Layer Development**
- **Single Responsibility**: Each service handles one external API
- **Interface Segregation**: Separate interfaces for external vs internal models
- **Error Handling**: Always provide fallback responses and user-friendly error messages
- **Type Safety**: Use TypeScript interfaces for all API contracts

#### **State Management Standards**
- **Immutable Updates**: Never mutate state directly - use spread operators and array methods
- **Action Naming**: Follow pattern `[Component/Page] Action Description`
- **Effect Patterns**: Use `withLatestFrom` for accessing multiple state slices
- **Selector Composition**: Create reusable selectors for complex state derivations

#### **Cart Implementation Guidelines**
- **Persistence Strategy**: Support both localStorage (guests) and server sync (authenticated)
- **Quantity Management**: Always validate quantity values and handle edge cases
- **Price Calculations**: Use dedicated helper functions for consistent math operations
- **User Feedback**: Provide immediate visual feedback for all cart operations

#### **Testing Requirements**
- **Service Mocking**: Mock external API calls in unit tests
- **State Testing**: Test reducers with various action combinations
- **Effect Testing**: Mock dependencies and test side effect chains
- **Integration Testing**: End-to-end cart workflow validation

#### **Performance Considerations**
- **Lazy Loading**: Load cart data only when needed
- **Debouncing**: Prevent rapid-fire cart updates
- **Caching**: Cache frequently accessed product data
- **Bundle Optimization**: Use Angular's tree-shaking for smaller bundles

---
