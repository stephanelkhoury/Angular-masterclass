# Chapter 6: Angular Pipes

## Overview

This chapter explores Angular Pipes, a powerful feature for transforming and formatting data directly in your templates. You'll learn how to use built-in pipes, chain pipes together, and create your own custom pipes for specialized data transformations. By the end of this chapter, you'll be able to display data in your templates in exactly the format you need.

## What are Pipes?

Pipes are simple functions that accept an input value, transform it, and return the transformed value. They're used in templates to transform data before displaying it. Pipes provide a clean way to format data without modifying the original values in your component.

The syntax for using a pipe is:

```html
{{ value | pipeName:parameter1:parameter2:... }}
```

## Built-in Pipes

Angular provides several built-in pipes for common data transformations:

### DatePipe

Formats dates according to locale rules:

```html
<p>Today is {{ today | date }}</p> <!-- Apr 15, 2023 -->
<p>Today is {{ today | date:'short' }}</p> <!-- 4/15/23, 1:30 PM -->
<p>Today is {{ today | date:'yyyy-MM-dd' }}</p> <!-- 2023-04-15 -->
<p>Today is {{ today | date:'longDate' }}</p> <!-- April 15, 2023 -->
<p>The time is {{ today | date:'shortTime' }}</p> <!-- 1:30 PM -->
```

Component:

```typescript
today = new Date();
```

Available format options include 'short', 'medium', 'long', 'full', 'shortDate', 'mediumDate', 'longDate', 'fullDate', 'shortTime', 'mediumTime', 'longTime', 'fullTime' or a custom format pattern.

### UpperCasePipe and LowerCasePipe

Transform text to uppercase or lowercase:

```html
<p>{{ 'Hello World' | uppercase }}</p> <!-- HELLO WORLD -->
<p>{{ 'Hello World' | lowercase }}</p> <!-- hello world -->
```

### TitleCasePipe

Transforms text to title case:

```html
<p>{{ 'hello world' | titlecase }}</p> <!-- Hello World -->
```

### SlicePipe

Creates a subset of an array or string:

```html
<p>{{ 'Hello World' | slice:0:5 }}</p> <!-- Hello -->
<div *ngFor="let item of items | slice:0:5">{{item}}</div>
```

### DecimalPipe

Formats numbers:

```html
<p>{{ 3.14159 | number }}</p> <!-- 3.142 -->
<p>{{ 3.14159 | number:'1.1-2' }}</p> <!-- 3.1 -->
<p>{{ 3.14159 | number:'3.4-6' }}</p> <!-- 003.1416 -->
```

Format is `{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}`

### CurrencyPipe

Formats currencies:

```html
<p>{{ 99.5 | currency }}</p> <!-- $99.50 -->
<p>{{ 99.5 | currency:'EUR' }}</p> <!-- €99.50 -->
<p>{{ 99.5 | currency:'GBP':'code' }}</p> <!-- GBP 99.50 -->
```

### PercentPipe

Formats percentages:

```html
<p>{{ 0.2567 | percent }}</p> <!-- 26% -->
<p>{{ 0.2567 | percent:'2.2-4' }}</p> <!-- 25.67% -->
```

### JsonPipe

Useful for debugging, it converts a value to a JSON string:

```html
<pre>{{ user | json }}</pre>
```

Component:

```typescript
user = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA'
  }
};
```

### AsyncPipe

Automatically subscribes to Observables and Promises, and unwraps their values:

```html
<div>{{ data$ | async }}</div>

<!-- With ngIf -->
<div *ngIf="data$ | async as data">{{data.name}}</div>
```

Component:

```typescript
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html'
})
export class AsyncPipeComponent {
  data$: Observable<any> = of({ name: 'John', role: 'Admin' }).pipe(
    delay(1000) // Simulate network delay
  );
}
```

### KeyValuePipe

Transforms an object or Map into an array of key-value pairs:

```html
<div *ngFor="let item of object | keyvalue">
  {{item.key}}: {{item.value}}
</div>
```

Component:

```typescript
object = {
  name: 'John',
  age: 30,
  city: 'New York'
};
```

## Chaining Pipes

Pipes can be chained, with the output of one pipe becoming the input for the next:

```html
<p>{{ 'hello world' | uppercase | slice:0:5 }}</p> <!-- HELLO -->

<p>{{ today | date:'fullDate' | uppercase }}</p> <!-- THURSDAY, APRIL 15, 2023 -->

<div>{{ data$ | async | json }}</div>
```

## Pipe Parameters

Many pipes accept parameters to customize their behavior:

```html
<!-- Format currency with symbol, no decimal digits -->
<p>{{ price | currency:'USD':'symbol':'1.0-0' }}</p> <!-- $99 -->

<!-- Format date with custom format -->
<p>{{ today | date:'dd/MM/yyyy HH:mm' }}</p> <!-- 15/04/2023 13:30 -->
```

