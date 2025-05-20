// Base Store implementation
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

export class Store<T> {
  private state$: BehaviorSubject<T>;
  
  constructor(initialState: T) {
    this.state$ = new BehaviorSubject<T>(initialState);
  }
  
  // Get current state
  getState(): T {
    return this.state$.getValue();
  }
  
  // Select a slice of state
  select<K>(mapFn: (state: T) => K): Observable<K> {
    return this.state$.asObservable().pipe(
      map(mapFn),
      distinctUntilChanged()
    );
  }
  
  // Update state
  setState(newState: Partial<T>): void {
    this.state$.next({
      ...this.getState(),
      ...newState
    });
  }
}
