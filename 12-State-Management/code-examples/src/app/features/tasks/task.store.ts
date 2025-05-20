// Task store implementation
import { Injectable } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';

import { Store } from '../../core/store';
import { StorageService } from '../../core/services/storage.service';
import { Task } from '../../models/task.model';
import { TaskState, TaskStatistics } from '../../models/task-state.model';

// Local storage key for persisting tasks
const TASK_STORAGE_KEY = 'task_management_app_tasks';

// Initial state
const initialState: TaskState = {
  tasks: [],
  selectedTask: null,
  filterStatus: 'all',
  filterPriority: 'all',
  isLoading: false,
  error: null
};

@Injectable({
  providedIn: 'root'
})
export class TaskStore extends Store<TaskState> {
  constructor(private storageService: StorageService) {
    // Load saved tasks from localStorage or use initial state
    const savedState = storageService.loadState<TaskState>(TASK_STORAGE_KEY);
    
    // If we have saved state, ensure dates are properly converted back to Date objects
    if (savedState) {
      savedState.tasks = savedState.tasks.map(task => ({
        ...task,
        createdAt: new Date(task.createdAt),
        updatedAt: new Date(task.updatedAt)
      }));
    }
    
    super(savedState || initialState);
    
    // Subscribe to state changes to save to localStorage
    this.state$.subscribe(state => {
      this.storageService.saveState(TASK_STORAGE_KEY, state);
    });
  }

  // Selectors
  
  // Get all tasks
  get tasks$(): Observable<Task[]> {
    return this.select(state => state.tasks);
  }
  
  // Get the currently selected task
  get selectedTask$(): Observable<Task | null> {
    return this.select(state => state.selectedTask);
  }
  
  // Get the filter status
  get filterStatus$(): Observable<'all' | 'todo' | 'in-progress' | 'done'> {
    return this.select(state => state.filterStatus);
  }
  
  // Get the filter priority
  get filterPriority$(): Observable<'all' | 'low' | 'medium' | 'high'> {
    return this.select(state => state.filterPriority);
  }
  
  // Get loading state
  get isLoading$(): Observable<boolean> {
    return this.select(state => state.isLoading);
  }
  
  // Get error message
  get error$(): Observable<string | null> {
    return this.select(state => state.error);
  }
  
  // Get filtered tasks based on current filters
  get filteredTasks$(): Observable<Task[]> {
    return combineLatest([
      this.tasks$, 
      this.filterStatus$, 
      this.filterPriority$
    ]).pipe(
      map(([tasks, status, priority]) => {
        return tasks.filter(task => {
          const statusMatch = status === 'all' || task.status === status;
          const priorityMatch = priority === 'all' || task.priority === priority;
          return statusMatch && priorityMatch;
        });
      })
    );
  }
  
  // Get tasks grouped by status
  get tasksByStatus$(): Observable<{ [key: string]: Task[] }> {
    return combineLatest([
      this.filteredTasks$
    ]).pipe(
      map(([tasks]) => {
        return {
          'todo': tasks.filter(task => task.status === 'todo'),
          'in-progress': tasks.filter(task => task.status === 'in-progress'),
          'done': tasks.filter(task => task.status === 'done')
        };
      })
    );
  }
  
  // Get task statistics
  get taskStatistics$(): Observable<TaskStatistics> {
    return this.tasks$.pipe(
      map(tasks => {
        return {
          total: tasks.length,
          todo: tasks.filter(t => t.status === 'todo').length,
          inProgress: tasks.filter(t => t.status === 'in-progress').length,
          done: tasks.filter(t => t.status === 'done').length,
          highPriority: tasks.filter(t => t.priority === 'high').length
        };
      })
    );
  }
  
  // Actions
  
  // Set loading state
  setLoading(isLoading: boolean): void {
    this.setState({ isLoading });
  }
  
  // Set error message
  setError(error: string | null): void {
    this.setState({ error });
  }
  
  // Add a new task
  addTask(taskData: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>): void {
    const state = this.getState();
    const now = new Date();
    
    const newTask: Task = {
      ...taskData,
      id: uuidv4(),
      createdAt: now,
      updatedAt: now
    };
    
    this.setState({
      tasks: [...state.tasks, newTask]
    });
  }
  
  // Update an existing task
  updateTask(id: string, updatedData: Partial<Omit<Task, 'id' | 'createdAt'>>): void {
    const state = this.getState();
    
    const updatedTasks = state.tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          ...updatedData,
          updatedAt: new Date()
        };
      }
      return task;
    });
    
    this.setState({
      tasks: updatedTasks,
      // Update selected task if it's being edited
      selectedTask: state.selectedTask?.id === id 
        ? { ...state.selectedTask, ...updatedData, updatedAt: new Date() } 
        : state.selectedTask
    });
  }
  
  // Delete a task
  deleteTask(id: string): void {
    const state = this.getState();
    
    this.setState({
      tasks: state.tasks.filter(task => task.id !== id),
      // Clear selected task if it's being deleted
      selectedTask: state.selectedTask?.id === id ? null : state.selectedTask
    });
  }
  
  // Select a task for viewing/editing
  selectTask(taskId: string | null): void {
    const state = this.getState();
    
    if (!taskId) {
      this.setState({ selectedTask: null });
      return;
    }
    
    const task = state.tasks.find(t => t.id === taskId) || null;
    this.setState({ selectedTask: task });
  }
  
  // Set filter status
  setFilterStatus(status: 'all' | 'todo' | 'in-progress' | 'done'): void {
    this.setState({ filterStatus: status });
  }
  
  // Set filter priority
  setFilterPriority(priority: 'all' | 'low' | 'medium' | 'high'): void {
    this.setState({ filterPriority: priority });
  }
  
  // Update task status
  updateTaskStatus(id: string, status: 'todo' | 'in-progress' | 'done'): void {
    this.updateTask(id, { status });
  }
  
  // Clear all tasks
  clearAllTasks(): void {
    this.setState({
      tasks: [],
      selectedTask: null
    });
  }
  
  // Create sample tasks (for demo purposes)
  createSampleTasks(): void {
    const now = new Date();
    const sampleTasks: Task[] = [
      {
        id: uuidv4(),
        title: 'Learn Angular',
        description: 'Complete the Angular Masterclass course',
        status: 'in-progress',
        priority: 'high',
        createdAt: now,
        updatedAt: now
      },
      {
        id: uuidv4(),
        title: 'Build a Todo App',
        description: 'Create a task management application using Angular',
        status: 'todo',
        priority: 'medium',
        createdAt: now,
        updatedAt: now
      },
      {
        id: uuidv4(),
        title: 'Learn RxJS',
        description: 'Understand observables and reactive programming',
        status: 'todo',
        priority: 'high',
        createdAt: now,
        updatedAt: now
      },
      {
        id: uuidv4(),
        title: 'Setup Development Environment',
        description: 'Install Node.js, Angular CLI and VS Code',
        status: 'done',
        priority: 'low',
        createdAt: now,
        updatedAt: now
      }
    ];
    
    this.setState({
      tasks: sampleTasks
    });
  }
}
