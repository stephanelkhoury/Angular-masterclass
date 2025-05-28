# Chapter 7: Component Communication

## Overview

This chapter explores various methods for components to communicate and share data in an Angular application. Effective component communication is essential for building complex, interactive applications with a well-structured component hierarchy. By the end of this chapter, you'll understand different communication patterns and know when to use each approach.

## Why Component Communication is Important

Angular applications are built using components that need to work together. As your application grows, you'll need different communication strategies depending on:

- The relationship between components (parent-child, siblings, unrelated)
- The type of data being shared (simple values, complex objects, events)
- The frequency of communication (one-time, occasional, continuous)

Choosing the right communication method ensures efficient data flow and maintainable code structure.

## Parent to Child Communication: @Input

The most basic form of component communication is passing data from a parent component to a child component using `@Input()` decorators.

### Basic Input Example

Child component (child.component.ts):

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: '<p>Hello, {{ name }}!</p>'
})
export class ChildComponent {
  @Input() name: string;
}
```

Parent component template:

```html
<app-child [name]="parentName"></app-child>
```

Parent component class:

```typescript
export class ParentComponent {
  parentName = 'John';
}
```

### Input with Getters and Setters

You can use getter and setter methods to add logic when an input value changes:

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-price-display',
  template: '<p>Price: {{ formattedPrice }}</p>'
})
export class PriceDisplayComponent {
  formattedPrice: string;
  
  @Input() 
  set price(value: number) {
    this.formattedPrice = `$${value.toFixed(2)}`;
  }
}
```

### Input Property Aliases

You can provide an alias for an input property:

```typescript
@Component({
  selector: 'app-user-profile',
  template: '<div>{{ userData | json }}</div>'
})
export class UserProfileComponent {
  @Input('user') userData: any; // 'user' is the alias, 'userData' is the property name
}
```

Parent template:

```html
<app-user-profile [user]="currentUser"></app-user-profile>
```

### OnChanges Hook for Input Changes

To detect and respond to changes in input properties:

```typescript
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input-watcher',
  template: '<div>Value changes: {{ changes }}</div>'
})
export class InputWatcherComponent implements OnChanges {
  @Input() value: string;
  changes: number = 0;
  
  ngOnChanges(changes: SimpleChanges) {
    if (changes['value']) {
      this.changes++;
      console.log('Previous:', changes['value'].previousValue);
      console.log('Current:', changes['value'].currentValue);
      console.log('First change:', changes['value'].firstChange);
    }
  }
}
```

## Child to Parent Communication: @Output

Children can communicate with their parent components by emitting events using `@Output()` and `EventEmitter`.

### Basic Output Example

Child component:

```typescript
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <button (click)="sendMessage()">Send Message to Parent</button>
  `
})
export class ChildComponent {
  @Output() messageEvent = new EventEmitter<string>();
  
  sendMessage() {
    this.messageEvent.emit('Hello from child!');
  }
}
```

Parent component template:

```html
<app-child (messageEvent)="receiveMessage($event)"></app-child>
<p>{{ message }}</p>
```

Parent component class:

```typescript
export class ParentComponent {
  message: string;
  
  receiveMessage(msg: string) {
    this.message = msg;
  }
}
```

### Output with Custom Event Objects

You can emit complex data:

```typescript
export interface UserAction {
  type: string;
  payload: any;
}

@Component({
  selector: 'app-user-controls',
  template: `
    <button (click)="addUser()">Add User</button>
    <button (click)="deleteUser()">Delete User</button>
  `
})
export class UserControlsComponent {
  @Output() userAction = new EventEmitter<UserAction>();
  
  addUser() {
    this.userAction.emit({
      type: 'add',
      payload: { name: 'New User' }
    });
  }
  
  deleteUser() {
    this.userAction.emit({
      type: 'delete',
      payload: { id: 1 }
    });
  }
}
```

### Output Event Aliases

Similar to inputs, outputs can have aliases:

```typescript
@Component({
  selector: 'app-counter',
  template: `
    <button (click)="increment()">+</button>
  `
})
export class CounterComponent {
  @Output('valueChanged') counterChanged = new EventEmitter<number>();
  
