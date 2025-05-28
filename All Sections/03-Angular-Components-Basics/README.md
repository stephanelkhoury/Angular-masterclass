# Chapter 3: Angular Components Basics

## Overview

This chapter introduces the concept of components, which are the fundamental building blocks of Angular applications. We'll explore component architecture, templates, styling, and lifecycle. By the end of this chapter, you'll be able to create, customize, and manage components effectively.

## What are Angular Components?

Components are the most basic UI building block of an Angular application. They are essentially classes with decorators that mark them as Angular components. Each component consists of:

- **Template**: The HTML view of the component
- **Class**: TypeScript code that supports the view
- **Metadata**: Information that tells Angular how to process the class
- **Styles**: CSS that applies specifically to the component's template

Components encapsulate data, logic, and view into a reusable package. They follow a component-based architecture, which allows for better maintainability, testability, and reusability.

## Creating a Component

Components can be created manually or using the Angular CLI:

### Using Angular CLI (Recommended)

```bash
ng generate component my-component
# or shorter
ng g c my-component
```

This will:
1. Create a new folder with the component name
2. Generate component files (TypeScript, HTML, CSS, spec)
3. Update the nearest module to include the component

### Manual Component Creation

1. Create a TypeScript file for your component class
2. Import necessary decorators
3. Define your component class and apply the `@Component` decorator
4. Define the template and styles
5. Register the component in a module

## Component Structure

A basic component consists of:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {
  // Component properties and methods go here
  title = 'My New Component';
  
  doSomething() {
    console.log('Button clicked!');
  }
}
```

### Component Decorator Properties

The `@Component` decorator accepts a configuration object with properties:

- **selector**: CSS selector that identifies this component in a template
- **templateUrl**: Path to the HTML template file
- **template**: Inline HTML template (alternative to templateUrl)
- **styleUrls**: Array of paths to CSS files
- **styles**: Array of inline CSS styles (alternative to styleUrls)
- **providers**: Array of services needed by the component
- **encapsulation**: View encapsulation strategy
- **changeDetection**: Change detection strategy

## Component Templates

Templates define the component's view using HTML with Angular-specific syntax:

### Inline Template

```typescript
@Component({
  selector: 'app-greeting',
  template: '<h1>Hello, {{name}}!</h1>',
  styles: ['h1 { color: blue; }']
})
```

### External Template

```typescript
@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
```

With `greeting.component.html`:

```html
<h1>Hello, {{name}}!</h1>
<button (click)="greet()">Greet</button>
```

## Component Styling

Angular provides several ways to style components:

### Inline Styles

```typescript
@Component({
  styles: [`
    .highlight {
      background-color: yellow;
      padding: 5px;
    }
    h1 { font-family: Arial; }
  `]
})
```

### External Stylesheet

```typescript
@Component({
  styleUrls: ['./my-component.component.css']
})
```

### Style Encapsulation

Angular provides three encapsulation strategies:

```typescript
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.Emulated  // Default
  // Other options: ViewEncapsulation.None or ViewEncapsulation.ShadowDom
})
```

- **Emulated**: CSS is scoped to the component (default)
- **None**: CSS is global
- **ShadowDom**: Uses browser's native shadow DOM

## Component Interaction

Components can interact with their environment in several ways:

### Input Properties

Input properties allow data to flow from a parent component to a child component:

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  template: '<div>Name: {{name}}</div>'
})
export class UserProfileComponent {
  @Input() name: string;
  @Input('userData') user: any; // Alias for property binding
}
```

Parent template:

```html
<app-user-profile [name]="userName" [userData]="user"></app-user-profile>
```

### Output Properties

Output properties allow child components to send data to their parent components:

```typescript
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
  `
})
export class CounterComponent {
  @Output() valueChange = new EventEmitter<number>();
  
  currentValue = 0;
  
  increment() {
    this.currentValue++;
    this.valueChange.emit(this.currentValue);
  }
  
  decrement() {
    this.currentValue--;
    this.valueChange.emit(this.currentValue);
  }
}
```

Parent template:

```html
<app-counter (valueChange)="handleValueChange($event)"></app-counter>
<p>Current value: {{value}}</p>
```

Parent component:

```typescript
export class AppComponent {
  value = 0;
  
