import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { User } from '../../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  private cachedUsers: User[] | null = null;
  
  constructor(private http: HttpClient) { }

  /**
   * Get all users
   */
  getUsers(): Observable<User[]> {
    // Return cached users if available
    if (this.cachedUsers) {
      return of(this.cachedUsers);
    }
    
    return this.http.get<User[]>(this.apiUrl).pipe(
      retry(2),
      tap(users => this.cachedUsers = users),
      catchError(this.handleError<User[]>('getUsers', []))
    );
  }

  /**
   * Get user by ID
   */
  getUserById(id: number): Observable<User> {
    if (this.cachedUsers) {
      const user = this.cachedUsers.find(u => u.id === id);
      if (user) {
        return of(user);
      }
    }
    
    return this.http.get<User>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError<User>(`getUserById id=${id}`))
    );
  }

  /**
   * Add a new user
   */
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user).pipe(
      tap(newUser => {
        if (this.cachedUsers) {
          this.cachedUsers = [...this.cachedUsers, newUser];
        }
      }),
      catchError(this.handleError<User>('addUser'))
    );
  }

  /**
   * Update existing user
   */
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${user.id}`, user).pipe(
      tap(updatedUser => {
        if (this.cachedUsers) {
          this.cachedUsers = this.cachedUsers.map(u => 
            u.id === updatedUser.id ? updatedUser : u
          );
        }
      }),
      catchError(this.handleError<User>('updateUser'))
    );
  }

  /**
   * Delete a user
   */
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => {
        if (this.cachedUsers) {
          this.cachedUsers = this.cachedUsers.filter(u => u.id !== id);
        }
      }),
      catchError(this.handleError<void>('deleteUser'))
    );
  }

  /**
   * Clear users cache
   */
  clearCache(): void {
    this.cachedUsers = null;
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      
      // Let the app keep running by returning an empty result.
      return error.status === 404 ? of(result as T) : throwError(() => error);
    };
  }
}