  currentValue = 0;
  
  increment() {
    this.currentValue++;
    this.counterChanged.emit(this.currentValue);
  }
}
```

Parent template:

```html
<app-counter (valueChanged)="handleValueChange($event)"></app-counter>
```

## Two-Way Data Binding: [(ngModel)]

Angular allows for two-way data binding using the banana-in-a-box syntax `[(ngModel)]`. You can create this pattern in your own components by combining `@Input()` and `@Output()`:

Component with two-way binding:

```typescript
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  template: `
    <input [value]="value" (input)="updateValue($event)">
  `
})
export class CustomInputComponent {
  @Input() value: string;
  @Output() valueChange = new EventEmitter<string>();
  
  updateValue(event: Event) {
    const newValue = (event.target as HTMLInputElement).value;
    this.valueChange.emit(newValue);
  }
}
```

Parent component template:

```html
<app-custom-input [(value)]="name"></app-custom-input>
<p>Current value: {{ name }}</p>
```

This works because Angular matches the property `value` with the event `valueChange`. The pattern is `[property]` and `(propertyChange)`.

## Local Template Reference

You can directly access child elements in a parent's template using template references:

```html
<!-- Parent template -->
<app-child #childComp></app-child>
<button (click)="childComp.doSomething()">Call Child Method</button>
```

Child component:

```typescript
@Component({
  selector: 'app-child',
  template: `<p>{{ message }}</p>`
})
export class ChildComponent {
  message = '';
  
  doSomething() {
    this.message = 'Called from parent!';
  }
}
```

## ViewChild and ViewChildren

For more complex access to child components, use `@ViewChild()` and `@ViewChildren()` decorators:

```typescript
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-parent',
  template: `
    <app-child></app-child>
    <button (click)="callChildMethod()">Call Method</button>
  `
})
export class ParentComponent implements AfterViewInit {
  @ViewChild(ChildComponent) childComp: ChildComponent;
  
  ngAfterViewInit() {
    // Child component is available after view init
    // Be careful with changes here to avoid ExpressionChangedAfterItHasBeenCheckedError
    setTimeout(() => {
      this.childComp.message = 'Set from parent';
    });
  }
  
  callChildMethod() {
    this.childComp.doSomething();
  }
}
```

To access multiple instances of a component:

```typescript
import { Component, ViewChildren, QueryList } from '@angular/core';
import { ItemComponent } from './item.component';

@Component({
  selector: 'app-item-list',
  template: `
    <app-item *ngFor="let item of items" [data]="item"></app-item>
    <button (click)="selectAll()">Select All</button>
  `
})
export class ItemListComponent {
  items = [{id: 1, name: 'Item 1'}, {id: 2, name: 'Item 2'}, {id: 3, name: 'Item 3'}];
  @ViewChildren(ItemComponent) itemComponents: QueryList<ItemComponent>;
  
  selectAll() {
    this.itemComponents.forEach(item => item.select());
  }
}
```

## Content Projection with ContentChild and ContentChildren

`ContentChild` and `ContentChildren` work similarly to ViewChild but for projected content:

```typescript
import { Component, ContentChild, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  selector: 'app-tabs',
  template: `
    <div class="tabs-header">
      <div *ngFor="let tab of tabs" (click)="selectTab(tab)" class="tab-button">
        {{tab.title}}
      </div>
    </div>
    <div class="tab-content">
      <ng-content></ng-content>
    </div>
  `
})
export class TabsContainerComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  
  ngAfterContentInit() {
    // We can access projected tabs after content init
    if (this.tabs.length > 0) {
      this.selectTab(this.tabs.first);
    }
  }
  
  selectTab(tab: TabComponent) {
    this.tabs.forEach(t => t.active = false);
    tab.active = true;
  }
}
```

Usage:

```html
<app-tabs>
  <app-tab title="First">First tab content</app-tab>
  <app-tab title="Second">Second tab content</app-tab>
