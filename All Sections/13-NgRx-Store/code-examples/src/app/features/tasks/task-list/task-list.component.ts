import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Task } from '../../../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent {
  @Input() tasks: Task[] | null = [];
  @Input() loading: boolean | null = false;
  
  @Output() taskToggle = new EventEmitter<string>();
  @Output() taskSelect = new EventEmitter<string>();
  @Output() taskDelete = new EventEmitter<string>();

  trackByTaskId(index: number, task: Task): string {
    return task.id;
  }
}
