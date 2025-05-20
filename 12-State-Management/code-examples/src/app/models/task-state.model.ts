// Task state definition
import { Task } from '../models/task.model';

export interface TaskState {
  tasks: Task[];
  selectedTask: Task | null;
  filterStatus: 'all' | 'todo' | 'in-progress' | 'done';
  filterPriority: 'all' | 'low' | 'medium' | 'high';
  isLoading: boolean;
  error: string | null;
}

// Task statistics interface
export interface TaskStatistics {
  total: number;
  todo: number;
  inProgress: number;
  done: number;
  highPriority: number;
}
