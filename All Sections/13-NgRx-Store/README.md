# Chapter 13: NgRx Store Deep Dive

## Overview

NgRx is a framework for building reactive applications in Angular. It provides state management using the Redux pattern, which helps manage application state in a predictable way. This chapter takes a deep dive into NgRx, exploring its core concepts, benefits, and practical implementation.

In this chapter, you'll learn:

- Core principles of the Redux pattern
- Key components of NgRx (Store, Actions, Reducers, Selectors, Effects)
- Setting up NgRx in an Angular application
- Managing complex state with NgRx
- Advanced patterns and best practices
- When (and when not) to use NgRx

## Redux Pattern and Core Principles

The Redux pattern follows three key principles:

1. **Single Source of Truth**: The entire application state is stored in a single JavaScript object called the store.
2. **State is Read-Only**: The only way to modify state is by dispatching actions.
3. **Changes are Made with Pure Functions**: Reducers are pure functions that take the previous state and an action to return a new state.

```typescript
// Visualization of Redux pattern flow
// Action -> Reducer -> Store -> View -> Action...
```

## NgRx Core Building Blocks

### 1. Store

The Store is a centralized, immutable data store for the entire application:

```typescript
// Accessing store data
this.store.select(selectFeature).subscribe(data => {
  console.log('Feature data:', data);
});
```

### 2. Actions

Actions describe unique events that happen throughout your application:

```typescript
// Action definition
export const addTodo = createAction(
  '[Todo Page] Add Todo',
  props<{ text: string }>()
);

// Dispatching an action
this.store.dispatch(addTodo({ text: 'Learn NgRx' }));
```

### 3. Reducers

Reducers handle state transitions based on dispatched actions:

```typescript
export const initialState: TodoState = {
  todos: [],
  loading: false
};

export const todoReducer = createReducer(
  initialState,
  on(addTodo, (state, { text }) => ({
    ...state,
    todos: [...state.todos, { id: Date.now(), text, completed: false }]
  })),
  on(toggleTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  }))
);
```

### 4. Selectors

Selectors are pure functions used for obtaining slices of store state:

```typescript
export const selectTodoState = (state: AppState) => state.todos;
export const selectAllTodos = createSelector(
  selectTodoState,
  (state: TodoState) => state.todos
);
export const selectCompletedTodos = createSelector(
  selectAllTodos,
  todos => todos.filter(todo => todo.completed)
);
```

### 5. Effects

Effects handle side effects like API calls and isolate them from components:

```typescript
@Injectable()
export class TodoEffects {
  loadTodos$ = createEffect(() => this.actions$.pipe(
    ofType(loadTodos),
    mergeMap(() => this.todoService.getTodos()
      .pipe(
        map(todos => loadTodosSuccess({ todos })),
        catchError(error => of(loadTodosFailure({ error })))
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private todoService: TodoService
  ) {}
}
```

## Setting Up NgRx in an Angular Application

### Installation

```bash
# Install the core NgRx packages
npm install @ngrx/store @ngrx/effects @ngrx/entity @ngrx/store-devtools --save
```

### Store Configuration

```typescript
// app.module.ts
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './reducers';
import { TodoEffects } from './effects/todo.effects';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([TodoEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, 
    }),
  ],
})
export class AppModule {}
```

## Feature State Management

NgRx supports feature states for modular organization:

```typescript
// Feature module
@NgModule({
  imports: [
    StoreModule.forFeature('todos', todoReducer),
    EffectsModule.forFeature([TodoEffects])
  ],
})
export class TodoModule {}
```

## Entity State Adapter

NgRx provides Entity adapter for managing collections of records:

```typescript
export interface TodoState extends EntityState<Todo> {
  selectedTodoId: string | null;
  loading: boolean;
  error: string | null;
}

export const adapter = createEntityAdapter<Todo>({
  selectId: (todo: Todo) => todo.id,
  sortComparer: sortByName,
});

export const initialState: TodoState = adapter.getInitialState({
  selectedTodoId: null,
  loading: false,
  error: null
});

export const todoReducer = createReducer(
  initialState,
  on(TodoActions.addTodoSuccess, (state, { todo }) => 
    adapter.addOne(todo, state)
  ),
  on(TodoActions.loadTodosSuccess, (state, { todos }) => 
    adapter.setAll(todos, state)
  )
);

// Create selectors using the adapter's getSelectors
export const {
  selectAll: selectAllTodos,
  selectEntities: selectTodoEntities,
  selectIds: selectTodoIds,
  selectTotal: selectTotalTodos
} = adapter.getSelectors();
```

## Advanced NgRx Patterns

### 1. Meta-Reducers

Meta-reducers are higher-order reducers that can be used for cross-cutting concerns:

```typescript
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state, action) => {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger]
  : [];
```

### 2. Router Store

Integrating NgRx with the Angular Router:

```typescript
import { StoreRouterConnectingModule, RouterState } from '@ngrx/router-store';

@NgModule({
  imports: [
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal
    })
  ]
})
export class AppModule {}
```

### 3. State Composition

Breaking down complex state with feature states:

```typescript
export interface AppState {
  router: RouterReducerState<any>;
  auth: AuthState;
  todos: TodoState;
  users: UserState;
}
```

## When to Use NgRx

NgRx is beneficial for:
- Large applications with complex state
- Multiple teams working on the same application
- When you need strong guarantees about how state is updated
- When you need to track history, implement undo/redo, etc.

Consider simpler alternatives (services with RxJS, Component Store) for:
- Small to medium-sized applications
- Applications with simple state management needs
- Applications where a single team maintains the codebase

## Best Practices

1. **Action Hygiene**: Use descriptive, event-based action names
2. **Keep Components Presentational**: Dispatch actions, select state, but defer logic to reducers and effects
3. **Normalize State Shape**: Avoid deeply nested state structures
4. **Immutability**: Always return new state objects from reducers
5. **Selectors for Derived Data**: Use memoized selectors for computed values
6. **Testing**: Test actions, reducers, selectors, and effects in isolation

## Summary

NgRx provides a powerful state management solution based on the Redux pattern. By centralizing state and making state changes predictable, it helps manage complex application state effectively. While there's a learning curve and some boilerplate code required, the benefits of a structured approach to state management become increasingly valuable as your application grows in complexity.

In the code examples section, we'll build a complete task management application using NgRx to demonstrate these concepts in action.