## Creating Custom Pipes

When built-in pipes don't meet your needs, you can create custom ones:

```bash
ng generate pipe pipes/file-size
# or shorter
ng g p pipes/file-size
```

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {
  transform(size: number, decimals: number = 2): string {
    if (size === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(size) / Math.log(k));

    return parseFloat((size / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
}
```

Using the custom pipe:

```html
<p>File size: {{ 1500 | fileSize }}</p> <!-- File size: 1.46 KB -->
<p>File size: {{ 1500000 | fileSize:0 }}</p> <!-- File size: 1 MB -->
```

## Pure and Impure Pipes

By default, Angular pipes are "pure", meaning they execute only when their input values change. This is a performance optimization.

However, some transformations need to run on every change detection cycle, even when the input hasn't changed. These are "impure" pipes.

### Creating an Impure Pipe

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false // Mark as impure
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], field: string, value: string): any[] {
    if (!items || !value) return items;
    
    return items.filter(item => 
      item[field].toLowerCase().includes(value.toLowerCase())
    );
  }
}
```

Usage:

```html
<input [(ngModel)]="searchTerm">

<ul>
  <li *ngFor="let item of items | filter:'name':searchTerm">
    {{item.name}}
  </li>
</ul>
```

> ⚠️ **Warning**: Impure pipes can have performance implications. Use with caution on large collections!

## Pipes and Change Detection

Pipes work within Angular's change detection system:

- Pure pipes are called only when the input value changes
- Impure pipes are called during every change detection cycle
- Reference types (objects, arrays) need to change their reference to trigger pure pipes

## Common Use Cases for Custom Pipes

Custom pipes are useful for various scenarios:

1. **Filtering collections**: Filter arrays based on certain criteria
2. **Formatting specialized data**: Format data not covered by built-in pipes
3. **Text transformations**: Custom string manipulations
4. **Data calculations**: Perform calculations on the fly

### Example: Truncate Pipe

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number = 25, completeWords: boolean = false, ellipsis: string = '...'): string {
    if (!value) return '';
    
    if (value.length <= limit) return value;

    if (completeWords) {
      limit = value.substring(0, limit).lastIndexOf(' ');
    }
    
    return value.substring(0, limit) + ellipsis;
  }
}
```

Usage:

```html
<p>{{ longText | truncate:20 }}</p>
<p>{{ longText | truncate:20:true }}</p>
```

## Testing Pipes

Pipes are easy to test in isolation:

```typescript
import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {
  let pipe: TruncatePipe;

  beforeEach(() => {
    pipe = new TruncatePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should truncate text to specified limit', () => {
    expect(pipe.transform('This is a long text', 10)).toBe('This is a...');
  });

  it('should not truncate text shorter than the limit', () => {
    expect(pipe.transform('Short', 10)).toBe('Short');
  });

  it('should truncate at word boundary when completeWords is true', () => {
    expect(pipe.transform('This is a long text', 12, true)).toBe('This is a...');
  });

  it('should use custom ellipsis', () => {
    expect(pipe.transform('This is a long text', 10, false, '***')).toBe('This is a***');
  });
});
```

## Project: Data Visualization Dashboard

In this project, we'll create a dashboard that displays various types of data using pipes for formatting:

1. Create a new Angular application
2. Set up a dashboard with multiple data sections
3. Implement and use custom pipes for specialized formatting
4. Use built-in pipes for standard formatting needs

### Step 1: Create a new Angular application

```bash
ng new data-dashboard
cd data-dashboard
```

### Step 2: Generate custom pipes

```bash
ng g p pipes/highlight-search
ng g p pipes/sort-by
ng g p pipes/time-ago
ng g p pipes/file-size
```

### Step 3: Create dashboard components

Create components to display different types of data.

### Step 4: Implement the pipes and use them in templates

Develop custom pipes and integrate them with the components.

## Exercises

1. Create a custom pipe that formats phone numbers (e.g., (123) 456-7890)
2. Create a pipe that converts a camelCase string to kebab-case
3. Create a pipe that formats a duration in seconds to "HH:MM:SS" format
4. Create a pipe that highlights occurrences of a search term within text
5. Create a pipe that sorts an array of objects by a specific property

## Additional Resources

- [Angular Pipes Documentation](https://angular.io/guide/pipes)
- [Built-in Pipes API](https://angular.io/api?type=pipe)
- [DatePipe Format Options](https://angular.io/api/common/DatePipe)
- [Creating Custom Pipes](https://angular.io/guide/creating-pipes)

## Next Steps

In the next chapter, we'll explore Component Communication, learning how to share data between components using various strategies like input/output properties, services, and ViewChild/ContentChild.
