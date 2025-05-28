import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TaskState } from '../../../models/task-state.model';
import * as fromTasks from '../reducers/task.reducer';

// Feature selector
export const selectTasksState = createFeatureSelector<TaskState>('tasks');

// Select all tasks from the entity
export const selectAllTasks = createSelector(
  selectTasksState,
  fromTasks.selectAll
);

// Count of all tasks
export const selectTaskCount = createSelector(
  selectTasksState,
  fromTasks.selectTotal
);

// Select task entities
export const selectTaskEntities = createSelector(
  selectTasksState,
  fromTasks.selectEntities
);

// Select the selected task ID
export const selectSelectedTaskId = createSelector(
  selectTasksState,
  (state: TaskState) => state.selectedTaskId
);

// Select the selected task
export const selectSelectedTask = createSelector(
  selectTaskEntities,
  selectSelectedTaskId,
  (taskEntities, selectedId) => selectedId ? taskEntities[selectedId] : null
);

// Select loading status
export const selectTasksLoading = createSelector(
  selectTasksState,
  (state: TaskState) => state.loading
);

// Select error
export const selectTasksError = createSelector(
  selectTasksState,
  (state: TaskState) => state.error
);

// Select the current filter
export const selectTaskFilter = createSelector(
  selectTasksState,
  (state: TaskState) => state.filter
);

// Select filtered tasks
export const selectFilteredTasks = createSelector(
  selectAllTasks,
  selectTaskFilter,
  (tasks, filter) => {
    switch (filter) {
      case 'active':
        return tasks.filter(task => !task.completed);
      case 'completed':
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  }
);

// Select completed tasks
export const selectCompletedTasks = createSelector(
  selectAllTasks,
  (tasks) => tasks.filter(task => task.completed)
);

// Select active tasks
export const selectActiveTasks = createSelector(
  selectAllTasks,
  (tasks) => tasks.filter(task => !task.completed)
);

// Select completion statistics
export const selectTaskStats = createSelector(
  selectAllTasks,
  selectCompletedTasks,
  (allTasks, completedTasks) => ({
    total: allTasks.length,
    completed: completedTasks.length,
    active: allTasks.length - completedTasks.length,
    percentComplete: allTasks.length > 0
      ? Math.round((completedTasks.length / allTasks.length) * 100)
      : 0
  })
);

// Select tasks by priority
export const selectHighPriorityTasks = createSelector(
  selectAllTasks,
  (tasks) => tasks.filter(task => task.priority === 'high')
);

export const selectMediumPriorityTasks = createSelector(
  selectAllTasks,
  (tasks) => tasks.filter(task => task.priority === 'medium')
);

export const selectLowPriorityTasks = createSelector(
  selectAllTasks,
  (tasks) => tasks.filter(task => task.priority === 'low')
);