</app-tabs>
```

## Component Communication Through Services

For unrelated components or deeply nested components, services provide an effective communication channel:

### Basic Service Communication

```typescript
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messageSource = new Subject<string>();
  
  // Observable that components can subscribe to
  currentMessage$ = this.messageSource.asObservable();
  
  // Method to call from any component to update message
  sendMessage(message: string) {
    this.messageSource.next(message);
  }
}
```

Sender component:

```typescript
@Component({
  selector: 'app-sender',
  template: `
    <input #messageInput>
    <button (click)="sendMessage(messageInput.value)">Send</button>
  `
})
export class SenderComponent {
  constructor(private messageService: MessageService) {}
  
  sendMessage(message: string) {
    this.messageService.sendMessage(message);
  }
}
```

Receiver component:

```typescript
@Component({
  selector: 'app-receiver',
  template: `<p>Received: {{ message }}</p>`
})
export class ReceiverComponent implements OnInit, OnDestroy {
  message: string;
  private subscription: Subscription;
  
  constructor(private messageService: MessageService) {}
  
  ngOnInit() {
    this.subscription = this.messageService.currentMessage$
      .subscribe(message => {
        this.message = message;
      });
  }
  
  ngOnDestroy() {
    // Always unsubscribe to prevent memory leaks
    this.subscription.unsubscribe();
  }
}
```

### BehaviorSubject for State Management

For components that need the current value upon subscription:

```typescript
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSource = new BehaviorSubject<any>({ name: 'Guest', isLoggedIn: false });
  currentUser$ = this.userSource.asObservable();
  
  updateUser(user: any) {
    this.userSource.next(user);
  }
  
  // Components can directly access the current value without subscribing
  get currentUserValue() {
    return this.userSource.getValue();
  }
}
```

## Using EventBus for Component Communication

For more complex applications, you might want to implement an event bus pattern:

```typescript
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export interface EventData {
  type: string;
  payload: any;
}

@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  private eventBus = new Subject<EventData>();
  
  emit(type: string, payload: any = {}) {
    this.eventBus.next({ type, payload });
  }
  
  on(eventType: string): Observable<any> {
    return this.eventBus.pipe(
      filter(event => event.type === eventType),
      map(event => event.payload)
    );
  }
}
```

Usage:

```typescript
// Component A emits an event
constructor(private eventBus: EventBusService) {}

sendEvent() {
  this.eventBus.emit('userUpdated', { id: 1, name: 'John' });
}

// Component B listens for the event
ngOnInit() {
  this.subscription = this.eventBus.on('userUpdated')
    .subscribe(user => {
      console.log('User updated:', user);
    });
}
```

## State Management with NgRx Store

For large applications, consider using NgRx Store for state management, which we'll cover in more detail in Chapter 13.

## Project: Task Management Application

In this project, we'll create a task management application that uses various communication methods:

1. Create a new Angular application
2. Implement a task list and task details components
3. Use @Input/@Output for parent-child communication
4. Use a service for cross-component communication
5. Implement ViewChild for direct component access

### Step 1: Create a new Angular application

```bash
ng new task-manager
cd task-manager
```

### Step 2: Generate components and services

```bash
ng generate service services/task
ng generate component components/task-list
ng generate component components/task-item
ng generate component components/task-form
ng generate component components/task-details
```

### Step 3: Implement task service

Create a task service for cross-component communication.

### Step 4: Implement component communication

Implement the components with appropriate communication strategies.

## Exercises

1. Create a dynamic form builder with parent-child communication
2. Create a nested comments section with reply functionality
3. Implement a shopping cart that updates multiple components when items are added
4. Create a real-time chat application with service-based communication
5. Implement a tabbed interface using ContentChildren

## Additional Resources

- [Angular Component Interaction Guide](https://angular.io/guide/component-interaction)
- [Angular Input and Output Properties](https://angular.io/guide/inputs-outputs)
- [ContentChildren and ViewChildren](https://angular.io/api/core/ContentChildren)
- [RxJS Documentation](https://rxjs.dev/guide/overview)

## Next Steps

In the next chapter, we'll explore Angular Services and Dependency Injection in depth, learning how to create reusable services that can manage application logic, state, and data access.
