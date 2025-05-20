# Chapter 2: TypeScript Essentials for Angular

## Overview

This chapter covers essential TypeScript concepts that form the foundation of Angular development. TypeScript is a superset of JavaScript that adds static typing and other features that make it ideal for large-scale applications. Understanding TypeScript is crucial for effective Angular development.

## Introduction to TypeScript

TypeScript is a strongly typed programming language that builds on JavaScript. Key benefits include:

- **Static typing**: Catch errors at compile time rather than runtime
- **Enhanced IDE support**: Better autocomplete, navigation, and refactoring
- **Future JavaScript features**: Access to features before they're available in browsers
- **Type annotations**: Clearly express the intended use of variables and functions
- **Object-oriented features**: Classes, interfaces, generics, etc.

## Setting Up TypeScript

1. Install TypeScript globally:

```bash
npm install -g typescript
```

2. Create a TypeScript configuration file (`tsconfig.json`):

```bash
tsc --init
```

3. Compile TypeScript files:

```bash
tsc filename.ts
```

## Basic Types in TypeScript

TypeScript provides several built-in types:

### Primitive Types

```typescript
// Boolean
let isDone: boolean = false;

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;

// String
let color: string = "blue";
let greeting: string = `Hello, my name is ${name}`;

// Null and Undefined
let n: null = null;
let u: undefined = undefined;

// Symbol
let sym: symbol = Symbol("key");
```

### Arrays

```typescript
let list: number[] = [1, 2, 3];
let fruits: Array<string> = ['apple', 'banana', 'orange'];
```

### Tuples

```typescript
// Tuple: fixed number of elements with specific types
let person: [string, number] = ['John', 25];
```

### Enums

```typescript
enum Color {Red, Green, Blue}
let c: Color = Color.Green; // 1

// You can also set custom values
enum Status {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Pending = 'PENDING'
}
```

### Any, Unknown, and Void

```typescript
// Any - dynamic type (try to avoid)
let notSure: any = 4;
notSure = "maybe a string";
notSure = false;

// Unknown - similar to any but safer
let unknownValue: unknown = 4;
// Need type checking before using unknown values
if (typeof unknownValue === 'string') {
  console.log(unknownValue.toUpperCase());
}

// Void - absence of any type (common for functions with no return)
function logMessage(message: string): void {
  console.log(message);
}
```

### Never and Object

```typescript
// Never - values that never occur (function that always throws or never returns)
function error(message: string): never {
  throw new Error(message);
}

// Object - non-primitive type
let obj: object = { key: 'value' };
```

## Interfaces

Interfaces define contracts in your code and provide explicit names for type checking:

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  age?: number; // Optional property
  readonly role: string; // Can't be changed after initialization
}

function createUser(user: User): User {
  return user;
}

const newUser = createUser({
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
  role: 'user'
});
```

## Classes

Classes in TypeScript provide a way to define object blueprints with properties and methods:

```typescript
class Person {
  // Properties with access modifiers
  private id: number;
  protected name: string;
  public email: string;

  // Constructor
  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  // Methods
  greet(): string {
    return `Hello, my name is ${this.name}`;
  }

  // Getter
  get personId(): number {
    return this.id;
  }

  // Setter
  set personName(name: string) {
    this.name = name;
  }
}

// Inheritance
class Employee extends Person {
  private department: string;

  constructor(id: number, name: string, email: string, department: string) {
    super(id, name, email); // Call the parent constructor
    this.department = department;
  }

  // Method override
  greet(): string {
    return `Hello, I'm ${this.name} from ${this.department} department`;
  }
}
```

## Property Shorthand

TypeScript allows for a more concise class definition using parameter properties:

```typescript
class Person {
  constructor(
    private id: number,
    protected name: string,
    public email: string
  ) {}

  greet(): string {
    return `Hello, my name is ${this.name}`;
  }
}
```

## Generics

Generics provide a way to make components work with any type rather than a single one:

```typescript
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("myString");
// or let the compiler figure out the type
let output2 = identity(42);

