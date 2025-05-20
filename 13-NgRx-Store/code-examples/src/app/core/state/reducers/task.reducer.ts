import { createReducer, on } from '@ngrx/store';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { Task } from '../../../models/task.model';
import { TaskState } from '../../../models/task-state.model';
import * as TaskActions from '../actions/task.actions';

// Create the entity adapter
export const adapter: EntityAdapter<Task> = createEntityAdapter<Task>({
  selectId: (task: Task) => task.id,
  sortComparer: (a: Task, b: Task) => {
    // Sort by completed status first, then by priority, then by date
    if (a.completed !== b.completed) {
      return a.completed ? 1 : -1;
    }
    
    const priorityMap = { high: 0, medium: 1, low: 2 };
    if (priorityMap[a.priority] !== priorityMap[b.priority]) {
      return priorityMap[a.priority] - priorityMap[b.priority];
    }
    
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  },
});

// Initial state
export const initialState: TaskState = adapter.getInitialState({
  selectedTaskId: null,
  loading: false,
  error: null,
  filter: 'all'
});

// Reducer
export const taskReducer = createReducer(
  initialState,
  
  // Load tasks
  on(TaskActions.loadTasks, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  
  on(TaskActions.loadTasksSuccess, (state, { tasks }) => 
    adapter.setAll(tasks, {
      ...state,
      loading: false
    })
  ),
  
  on(TaskActions.loadTasksFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  
  // Add task
  on(TaskActions.addTask, (state) => ({
    ...state,
    loading: true
  })),
  
  on(TaskActions.addTaskSuccess, (state, { task }) => 
    adapter.addOne(task, {
      ...state,
      loading: false
    })
  ),
  
  on(TaskActions.addTaskFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  
  // Update task
  on(TaskActions.updateTask, (state) => ({
    ...state,
    loading: true
  })),
  
  on(TaskActions.updateTaskSuccess, (state, { task }) => 
    adapter.updateOne(
      { id: task.id, changes: task },
      {
        ...state,
        loading: false
      }
    )
  ),
  
  on(TaskActions.updateTaskFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  
  // Delete task
  on(TaskActions.deleteTask, (state) => ({
    ...state,
    loading: true
  })),
  
  on(TaskActions.deleteTaskSuccess, (state, { id }) => 
    adapter.removeOne(id, {
      ...state,
      loading: false,
      // If the selected task is deleted, clear the selection
      selectedTaskId: state.selectedTaskId === id ? null : state.selectedTaskId
    })
  ),
  
  on(TaskActions.deleteTaskFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  
  // Toggle task completion status
  on(TaskActions.toggleTask, (state, { id }) => {
    const task = state.entities[id];
    if (!task) return state;
    
    return adapter.updateOne({
      id,
      changes: {
        completed: !task.completed,
        updatedAt: new Date()
      }
    }, state);
  }),
  
  // Select task
  on(TaskActions.selectTask, (state, { id }) => ({
    ...state,
    selectedTaskId: id
  })),
  
  // Filter tasks
  on(TaskActions.filterTasks, (state, { filter }) => ({
    ...state,
    filter
  }))
);

// Export the entity adapter's selectors
export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();
