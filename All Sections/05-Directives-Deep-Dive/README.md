# Chapter 5: Directives Deep Dive

## Overview

This chapter explores Angular directives in depth. Directives are classes that add additional behavior to elements in your Angular applications. By the end of this chapter, you'll understand the different types of directives, how to use built-in directives effectively, and how to create your own custom directives.

## What are Directives?

Directives are one of the core building blocks in Angular. They are classes with a `@Directive` decorator that can modify the structure or behavior of DOM elements. Angular provides several built-in directives and allows you to create custom ones.

## Types of Directives

Angular has three types of directives:

1. **Component Directives**: These are directives with templates. Components are technically directives with templates (the most common type).
2. **Structural Directives**: These change the DOM layout by adding, removing, or manipulating elements.
3. **Attribute Directives**: These change the appearance or behavior of an element.

## Built-in Directives

### Attribute Directives

#### NgClass

`NgClass` lets you dynamically set CSS classes:

```html
<!-- With strings -->
<div [ngClass]="'bold-text highlighted'">Text with classes</div>

<!-- With array -->
<div [ngClass]="['bold-text', 'highlighted']">Text with classes</div>

<!-- With object (most common) -->
<div [ngClass]="{'bold-text': isBold, 'highlighted': isHighlighted}">
  Conditionally styled text
</div>

<!-- With component method -->
<div [ngClass]="getClasses()">Dynamic classes</div>
```

Component:

```typescript
export class AppComponent {
  isBold = true;
  isHighlighted = false;
  
  getClasses() {
    return {
      'bold-text': this.isBold,
      'highlighted': this.isHighlighted,
      'error-text': this.hasError
    };
  }
}
```

#### NgStyle

`NgStyle` lets you dynamically set inline styles:

```html
<!-- With object literal -->
<div [ngStyle]="{'color': textColor, 'font-size.px': fontSize}">
  Styled text
</div>

<!-- With component method -->
<div [ngStyle]="getStyles()">Dynamic styles</div>
```

Component:

```typescript
export class AppComponent {
  textColor = 'blue';
  fontSize = 16;
  
  getStyles() {
    return {
      'color': this.textColor,
      'font-size.px': this.fontSize,
      'font-weight': this.isBold ? 'bold' : 'normal'
    };
  }
}
```

#### NgModel

`NgModel` provides two-way data binding. Make sure to import `FormsModule` to use it:

```html
<input [(ngModel)]="name">
<p>Hello, {{name}}!</p>
```

### Structural Directives

Structural directives are prefixed with an asterisk (*) and change the DOM structure.

#### NgIf

`NgIf` conditionally adds or removes elements:

```html
<div *ngIf="isLoggedIn">Welcome, {{username}}!</div>

<!-- With else -->
<div *ngIf="isLoggedIn; else loginBlock">Welcome, {{username}}!</div>
<ng-template #loginBlock>Please log in to continue.</ng-template>

<!-- With then and else -->
<div *ngIf="isLoggedIn; then loggedInBlock else loginBlock"></div>
<ng-template #loggedInBlock>Welcome, {{username}}!</ng-template>
<ng-template #loginBlock>Please log in to continue.</ng-template>
```

#### NgFor

`NgFor` repeats a template for each item in a collection:

```html
<ul>
  <li *ngFor="let item of items">{{item.name}}</li>
</ul>

<!-- With index -->
<ul>
  <li *ngFor="let item of items; let i = index">{{i + 1}}. {{item.name}}</li>
</ul>

<!-- With additional variables -->
<ul>
  <li *ngFor="let item of items; let i = index; let isFirst = first; let isLast = last; let isEven = even; let isOdd = odd"
      [class.first]="isFirst"
      [class.last]="isLast"
      [class.even]="isEven"
      [class.odd]="isOdd">
    {{i + 1}}. {{item.name}}
  </li>
</ul>

<!-- With trackBy -->
<ul>
  <li *ngFor="let item of items; trackBy: trackByFn">{{item.name}}</li>
</ul>
```

Component:

```typescript
export class AppComponent {
  items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ];
  
  trackByFn(index: number, item: any) {
    return item.id; // use a unique identifier
  }
}
```

#### NgSwitch

`NgSwitch` conditionally shows one of multiple views:

```html
<div [ngSwitch]="userRole">
  <div *ngSwitchCase="'admin'">Admin Panel</div>
  <div *ngSwitchCase="'editor'">Editor Tools</div>
  <div *ngSwitchCase="'user'">User Dashboard</div>
  <div *ngSwitchDefault>Unknown Role</div>
</div>
```

## The Microsyntax for Structural Directives

The asterisk (*) syntax is actually shorthand for a more verbose template syntax:

```html
<!-- This: -->
<div *ngIf="isActive">Content</div>

<!-- Expands to this: -->
<ng-template [ngIf]="isActive">
  <div>Content</div>
</ng-template>

<!-- And this: -->
<div *ngFor="let item of items">{{item.name}}</div>

<!-- Expands to this: -->
<ng-template ngFor let-item [ngForOf]="items">
  <div>{{item.name}}</div>
</ng-template>
```

