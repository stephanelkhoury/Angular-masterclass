import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Task } from '../../models/task.model';
import { v4 as uuidv4 } from 'uuid';

// Mock localStorage key
const TASKS_STORAGE_KEY = 'ngrx-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor() { }

  // Get all tasks
  getTasks(): Observable<Task[]> {
    try {
      const tasks = this.getTasksFromStorage();
      // Simulate network delay
      return of(tasks).pipe(delay(800));
    } catch (error) {
      return throwError(() => 'Failed to fetch tasks');
    }
  }

  // Get a single task by ID
  getTaskById(id: string): Observable<Task> {
    try {
      const tasks = this.getTasksFromStorage();
      const task = tasks.find(t => t.id === id);
      
      if (!task) {
        return throwError(() => `Task with ID ${id} not found`);
      }
      
      // Simulate network delay
      return of(task).pipe(delay(500));
    } catch (error) {
      return throwError(() => 'Failed to fetch task');
    }
  }

  // Create a new task
  createTask(taskData: Omit<Task, 'id' | 'createdAt'>): Observable<Task> {
    try {
      const tasks = this.getTasksFromStorage();
      const newTask: Task = {
        ...taskData,
        id: uuidv4(),
        createdAt: new Date(),
        updatedAt: new Date()
      };
      
      tasks.push(newTask);
      this.saveTasksToStorage(tasks);
      
      // Simulate network delay
      return of(newTask).pipe(delay(800));
    } catch (error) {
      return throwError(() => 'Failed to create task');
    }
  }

  // Update an existing task
  updateTask(taskData: Partial<Task> & { id: string }): Observable<Task> {
    try {
      const tasks = this.getTasksFromStorage();
      const index = tasks.findIndex(t => t.id === taskData.id);
      
      if (index === -1) {
        return throwError(() => `Task with ID ${taskData.id} not found`);
      }
      
      const updatedTask: Task = {
        ...tasks[index],
        ...taskData,
        updatedAt: new Date()
      };
      
      tasks[index] = updatedTask;
      this.saveTasksToStorage(tasks);
      
      // Simulate network delay
      return of(updatedTask).pipe(delay(800));
    } catch (error) {
      return throwError(() => 'Failed to update task');
    }
  }

  // Delete a task
  deleteTask(id: string): Observable<string> {
    try {
      let tasks = this.getTasksFromStorage();
      const initialLength = tasks.length;
      
      tasks = tasks.filter(t => t.id !== id);
      
      if (tasks.length === initialLength) {
        return throwError(() => `Task with ID ${id} not found`);
      }
      
      this.saveTasksToStorage(tasks);
      
      // Simulate network delay
      return of(id).pipe(delay(800));
    } catch (error) {
      return throwError(() => 'Failed to delete task');
    }
  }

  // Helper methods for localStorage
  private getTasksFromStorage(): Task[] {
    const tasksJson = localStorage.getItem(TASKS_STORAGE_KEY);
    if (!tasksJson) {
      return this.getInitialTasks();
    }
    
    try {
      const tasks = JSON.parse(tasksJson);
      // Convert string dates back to Date objects
      return tasks.map((task: any) => ({
        ...task,
        createdAt: new Date(task.createdAt),
        updatedAt: task.updatedAt ? new Date(task.updatedAt) : undefined,
        dueDate: task.dueDate ? new Date(task.dueDate) : undefined
      }));
    } catch {
      return this.getInitialTasks();
    }
  }

  private saveTasksToStorage(tasks: Task[]): void {
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
  }

  // Initial tasks for demo purposes
  private getInitialTasks(): Task[] {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const nextWeek = new Date(now);
    nextWeek.setDate(nextWeek.getDate() + 7);
    
    return [
      {
        id: '1',
        title: 'Learn NgRx fundamentals',
        description: 'Study the core concepts of NgRx: Store, Actions, Reducers, Selectors and Effects.',
        completed: false,
        priority: 'high',
        createdAt: new Date(now.setHours(now.getHours() - 24)),
        tags: ['learning', 'angular', 'ngrx']
      },
      {
        id: '2',
        title: 'Implement NgRx in task app',
        description: 'Apply NgRx knowledge by refactoring the task management application.',
        completed: false,
        priority: 'medium',
        createdAt: new Date(now.setHours(now.getHours() - 12)),
        dueDate: tomorrow,
        tags: ['implementation', 'project']
      },
      {
        id: '3',
        title: 'Write unit tests for reducers',
        description: 'Create comprehensive tests for all reducer functions.',
        completed: true,
        priority: 'medium',
        createdAt: new Date(now.setHours(now.getHours() - 48)),
        updatedAt: new Date(now.setHours(now.getHours() - 2)),
        tags: ['testing', 'quality']
      },
      {
        id: '4',
        title: 'Study NgRx Effects',
        description: 'Deep dive into side effect management with NgRx Effects.',
        completed: false,
        priority: 'high',
        createdAt: new Date(now.setHours(now.getHours() - 36)),
        dueDate: nextWeek,
        tags: ['learning', 'advanced']
      },
      {
        id: '5',
        title: 'Review Entity pattern',
        description: 'Learn how to use EntityAdapter for efficient collection management.',
        completed: false,
        priority: 'low',
        createdAt: new Date(now.setHours(now.getHours() - 72)),
        tags: ['learning', 'patterns']
      }
    ];
  }
}
