import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from './models/task-state.model';
import { Task } from './models/task.model';
import * as TaskActions from './core/state/actions/task.actions';
import * as TaskSelectors from './core/state/selectors/task.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'NgRx Task Manager';
  
  tasks$: Observable<Task[]>;
  filteredTasks$: Observable<Task[]>;
  selectedTask$: Observable<Task | null>;
  taskStats$: Observable<{
    total: number;
    active: number;
    completed: number;
    percentComplete: number;
  }>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;
  currentFilter$: Observable<'all' | 'active' | 'completed'>;
  
  constructor(private store: Store<AppState>) {
    this.tasks$ = this.store.select(TaskSelectors.selectAllTasks);
    this.filteredTasks$ = this.store.select(TaskSelectors.selectFilteredTasks);
    this.selectedTask$ = this.store.select(TaskSelectors.selectSelectedTask);
    this.taskStats$ = this.store.select(TaskSelectors.selectTaskStats);
    this.loading$ = this.store.select(TaskSelectors.selectTasksLoading);
    this.error$ = this.store.select(TaskSelectors.selectTasksError);
    this.currentFilter$ = this.store.select(TaskSelectors.selectTaskFilter);
  }

  ngOnInit() {
    // Load tasks when the app starts
    this.store.dispatch(TaskActions.loadTasks());
  }

  addTask(task: Omit<Task, 'id' | 'createdAt'>) {
    this.store.dispatch(TaskActions.addTask({ task }));
  }

  updateTask(task: Partial<Task> & { id: string }) {
    this.store.dispatch(TaskActions.updateTask({ task }));
  }

  deleteTask(id: string) {
    this.store.dispatch(TaskActions.deleteTask({ id }));
  }

  toggleTask(id: string) {
    this.store.dispatch(TaskActions.toggleTask({ id }));
  }

  selectTask(id: string | null) {
    this.store.dispatch(TaskActions.selectTask({ id }));
  }

  changeFilter(filter: 'all' | 'active' | 'completed') {
    this.store.dispatch(TaskActions.filterTasks({ filter }));
  }
}
