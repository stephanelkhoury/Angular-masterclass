# Chapter 4: Data Binding & Templates

## Overview

This chapter explores Angular's powerful data binding capabilities and template system. You'll learn how to create dynamic templates that efficiently connect your component's data model with the user interface. By the end of this chapter, you'll understand the various forms of data binding and how to use them effectively in your templates.

## Understanding Data Binding

Data binding is a mechanism that allows you to connect your component's data to the DOM elements in your template. Angular offers several types of data binding:

1. **Interpolation**: Displaying component properties in the template
2. **Property Binding**: Binding component properties to element properties
3. **Event Binding**: Responding to user events
4. **Two-way Binding**: Combining property and event binding

These binding types allow for seamless synchronization between your component class and its template.

## Interpolation

Interpolation allows you to embed expressions into HTML text. It's denoted by double curly braces `{{ }}`:

```html
<h1>{{title}}</h1>
<p>Welcome, {{user.name}}!</p>
<div>{{getGreeting()}}</div>
```

In the component class:

```typescript
export class AppComponent {
  title = 'My Angular App';
  user = { name: 'John', role: 'Admin' };
  
  getGreeting() {
    return `Hello, ${this.user.name}!`;
  }
}
```

### Expression Context

Expressions in interpolation are evaluated in the context of the component instance:

```html
<p>The sum of 1 + 1 is {{1 + 1}}</p>
<p>Today's date: {{currentDate | date}}</p>
```

### Expression Guidelines

- Expressions should be quick and without side-effects
- No assignments (=, +=, etc.)
- No new keyword
- No chaining expressions with ; or ,
- No increment/decrement operators (++, --)
- Limited support for control flow statements (use structural directives instead)

## Property Binding

Property binding allows you to set properties of HTML elements using values from component properties:

```html
<img [src]="userImageUrl" [alt]="user.name">
<button [disabled]="isSubmitDisabled">Submit</button>
<div [class.active]="isActive">This div may be active</div>
```

In the component class:

```typescript
export class AppComponent {
  userImageUrl = 'assets/profile.jpg';
  isSubmitDisabled = false;
  isActive = true;
}
```

### Property Binding vs Interpolation

For attribute values, you can often use either approach:

```html
<!-- These are equivalent -->
<p [innerHTML]="message"></p>
<p>{{message}}</p>

<!-- But for non-string properties, property binding is required -->
<button [disabled]="isDisabled">Button</button>
```

## Event Binding

Event binding allows your app to respond to user input by updating application data:

```html
<button (click)="saveData()">Save</button>
<input (input)="onNameChange($event)">
<div (mouseenter)="showTooltip()" (mouseleave)="hideTooltip()"></div>
```

In the component class:

```typescript
export class AppComponent {
  saveData() {
    console.log('Data saved');
  }
  
  onNameChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    console.log('Name changed:', value);
  }
  
  showTooltip() {
    // Show tooltip logic
  }
  
  hideTooltip() {
    // Hide tooltip logic
  }
}
```

### $event Object

The `$event` object provides information about the event:

```html
<input (keyup)="handleKeyUp($event)">
```

```typescript
handleKeyUp(event: KeyboardEvent) {
  if (event.key === 'Enter') {
    const input = event.target as HTMLInputElement;
    this.submitSearch(input.value);
    input.value = '';
  }
}
```

## Two-Way Binding

Two-way binding combines property binding and event binding. It's denoted by `[(ngModel)]`:

```html
<input [(ngModel)]="name">
<p>Hello, {{name}}!</p>
```

To use `ngModel`, you need to import `FormsModule` in your application module:

```typescript
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    // other imports
    FormsModule
  ],
  // other properties
})
export class AppModule { }
```

### Under the Hood

Two-way binding is actually syntactic sugar for:

```html
<input [value]="name" (input)="name = $event.target.value">
```

### Custom Two-Way Binding

You can implement custom two-way binding for your components:

```typescript
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div>
      <button (click)="decrement()">-</button>
      <span>{{ count }}</span>
      <button (click)="increment()">+</button>
    </div>
  `
})
export class CounterComponent {
  @Input() count: number = 0;
  @Output() countChange = new EventEmitter<number>();
  
  increment() {
    this.count++;
    this.countChange.emit(this.count);
  }
  
