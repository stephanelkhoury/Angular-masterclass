import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { AppState } from '../../../models/task-state.model';
import { taskReducer } from './task.reducer';
import { environment } from '../../../../environments/environment';

export const reducers: ActionReducerMap<AppState> = {
  tasks: taskReducer
};

// Logger meta-reducer for development debugging
export function logger(reducer: any): any {
  return function(state: any, action: any): any {
    console.group(action.type);
    console.log('Previous state:', state);
    console.log('Action:', action);
    const nextState = reducer(state, action);
    console.log('Next state:', nextState);
    console.groupEnd();
    return nextState;
  };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger]
  : [];
