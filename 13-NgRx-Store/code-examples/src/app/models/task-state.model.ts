import { EntityState } from '@ngrx/entity';
import { Task } from './task.model';

export interface TaskState extends EntityState<Task> {
  selectedTaskId: string | null;
  loading: boolean;
  error: string | null;
  filter: 'all' | 'active' | 'completed';
}

export interface AppState {
  tasks: TaskState;
}
