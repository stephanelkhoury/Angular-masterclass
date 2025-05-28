# Chapter 1: Introduction to Angular

## Overview

This chapter introduces the fundamentals of Angular, its architecture, and guides you through setting up your development environment. By the end of this chapter, you'll have a good understanding of what Angular is, why it's powerful, and have your first Angular application running.

## What is Angular?

Angular is a platform and framework for building client applications in HTML and TypeScript. It is developed and maintained by Google and provides a comprehensive solution for building complex web applications. Some key features of Angular include:

- **Component-based architecture**: Angular applications are built using components, which are self-contained pieces of code that handle one specific part of the application.
- **TypeScript support**: Angular is built with TypeScript, which adds static typing to JavaScript, making your code more robust.
- **Comprehensive tooling**: Angular comes with a powerful CLI that provides a wealth of tools for creating, managing and building applications.
- **Declarative templates**: Angular uses declarative HTML templates, making it easier to understand and manipulate the DOM.
- **Dependency Injection**: A powerful DI system that makes components more testable and maintainable.

## Angular Versions and History

Angular has evolved significantly since its first release:

- **AngularJS (Angular 1.x)**: The original framework released in 2010
- **Angular 2**: Complete rewrite released in 2016, introducing components, TypeScript, and more
- **Angular 4+**: Subsequent versions with improvements (Note: Angular 3 was skipped to align with versioning)
- **Current Version**: Angular follows semantic versioning with major releases approximately every 6 months

## Angular Architecture

Angular applications are modular and follow a hierarchical structure:

1. **Modules**: Angular apps are organized into NgModules, which are containers for a cohesive block of code
2. **Components**: The basic building blocks of Angular applications
3. **Templates**: HTML with Angular-specific syntax for rendering views
4. **Metadata**: Additional information Angular needs, usually provided via decorators
5. **Services**: Logic not associated with specific views, injectable across components
6. **Directives**: Instructions in the DOM that tell Angular how to render templates

## Setting up Your Development Environment

### Prerequisites

- **Node.js and npm**: Angular requires an active LTS or maintenance LTS version of Node.js
- **Code Editor**: We recommend Visual Studio Code with Angular extensions

### Installation Steps

1. Install Node.js and npm (if not already installed)
2. Install the Angular CLI globally:

```bash
npm install -g @angular/cli
```

3. Verify the installation:

```bash
ng version
```

### Creating Your First Angular Application

1. Create a new Angular project:

```bash
ng new my-first-angular-app
```

2. Navigate to the project directory:

```bash
cd my-first-angular-app
```

3. Run the development server:

```bash
ng serve
```

4. Open your browser to `http://localhost:4200/`

## Project Structure

Let's understand the basic structure of an Angular project:

- `src/`: Contains the application source code
  - `app/`: Contains components, services, modules, etc.
  - `assets/`: Contains static files like images
  - `environments/`: Contains environment-specific configuration
- `angular.json`: Angular CLI configuration
- `package.json`: npm dependencies and scripts
- `tsconfig.json`: TypeScript compiler configuration

## Project: Hello Angular

In this simple project, we'll:

1. Create a new Angular application
2. Modify the default component
3. Add a new component
4. Use basic data binding

### Step 1: Create a new Angular application

Use the Angular CLI to create a new application:

```bash
ng new hello-angular --minimal
cd hello-angular
```

### Step 2: Modify the default component

Open `src/app/app.component.ts` and update it to display a welcome message.

### Step 3: Add a new component

Create a new component using the CLI:

```bash
ng generate component greeting
```

### Step 4: Use basic data binding

Implement a simple form of data binding in your components.

## Exercises

1. Create a new Angular application using the CLI
2. Modify the app component to display your name and a short bio
3. Create a new component called "skills" that lists your top 3 skills
4. Use the skills component within the app component

## Additional Resources

- [Official Angular Documentation](https://angular.io/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Angular CLI Reference](https://angular.io/cli)
- [Angular GitHub Repository](https://github.com/angular/angular)

## Next Steps

In the next chapter, we'll dive deeper into TypeScript, understanding how its features enhance Angular development and provide better tooling for building robust applications.
