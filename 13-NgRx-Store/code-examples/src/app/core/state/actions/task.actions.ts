import { createAction, props } from '@ngrx/store';
import { Task } from '../../models/task.model';

// Load Tasks
export const loadTasks = createAction(
  '[Tasks] Load Tasks'
);

export const loadTasksSuccess = createAction(
  '[Tasks] Load Tasks Success',
  props<{ tasks: Task[] }>()
);

export const loadTasksFailure = createAction(
  '[Tasks] Load Tasks Failure',
  props<{ error: string }>()
);

// Add Task
export const addTask = createAction(
  '[Tasks] Add Task',
  props<{ task: Omit<Task, 'id' | 'createdAt'> }>()
);

export const addTaskSuccess = createAction(
  '[Tasks] Add Task Success',
  props<{ task: Task }>()
);

export const addTaskFailure = createAction(
  '[Tasks] Add Task Failure',
  props<{ error: string }>()
);

// Update Task
export const updateTask = createAction(
  '[Tasks] Update Task',
  props<{ task: Partial<Task> & { id: string } }>()
);

export const updateTaskSuccess = createAction(
  '[Tasks] Update Task Success',
  props<{ task: Task }>()
);

export const updateTaskFailure = createAction(
  '[Tasks] Update Task Failure',
  props<{ error: string }>()
);

// Delete Task
export const deleteTask = createAction(
  '[Tasks] Delete Task',
  props<{ id: string }>()
);

export const deleteTaskSuccess = createAction(
  '[Tasks] Delete Task Success',
  props<{ id: string }>()
);

export const deleteTaskFailure = createAction(
  '[Tasks] Delete Task Failure',
  props<{ error: string }>()
);

// Toggle Task
export const toggleTask = createAction(
  '[Tasks] Toggle Task',
  props<{ id: string }>()
);

// Select Task
export const selectTask = createAction(
  '[Tasks] Select Task',
  props<{ id: string | null }>()
);

// Filter Tasks
export const filterTasks = createAction(
  '[Tasks] Filter Tasks',
  props<{ filter: 'all' | 'active' | 'completed' }>()
);
