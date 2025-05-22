import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Mock data
  private users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin', active: true, lastLogin: new Date('2023-01-15') },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user', active: true, lastLogin: new Date('2023-01-20') },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'user', active: false, lastLogin: new Date('2022-12-05') },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'user', active: true, lastLogin: new Date('2023-01-18') },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'guest', active: true, lastLogin: new Date('2023-01-22') }
  ];

  private selectedUserSubject = new BehaviorSubject<User | null>(null);
  selectedUser$ = this.selectedUserSubject.asObservable();

  constructor() {}

  getUsers(): Observable<User[]> {
    // Simulate API call with delay
    return of([...this.users]).pipe(delay(500));
  }

  getUserById(id: number): Observable<User | undefined> {
    const user = this.users.find(u => u.id === id);
    return of(user).pipe(delay(300));
  }

  createUser(user: Omit<User, 'id'>): Observable<User> {
    const newUser: User = {
      ...user,
      id: this.generateId()
    };
    this.users.push(newUser);
    return of(newUser).pipe(delay(500));
  }

  updateUser(updatedUser: User): Observable<User> {
    const index = this.users.findIndex(u => u.id === updatedUser.id);
    if (index !== -1) {
      this.users[index] = { ...updatedUser };
      return of(this.users[index]).pipe(delay(500));
    }
    throw new Error('User not found');
  }

  deleteUser(id: number): Observable<boolean> {
    const initialLength = this.users.length;
    this.users = this.users.filter(user => user.id !== id);
    return of(initialLength > this.users.length).pipe(delay(500));
  }

  selectUser(user: User | null): void {
    this.selectedUserSubject.next(user);
  }

  private generateId(): number {
    return Math.max(...this.users.map(user => user.id)) + 1;
  }
}
