# NgRx Task Manager Example

This example application demonstrates NgRx state management in a task management application. It showcases the core concepts of NgRx including Store, Actions, Reducers, Selectors, and Effects.

## Features

- Task management (CRUD operations)
- Filtering tasks (all, active, completed)
- Reactive UI with NgRx
- LocalStorage persistence
- Entity pattern for collection management

## NgRx Concepts Demonstrated

1. **Store**: Centralized state management for the entire application
2. **Actions**: Event dispatching for state changes
3. **Reducers**: Pure functions to handle state transitions
4. **Selectors**: Deriving state with memoized functions
5. **Effects**: Handling side effects (API calls, localStorage)
6. **Entity Adapter**: Managing collections of records
7. **Meta-Reducers**: Higher-order reducers for cross-cutting concerns

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm start
```

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── app.component.ts             # Root component
│   │   ├── app.module.ts                # NgRx setup
│   │   ├── core/
│   │   │   ├── services/
│   │   │   │   └── task.service.ts      # API service
│   │   │   └── state/
│   │   │       ├── actions/
│   │   │       │   └── task.actions.ts  # Action definitions
│   │   │       ├── effects/
│   │   │       │   └── task.effects.ts  # Side effects
│   │   │       ├── reducers/
│   │   │       │   ├── index.ts         # Root reducer
│   │   │       │   └── task.reducer.ts  # Task reducer
│   │   │       └── selectors/
│   │   │           └── task.selectors.ts # State queries
│   │   ├── features/
│   │   │   └── tasks/                   # Feature components
│   │   └── models/
│   │       ├── task.model.ts            # Data models
│   │       └── task-state.model.ts      # State interfaces
│   └── environments/
├── angular.json
└── package.json
```

## Key Concepts

### Store Setup

The application uses the NgRx Store to manage state centrally:

```typescript
@NgModule({
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([TaskEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ]
})
export class AppModule { }
```

### Actions

Actions describe unique events:

```typescript
export const addTask = createAction(
  '[Tasks] Add Task',
  props<{ task: Omit<Task, 'id' | 'createdAt'> }>()
);
```

### Entity Adapter

The application uses EntityAdapter to manage the task collection:

```typescript
export const adapter: EntityAdapter<Task> = createEntityAdapter<Task>({
  selectId: (task: Task) => task.id,
  sortComparer: (a: Task, b: Task) => { /* sorting logic */ }
});
```

### Component Integration

Components interact with the store using selectors and dispatching actions:

```typescript
@Component({
  selector: 'app-root',
  template: `...`
})
export class AppComponent implements OnInit {
  tasks$ = this.store.select(selectAllTasks);
  
  constructor(private store: Store<AppState>) {}
  
  ngOnInit() {
    this.store.dispatch(loadTasks());
  }
}
```
