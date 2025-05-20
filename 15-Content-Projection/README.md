# Content Projection in Angular

Content projection is a powerful Angular feature that allows you to insert or "project" content into designated spots of a component from outside that component. It enables building flexible, reusable components that can receive and display external content, enhancing component composition and reusability.

## Core Concepts

### 1. Single-slot Content Projection

The simplest form of content projection uses a single `<ng-content>` element as a placeholder for external content.

```typescript
@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .card {
      border: 1px solid #ccc;
      padding: 16px;
      border-radius: 4px;
    }
  `]
})
export class CardComponent {}
```

**Usage:**

```html
<app-card>
  <h2>Card Title</h2>
  <p>This content will be projected into the card.</p>
</app-card>
```

### 2. Multi-slot Content Projection

Sometimes you need to project content into different parts of a component. Angular allows you to define named slots using the `select` attribute.

```typescript
@Component({
  selector: 'app-fancy-card',
  template: `
    <div class="card">
      <header class="card-header">
        <ng-content select="[card-header]"></ng-content>
      </header>
      <div class="card-body">
        <ng-content select="[card-body]"></ng-content>
      </div>
      <footer class="card-footer">
        <ng-content select="[card-footer]"></ng-content>
      </footer>
    </div>
  `,
  styles: [`
    .card {
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    .card-header {
      background-color: #f0f0f0;
      padding: 8px 16px;
      border-bottom: 1px solid #ccc;
    }
    .card-body {
      padding: 16px;
    }
    .card-footer {
      background-color: #f0f0f0;
      padding: 8px 16px;
      border-top: 1px solid #ccc;
    }
  `]
})
export class FancyCardComponent {}
```

**Usage:**

```html
<app-fancy-card>
  <div card-header>
    <h2>Card Title</h2>
  </div>
  <div card-body>
    <p>This is the main content of the card.</p>
  </div>
  <div card-footer>
    <button>Action Button</button>
  </div>
</app-fancy-card>
```

### 3. Conditional Content Projection

You can conditionally project content using `*ngIf` directive:

```typescript
@Component({
  selector: 'app-message',
  template: `
    <div class="message" [ngClass]="type">
      <ng-content select="[message-icon]" *ngIf="showIcon"></ng-content>
      <div class="message-content">
        <ng-content></ng-content>
      </div>
    </div>
  `
})
export class MessageComponent {
  @Input() type: 'info' | 'success' | 'warning' | 'error' = 'info';
  @Input() showIcon: boolean = true;
}
```

### 4. `ngProjectAs` Attribute

The `ngProjectAs` attribute allows you to project content as if it had a specific selector:

```html
<app-fancy-card>
  <ng-container ngProjectAs="[card-header]">
    <h2>Card Title</h2>
  </ng-container>
  <ng-container ngProjectAs="[card-body]">
    <p>This is the main content of the card.</p>
  </ng-container>
</app-fancy-card>
```

## Benefits of Content Projection

1. **Component Reusability**: Create flexible components that can adapt to different content needs.
2. **Clear Separation of Concerns**: Components define their structure and styling while allowing variable content.
3. **Enhanced Component Composition**: Build complex UIs by composing components together.
4. **Dynamic Content**: Projected content can contain dynamic elements and components.
5. **Cleaner Templates**: Makes templates more readable and maintainable.

## Common Use Cases

- Generic UI components (cards, panels, modals, etc.)
- Layout components (grids, tabs, accordions)
- Specialized wrappers (form fields, drop zones, custom lists)
- Components with consistent structures but varying content

## Best Practices

1. Use single-slot projection for simple content insertion
2. Use multi-slot projection when specific content needs to go in distinct places
3. Provide clear documentation on how your component expects content to be projected
4. Consider fallback content for slots that might be empty
5. Use `ng-content` selectors that are specific and clear in their purpose

## Examples in This Chapter

This chapter includes several practical examples of content projection:

1. Basic single-slot projection
2. Multi-slot projection with named slots
3. Conditional content projection
4. Advanced projection techniques with `ngProjectAs`
5. Practical UI components that leverage content projection