## Creating Custom Directives

You can create your own directives to extend HTML with custom behaviors.

### Creating an Attribute Directive

Let's create a simple highlight directive:

```bash
ng generate directive highlight
# or shorter
ng g d highlight
```

```typescript
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') highlightColor: string = 'yellow';
  
  constructor(private el: ElementRef) { }
  
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'yellow');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  
  private highlight(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
```

Using the directive:

```html
<p appHighlight="lightblue">Highlight me in light blue on hover</p>
<p appHighlight>Highlight me in yellow on hover</p>
```

### Creating a Structural Directive

Let's create a custom `appUnless` directive that does the opposite of `*ngIf`:

```bash
ng generate directive unless
```

```typescript
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  private hasView = false;
  
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }
  
  @Input() set appUnless(condition: boolean) {
    if (!condition && !this.hasView) {
      // If condition is falsy and view hasn't been created yet,
      // create the view
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      // If condition is truthy and view exists,
      // clear the view
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
```

Using the directive:

```html
<p *appUnless="isLoggedIn">Please log in.</p>
```

## Directive Communication

Directives can communicate with their host elements and other directives:

### Communicating with the Host Element

Use `@HostBinding` to bind to host element properties:

```typescript
import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggleClass]'
})
export class ToggleClassDirective {
  @HostBinding('class.active') isActive = false;
  
  @HostListener('click') toggleClass() {
    this.isActive = !this.isActive;
  }
}
```

Using it:

```html
<div appToggleClass>Click me to toggle active class</div>
```

### Directive Inputs and Outputs

Directives can have inputs and outputs just like components:

```typescript
import { Directive, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appConfirmClick]'
})
export class ConfirmClickDirective {
  @Input('appConfirmClick') confirmMessage: string = 'Are you sure?';
  @Output() confirmed = new EventEmitter<void>();
  
  @HostListener('click', ['$event']) onClick(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    
    if (window.confirm(this.confirmMessage)) {
      this.confirmed.emit();
    }
  }
}
```

Using it:

```html
<button 
  [appConfirmClick]="'Are you sure you want to delete this item?'"
  (confirmed)="deleteItem()">
  Delete
</button>
```

## Advanced Directive Features

### Renderer2 for DOM Manipulation

Instead of manipulating the DOM directly, use `Renderer2` which is platform-independent:

```typescript
import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'blue';
  
  constructor(private el: ElementRef, private renderer: Renderer2) { }
  
  ngOnInit() {
    this.renderer.setStyle(
      this.el.nativeElement, 
      'background-color', 
      this.defaultColor
    );
  }
  
  @HostListener('mouseenter') mouseenter() {
    this.renderer.setStyle(
      this.el.nativeElement, 
      'background-color', 
      this.highlightColor
    );
  }
  
  @HostListener('mouseleave') mouseleave() {
    this.renderer.setStyle(
      this.el.nativeElement, 
      'background-color', 
      this.defaultColor
    );
  }
}
```

### Directive Composition API

Angular allows you to combine multiple directives with the `hostDirectives` option (introduced in Angular 15+):

```typescript
@Directive({
  selector: '[appComposedDirective]',
  standalone: true,
  hostDirectives: [
    HighlightDirective,
    {
      directive: ConfirmClickDirective,
      inputs: ['confirmMessage: message'],
      outputs: ['confirmed: onConfirm']
    }
  ]
})
export class ComposedDirective { }
```

## Project: Custom Directive Library

In this project, we'll create a library of useful custom directives:

1. Create a new Angular application
2. Create multiple custom directives
3. Implement both attribute and structural directives
4. Create a demonstration page showing all directives in action

### Step 1: Create a new Angular application

```bash
ng new directive-library
cd directive-library
```

### Step 2: Generate the directives

```bash
ng g d directives/tooltip
ng g d directives/debounce-click
ng g d directives/lazy-load-image
ng g d directives/auto-focus
ng g d directives/if-viewport
```

### Step 3: Implement the directives

Create various useful directives with different features.

### Step 4: Create a demo page

Create components to demonstrate each directive in action.

## Exercises

1. Create a custom structural directive `*appRepeat` that repeats content a specified number of times
2. Create a directive that changes text color based on value (green for positive numbers, red for negative)
3. Create a directive that implements drag-and-drop functionality on an element
4. Create a directive that validates form input and adds visual feedback
5. Implement a directive that creates a responsive grid layout based on the viewport size

## Additional Resources

- [Angular Directive Documentation](https://angular.io/guide/built-in-directives)
- [Angular Attribute Directives](https://angular.io/guide/attribute-directives)
- [Angular Structural Directives](https://angular.io/guide/structural-directives)
- [Renderer2 Documentation](https://angular.io/api/core/Renderer2)

## Next Steps

In the next chapter, we'll explore Angular Pipes, which provide a way to transform and format data in your templates.
