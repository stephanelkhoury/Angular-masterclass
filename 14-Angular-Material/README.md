# Chapter 14: Angular Material

## Overview

Angular Material is a UI component library that implements Google's Material Design specifications for Angular applications. It provides a set of high-quality, customizable, accessible UI components that can significantly speed up development while ensuring a consistent and modern look and feel.

In this chapter, you'll learn:

- What is Angular Material and why use it
- How to set up Angular Material in an Angular application
- Core Angular Material components and how to use them
- Theming and customizing Angular Material
- Best practices for creating professional UIs with Angular Material
- Building responsive layouts using Angular Flex Layout

## What is Angular Material?

Angular Material is the official Material Design implementation for Angular applications. Material Design is a design language developed by Google that uses grid-based layouts, responsive animations, and lighting and shadow effects to create a visual hierarchy that mimics the physical world.

### Benefits of Angular Material:

1. **Consistent Design Language**: Components follow the same design principles, creating a unified user experience
2. **Accessibility**: Built with a11y in mind, ensuring your application works for all users
3. **Mobile-First**: Components work seamlessly across devices
4. **Comprehensive**: Provides solutions for most common UI requirements
5. **Official Support**: Maintained by the Angular team
6. **Active Development**: Regular updates with new features and improvements

## Setting Up Angular Material

Adding Angular Material to your project is straightforward using the Angular CLI:

```bash
ng add @angular/material
```

This command will:
- Install Angular Material, Component Dev Kit (CDK) and Angular Animations
- Add project dependencies
- Add default theme (or configure custom theme)
- Add typography styles
- Add browser animations

During installation, you'll be prompted to:
- Choose a theme (Indigo/Pink, Deep Purple/Amber, Pink/Blue Grey, or Custom)
- Set up global typography styles
- Set up browser animations

## Key Angular Material Components

Angular Material provides over 30 UI components across different categories:

### Form Controls
- `mat-form-field`: Container for form controls
- `mat-input`: Text input fields
- `mat-select`: Dropdown selection
- `mat-checkbox`: Checkbox controls
- `mat-radio-button`: Radio button controls
- `mat-slide-toggle`: On/off switches
- `mat-slider`: Range sliders
- `mat-datepicker`: Date selection

### Navigation
- `mat-menu`: Popup menus
- `mat-sidenav`: Side navigation drawers
- `mat-toolbar`: Header/footer bars
- `mat-tabs`: Tabbed navigation
- `mat-stepper`: Multi-step workflows

### Layout
- `mat-card`: Content containers
- `mat-expansion-panel`: Expandable/collapsible panels
- `mat-grid-list`: Grid layout
- `mat-divider`: Dividing lines
- `mat-list`: Styled lists

### Buttons & Indicators
- `mat-button`: Various button styles
- `mat-icon`: Material icons
- `mat-progress-spinner`: Loading indicators
- `mat-progress-bar`: Progress indicators
- `mat-badge`: Notification badges
- `mat-chips`: Compact elements

### Popups & Modals
- `mat-dialog`: Modal dialogs
- `mat-snackbar`: Brief notifications
- `mat-tooltip`: Context information

### Data Table
- `mat-table`: Data tables with sorting, filtering, and pagination

## Module Structure

Angular Material follows a modular architecture. Each component has its own module that you need to import:

```typescript
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule
  ]
})
export class MyModule { }
```

## Theming Angular Material

Angular Material supports customizable theming based on the Material Design color system. A theme consists of:

1. **Primary palette**: Main color used throughout your application
2. **Accent palette**: Used for floating action buttons and interactive elements
3. **Warn palette**: Used for error states
4. **Foreground palette**: Text and icons
5. **Background palette**: Background colors

### Creating a Custom Theme

You can define a custom theme in your project's styles.scss file:

```scss
@use '@angular/material' as mat;

// Define your custom palettes
$my-primary: mat.define-palette(mat.$indigo-palette, 500);
$my-accent: mat.define-palette(mat.$pink-palette, A200, A100, A400);
$my-warn: mat.define-palette(mat.$red-palette);

// Create your theme
$my-theme: mat.define-light-theme((
  color: (
    primary: $my-primary,
    accent: $my-accent,
    warn: $my-warn,
  ),
  typography: mat.define-typography-config(),
  density: 0,
));

// Apply the theme to all components
@include mat.all-component-themes($my-theme);

// For dark theme (optional)
.dark-theme {
  $dark-theme: mat.define-dark-theme((
    color: (
      primary: $my-primary,
      accent: $my-accent,
      warn: $my-warn,
    )
  ));
  
  @include mat.all-component-colors($dark-theme);
}
```

## Angular Flex Layout

While Angular Material provides UI components, Angular Flex Layout works alongside it to help with responsive layouts:

```bash
npm install @angular/flex-layout
```

```typescript
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [FlexLayoutModule]
})
export class MyModule { }
```

### Basic Usage Examples

```html
<!-- Stack elements vertically -->
<div fxLayout="column">
  <!-- Stack elements horizontally with space between -->
  <div fxLayout="row" fxLayoutAlign="space-between center">
    <div>Left content</div>
    <div>Right content</div>
  </div>
  
  <!-- Responsive layout that changes based on screen size -->
  <div fxLayout="row" fxLayout.xs="column">
    <div fxFlex="50%">Half width on large screens, full width on small screens</div>
    <div fxFlex="50%">Half width on large screens, full width on small screens</div>
  </div>
</div>
```

## Best Practices

1. **Create a Material Module**:
   - Centralize your Material imports in a dedicated module
   - Re-export all required modules

2. **Consistent Component Usage**:
   - Use Material components consistently throughout your app
   - Don't mix Material with other design systems unless necessary

3. **Custom Component Extensions**:
   - Extend Material components for your specific needs rather than creating from scratch

4. **Theme Variables**:
   - Use theme variables in your custom components to ensure they respect the theme

5. **Typography**:
   - Use Angular Material's typography system for consistent text styling

6. **Responsive Design**:
   - Test on multiple device sizes
   - Use breakpoints and Angular Flex Layout for responsive behavior

7. **Accessibility**:
   - Use semantic HTML within Material components
   - Test with screen readers
   - Ensure keyboard navigation works

## Common Challenges and Solutions

### 1. Form Field Appearance

Material offers different form field appearances: `legacy`, `standard`, `fill`, and `outline`:

```html
<mat-form-field appearance="outline">
  <mat-label>Email</mat-label>
  <input matInput type="email">
</mat-form-field>
```

### 2. Dialog Sizing and Responsiveness

```typescript
this.dialog.open(MyDialogComponent, {
  width: '90%',
  maxWidth: '600px',
  data: { /* your data */ }
});
```

### 3. Table Customization

```typescript
// Custom sorting
const sortingDataAccessor = (item: MyData, property: string) => {
  switch(property) {
    case 'complexProperty': return item.complex.nestedValue;
    default: return item[property];
  }
};
```

### 4. Theme Color Access in Components

```typescript
constructor(private _theme: ThemePalette) {
  // Now you can access theme colors programmatically
}
```

## Summary

Angular Material is a powerful UI library that implements Google's Material Design for Angular applications. It provides a comprehensive set of components that work well together, are accessible, and can be customized to match your brand. By following the best practices outlined in this chapter, you can create professional, consistent, and user-friendly interfaces for your Angular applications.

In the code examples section, we'll build a complete dashboard application using Angular Material components to demonstrate these concepts in practice.