// Generic interface
interface GenericResponse<T> {
  data: T;
  status: number;
  message: string;
}

// Generic class
class GenericRepository<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

const userRepo = new GenericRepository<User>();
userRepo.add(newUser);
```

## Decorators

Decorators are a special kind of declaration attached to classes, methods, properties, or parameters. They're extensively used in Angular:

```typescript
// A simple decorator factory
function Logger(prefix: string) {
  return function(target: any) {
    console.log(`${prefix}: ${target.name}`);
  };
}

@Logger('LOGGING')
class MyClass {
  // ...
}
```

Angular uses several types of decorators:

- **Class decorators**: `@Component`, `@NgModule`, `@Injectable`
- **Property decorators**: `@Input`, `@Output`
- **Method decorators**: `@HostListener`
- **Parameter decorators**: `@Inject`

## Type Assertions

Type assertions tell the compiler to treat a value as a specific type:

```typescript
let someValue: unknown = "this is a string";

// Using angle-bracket syntax
let strLength1: number = (<string>someValue).length;

// Using as syntax (preferred in JSX/TSX files)
let strLength2: number = (someValue as string).length;
```

## Union and Intersection Types

```typescript
// Union Types: value can be one of several types
function formatId(id: string | number): string {
  return typeof id === 'string' ? id : id.toString();
}

// Intersection Types: combine multiple types into one
interface BusinessPartner {
  name: string;
  credit: number;
}

interface Contact {
  email: string;
  phone: string;
}

type Customer = BusinessPartner & Contact;

const customer: Customer = {
  name: 'ABC Inc.',
  credit: 1000000,
  email: 'info@abc.com',
  phone: '123-456-7890'
};
```

## Type Guards

Type guards allow you to narrow down the type of an object within a conditional block:

```typescript
// Using typeof
function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

// Using instanceof
class Bird {
  fly() {
    console.log('flying...');
  }
}

class Fish {
  swim() {
    console.log('swimming...');
  }
}

function move(pet: Bird | Fish) {
  if (pet instanceof Bird) {
    pet.fly();
  } else {
    pet.swim();
  }
}

// User-defined type guards
function isFish(pet: Bird | Fish): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
```

## Modules

TypeScript uses modules to organize code and control visibility:

```typescript
// math.ts
export function add(x: number, y: number): number {
  return x + y;
}

export function subtract(x: number, y: number): number {
  return x - y;
}

export const PI = 3.14159;

// app.ts
import { add, subtract, PI } from './math';
console.log(add(2, 3));

// Import everything
import * as math from './math';
console.log(math.PI);

// Default exports
// calc.ts
export default class Calculator {
  add(x: number, y: number): number {
    return x + y;
  }
}

// Import default export
import Calc from './calc';
const calc = new Calc();
```

## Project: TypeScript Mini App

In this project, we'll create a simple TypeScript application that demonstrates core TypeScript features:

1. Setup a TypeScript project
2. Create interfaces and classes
3. Implement generics
4. Use modules to organize code

### Step 1: Initialize Project

```bash
mkdir ts-essentials
cd ts-essentials
npm init -y
npm install typescript --save-dev
npx tsc --init
```

### Step 2: Create Interfaces and Classes

Create model interfaces and implementations that represent a simple task management system.

### Step 3: Implement Generics

Create generic data service that can work with different model types.

### Step 4: Use Modules

Organize the code into proper modules.

## Exercises

1. Create an interface for a `Product` with properties for id, name, price, and optional description
2. Create a class that implements this interface
3. Create a generic `DataService<T>` class with methods to add, remove, and list items
4. Create an implementation of your service for the Product class
5. Use modules to separate your models, services, and main application logic

## Additional Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [Angular's TypeScript Configuration Guide](https://angular.io/guide/typescript-configuration)

## Next Steps

In the next chapter, we'll explore Angular components - the fundamental building blocks of Angular applications. You'll learn how to create, customize, and manage components effectively.