  decrement() {
    this.count--;
    this.countChange.emit(this.count);
  }
}
```

Parent template:

```html
<app-counter [(count)]="myCount"></app-counter>
<p>Current count: {{myCount}}</p>
```

## Template Syntax

Angular's template syntax extends HTML with additional constructs for dynamic content:

### Template Expressions

Expressions that Angular evaluates and uses to set properties and attributes:

```html
<p>Sum: {{ 1 + 1 }}</p>
<div [style.color]="isError ? 'red' : 'black'">Status</div>
```

### Template Statements

Statements that respond to events:

```html
<button (click)="increment()">Increment</button>
<button (click)="count = count + 1">Increment</button>
```

### Template Reference Variables

Variables that reference DOM elements, components, or directives:

```html
<input #nameInput type="text">
<button (click)="greet(nameInput.value)">Greet</button>
```

### Template Expression Operators

Special operators available in Angular templates:

1. **Pipe Operator**: Transform displayed values
```html
<p>Birthday: {{ birthday | date:'fullDate' }}</p>
<p>Price: {{ price | currency:'USD' }}</p>
```

2. **Safe Navigation Operator**: Protect against null references
```html
<p>Address: {{ user?.address?.city }}</p>
```

3. **Non-null Assertion Operator**: Tell TypeScript that a value isn't null
```html
<div>{{ user!.name }}</div>
```

## Binding to Different Properties

Angular allows binding to various types of properties:

### Element Properties

```html
<img [src]="imageUrl">
<button [disabled]="isSubmitting">Submit</button>
```

### Component Properties

```html
<app-profile [user]="currentUser"></app-profile>
```

### Directive Properties

```html
<div [ngClass]="{'active': isActive, 'disabled': isDisabled}">Content</div>
```

### Style Properties

```html
<div [style.color]="textColor">Styled text</div>
<div [style.font-size.px]="fontSize">Sized text</div>
```

### CSS Classes

```html
<div [class.active]="isActive">Active when isActive is true</div>
<div [ngClass]="classObject">Multiple classes</div>
<div [ngStyle]="styleObject">Multiple styles</div>
```

With component class:

```typescript
classObject = {
  'active': this.isActive,
  'error': this.hasError,
  'highlighted': this.isSelected
};

styleObject = {
  'color': this.textColor,
  'font-weight': this.isBold ? 'bold' : 'normal',
  'font-size': this.fontSize + 'px'
};
```

## Template Context

Each template operates in a specific context:

### Component Context

The default context is the component instance:

```html
<h1>{{title}}</h1> <!-- title from the component -->
```

### NgFor Context

Inside `*ngFor`, you have access to special variables:

```html
<div *ngFor="let item of items; let i = index; let isFirst = first">
  {{i}}: {{item.name}} {{isFirst ? '(first)' : ''}}
</div>
```

Available variables:
- `index`: The index of the current item
- `first`: True when the item is the first item
- `last`: True when the item is the last item
- `even`: True when the item has an even index
- `odd`: True when the item has an odd index

### NgIf Context

Inside an `*ngIf` with an `else` clause:

```html
<div *ngIf="user; else noUser">
  Welcome, {{user.name}}!
</div>
<ng-template #noUser>
  Please log in
</ng-template>
```

## Template Input Variables

Template input variables capture values from the template:

```html
<input #phone placeholder="Phone number">
<button (click)="callPhone(phone.value)">Call</button>
```

## SVG in Templates

Angular supports data binding with SVG elements:

```html
<svg>
  <rect [attr.width]="rectWidth" [attr.height]="rectHeight"></rect>
</svg>
```

## Project: Dynamic Form Builder

In this project, we'll create a dynamic form that showcases various types of data binding:

1. Create a form with different input types
2. Use two-way binding for form fields
3. Implement validation with visual feedback
4. Display form data in real-time
5. Submit form data with event binding

### Step 1: Create a new Angular application

```bash
ng new dynamic-form-app
cd dynamic-form-app
```

### Step 2: Set up FormsModule

Import FormsModule in the app module to enable two-way binding.

### Step 3: Create the form component

Create a form with various input types and binding techniques.

### Step 4: Implement form validation

Add validation and display error messages.

### Step 5: Display form data in real-time

Show a preview of the form data as the user types.

## Exercises

1. Create a product listing page with price filtering controls
2. Build a todo list with two-way binding for task state
3. Create a theme switcher that binds to style properties
4. Build a form with all HTML5 input types and two-way binding
5. Create a custom component with two-way binding support

## Additional Resources

- [Angular Template Syntax](https://angular.io/guide/template-syntax)
- [Data Binding](https://angular.io/guide/binding-syntax)
- [Template Reference Variables](https://angular.io/guide/template-reference-variables)
- [FormsModule Documentation](https://angular.io/api/forms/FormsModule)

## Next Steps

In the next chapter, we'll dive deep into Angular directives, which provide a powerful way to manipulate the DOM and extend HTML's capabilities.
