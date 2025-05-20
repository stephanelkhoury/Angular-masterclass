import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';

import * as TaskActions from '../actions/task.actions';
import { TaskService } from '../../services/task.service';

@Injectable()
export class TaskEffects {
  
  loadTasks$ = createEffect(() => this.actions$.pipe(
    ofType(TaskActions.loadTasks),
    mergeMap(() => this.taskService.getTasks()
      .pipe(
        map(tasks => TaskActions.loadTasksSuccess({ tasks })),
        catchError(error => of(TaskActions.loadTasksFailure({ error: error.toString() })))
      )
    )
  ));

  addTask$ = createEffect(() => this.actions$.pipe(
    ofType(TaskActions.addTask),
    mergeMap(({ task }) => this.taskService.createTask(task)
      .pipe(
        map(newTask => TaskActions.addTaskSuccess({ task: newTask })),
        catchError(error => of(TaskActions.addTaskFailure({ error: error.toString() })))
      )
    )
  ));

  updateTask$ = createEffect(() => this.actions$.pipe(
    ofType(TaskActions.updateTask),
    mergeMap(({ task }) => this.taskService.updateTask(task)
      .pipe(
        map(updatedTask => TaskActions.updateTaskSuccess({ task: updatedTask })),
        catchError(error => of(TaskActions.updateTaskFailure({ error: error.toString() })))
      )
    )
  ));

  deleteTask$ = createEffect(() => this.actions$.pipe(
    ofType(TaskActions.deleteTask),
    mergeMap(({ id }) => this.taskService.deleteTask(id)
      .pipe(
        map((deletedId) => TaskActions.deleteTaskSuccess({ id: deletedId })),
        catchError(error => of(TaskActions.deleteTaskFailure({ error: error.toString() })))
      )
    )
  ));

  toggleTask$ = createEffect(() => this.actions$.pipe(
    ofType(TaskActions.toggleTask),
    switchMap(({ id }) => {
      // Get the task first
      return this.taskService.getTaskById(id).pipe(
        switchMap(task => {
          // Then update its completed status
          return this.taskService.updateTask({
            id, 
            completed: !task.completed
          }).pipe(
            map(updatedTask => TaskActions.updateTaskSuccess({ task: updatedTask })),
            catchError(error => of(TaskActions.updateTaskFailure({ error: error.toString() })))
          );
        }),
        catchError(error => of(TaskActions.updateTaskFailure({ error: error.toString() })))
      );
    })
  ));

  constructor(
    private actions$: Actions,
    private taskService: TaskService
  ) {}
}
