import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../models/user.model';

/**
 * Presentational Component - User List
 * 
 * Responsibilities:
 * - Render UI based on inputs
 * - Emit events when user interacts with the UI
 * - No direct dependency on services
 * - No business logic
 */
@Component({
  selector: 'app-user-list',
  template: `
    <div class="user-list-component">
      <h3>User List</h3>
      
      <div *ngIf="loading" class="text-center my-3">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      
      <table *ngIf="users && !loading" class="table table-striped table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let user of users" [class.table-active]="isSelected(user)">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>
              <span class="badge" [ngClass]="getRoleBadgeClass(user.role)">
                {{ user.role }}
              </span>
            </td>
            <td>
              <span class="badge" [ngClass]="user.active ? 'bg-success' : 'bg-danger'">
                {{ user.active ? 'Active' : 'Inactive' }}
              </span>
            </td>
            <td>
              <div class="btn-group btn-group-sm">
                <button class="btn btn-outline-primary" (click)="onSelect(user)">
                  <i class="bi bi-info-circle"></i> Details
                </button>
                <button class="btn btn-outline-warning" (click)="onToggleStatus(user)">
                  {{ user.active ? 'Deactivate' : 'Activate' }}
                </button>
                <button class="btn btn-outline-danger" (click)="onDelete(user.id)">
                  <i class="bi bi-trash"></i> Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      
      <div *ngIf="users && users.length === 0 && !loading" class="alert alert-info">
        No users found.
      </div>
      
      <button class="btn btn-primary mt-3" (click)="onCreateNew()">
        <i class="bi bi-plus-circle"></i> Add New User
      </button>
    </div>
  `,
  styles: [`
    .user-list-component {
      padding: 15px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
  `]
})
export class UserListComponent {
  @Input() users: User[] | null = [];
  @Input() loading = false;
  @Input() selectedUserId: number | null = null;
  
  @Output() selectUser = new EventEmitter<User>();
  @Output() deleteUser = new EventEmitter<number>();
  @Output() toggleStatus = new EventEmitter<User>();
  @Output() createUser = new EventEmitter<void>();
  
  onSelect(user: User): void {
    this.selectUser.emit(user);
  }
  
  onDelete(userId: number): void {
    this.deleteUser.emit(userId);
  }
  
  onToggleStatus(user: User): void {
    this.toggleStatus.emit(user);
  }
  
  onCreateNew(): void {
    const newUser: User = {
      id: 0, // Will be replaced by the service
      name: '',
      email: '',
      role: 'user',
      active: true
    };
    this.selectUser.emit(newUser);
  }
  
  isSelected(user: User): boolean {
    return this.selectedUserId === user.id;
  }
  
  getRoleBadgeClass(role: string): string {
    switch (role) {
      case 'admin': return 'bg-primary';
      case 'user': return 'bg-info';
      case 'guest': return 'bg-secondary';
      default: return 'bg-light';
    }
  }
}