  handleValueChange(newValue: number) {
    this.value = newValue;
  }
}
```

## Component Lifecycle Hooks

Angular components have a lifecycle that starts when Angular instantiates the component class and renders the component view. The lifecycle continues with change detection, as Angular checks for changes to data-bound properties, and ends when Angular destroys the component instance and removes its rendered template from the DOM.

### Available Lifecycle Hooks

1. **ngOnChanges**: Called when input properties change
2. **ngOnInit**: Called once after the first ngOnChanges
3. **ngDoCheck**: Called during every change detection run
4. **ngAfterContentInit**: Called after content (ng-content) has been projected into the component
5. **ngAfterContentChecked**: Called after every check of projected content
6. **ngAfterViewInit**: Called after component's view and child views are initialized
7. **ngAfterViewChecked**: Called after every check of component's view and child views
8. **ngOnDestroy**: Called just before the component is destroyed

### Example of Lifecycle Hooks Implementation

```typescript
import { 
  Component, OnInit, OnDestroy, OnChanges, 
  DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, SimpleChanges, Input 
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html'
})
export class LifecycleComponent implements OnInit, OnDestroy, OnChanges, 
  DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked {
  
  @Input() inputValue: string;

  constructor() {
    console.log('Constructor called');
  }
  
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called', changes);
  }
  
  ngOnInit() {
    console.log('ngOnInit called');
  }
  
  ngDoCheck() {
    console.log('ngDoCheck called');
  }
  
  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }
  
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }
  
  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
  }
  
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }
  
  ngOnDestroy() {
    console.log('ngOnDestroy called');
    // Clean up resources, unsubscribe from observables, etc.
  }
}
```

## Content Projection (ng-content)

Content projection allows you to insert content from the parent component into the child component template:

### Basic Content Projection

Child component template:

```html
<div class="card">
  <div class="card-header">
    <ng-content select=".card-title"></ng-content>
  </div>
  <div class="card-body">
    <ng-content></ng-content>
  </div>
</div>
```

Parent template:

```html
<app-card>
  <h2 class="card-title">User Profile</h2>
  <p>Name: John Doe</p>
  <p>Email: john@example.com</p>
</app-card>
```

## ViewChild and ContentChild

To access elements in the template or projected content:

```typescript
import { Component, ViewChild, ContentChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child-access',
  template: `
    <h2 #header>View Child Example</h2>
    <ng-content></ng-content>
  `
})
export class ChildAccessComponent implements AfterViewInit {
  // Access an element in the component's template
  @ViewChild('header') headerElement: ElementRef;
  
  // Access an element projected into the component
  @ContentChild('projectedElement') projectedElement: ElementRef;
  
  ngAfterViewInit() {
    // Access elements after the view is initialized
    console.log('View header:', this.headerElement.nativeElement.textContent);
    console.log('Projected content:', this.projectedElement.nativeElement.textContent);
  }
}
```

Parent component:

```html
<app-child-access>
  <div #projectedElement>This is projected content</div>
</app-child-access>
```

## Project: Profile Card Component

In this project, we'll create a reusable profile card component:

1. Create a new Angular application
2. Generate a profile card component
3. Add input properties for user data
4. Add output event for actions
5. Add content projection for customization
6. Style the component effectively

### Step 1: Create a new Angular application

```bash
ng new profile-card-app
cd profile-card-app
```

### Step 2: Generate the profile card component

```bash
ng generate component profile-card
```

### Step 3: Define the component's inputs, outputs, and structure

Implement the component with proper inputs, outputs, and content projection.

### Step 4: Style the component

Add CSS to make the profile card visually appealing.

### Step 5: Use the component in the main app

Demonstrate usage of the component with different data and configurations.

## Exercises

1. Create a "Button" component that accepts customizable properties (text, color, size, etc.)
2. Create a "Tooltip" component that displays additional information when hovering over an element
3. Create a "Tab" component with content projection for tab panels
4. Create a component that uses all lifecycle hooks and logs when each is called
5. Build a "Star Rating" component that emits the selected rating

## Additional Resources

- [Angular Components Documentation](https://angular.io/guide/component-overview)
- [Component Interaction](https://angular.io/guide/component-interaction)
- [Content Projection](https://angular.io/guide/content-projection)
- [Lifecycle Hooks](https://angular.io/guide/lifecycle-hooks)

## Next Steps

In the next chapter, we'll explore data binding and templates in depth, including interpolation, property binding, event binding, and two-way data binding.
