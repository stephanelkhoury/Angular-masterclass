import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

/**
 * Smart/Container Component
 * 
 * Responsibilities:
 * - Fetch data from services
 * - Handle business logic
 * - Manage state
 * - Pass data to presentational components
 * - Handle events from presentational components
 */
@Component({
  selector: 'app-user-container',
  template: `
    <div class="user-management">
      <h2>User Management (Smart/Container & Presentational Pattern)</h2>
      
      <div class="description-box">
        <h3>Pattern Description</h3>
        <p>
          This example demonstrates the Smart/Container & Presentational pattern where:
        </p>
        <ul>
          <li><strong>Smart/Container components</strong> handle data fetching, state management, and business logic</li>
          <li><strong>Presentational components</strong> focus on UI rendering and delegate events to container components</li>
        </ul>
        <p>
          Benefits: Clear separation of concerns, improved reusability, easier testing, and better state management.
        </p>
      </div>
      
      <div class="container">
        <div class="row">
          <!-- Pass data down to presentational component -->
          <div class="col-md-7">
            <app-user-list
              [users]="users$ | async"
              [loading]="loading"
              (selectUser)="onSelectUser($event)"
              (deleteUser)="onDeleteUser($event)"
              (toggleStatus)="onToggleUserStatus($event)">
            </app-user-list>
          </div>
          
          <div class="col-md-5">
            <app-user-detail
              [user]="selectedUser$ | async"
              (close)="onCloseDetails()"
              (save)="onSaveUser($event)">
            </app-user-detail>
            
            <div *ngIf="successMessage" class="alert alert-success mt-3">
              {{ successMessage }}
            </div>
            
            <div *ngIf="errorMessage" class="alert alert-danger mt-3">
              {{ errorMessage }}
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .description-box {
      background-color: #f8f9fa;
      border-left: 4px solid #007bff;
      padding: 15px;
      margin-bottom: 20px;
      border-radius: 4px;
    }
    .user-management {
      padding: 20px;
    }
  `]
})
export class UserContainerComponent implements OnInit {
  users$!: Observable<User[]>;
  selectedUser$: Observable<User | null>;
  loading = false;
  successMessage = '';
  errorMessage = '';

  constructor(private userService: UserService) {
    this.selectedUser$ = this.userService.selectedUser$;
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.loading = true;
    this.users$ = this.userService.getUsers();
    // You would typically use finalize() here, but keeping it simple
    setTimeout(() => this.loading = false, 500); 
  }

  onSelectUser(user: User): void {
    this.userService.selectUser(user);
    this.clearMessages();
  }

  onCloseDetails(): void {
    this.userService.selectUser(null);
    this.clearMessages();
  }

  onSaveUser(user: User): void {
    this.loading = true;
    this.clearMessages();

    if (user.id) {
      // Update existing user
      this.userService.updateUser(user).subscribe(
        updatedUser => {
          this.successMessage = `User ${updatedUser.name} updated successfully!`;
          this.loadUsers();
        },
        error => {
          this.errorMessage = `Error updating user: ${error.message}`;
          this.loading = false;
        }
      );
    } else {
      // Create new user
      this.userService.createUser(user).subscribe(
        newUser => {
          this.successMessage = `User ${newUser.name} created successfully!`;
          this.loadUsers();
        },
        error => {
          this.errorMessage = `Error creating user: ${error.message}`;
          this.loading = false;
        }
      );
    }
  }

  onDeleteUser(userId: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.loading = true;
      this.clearMessages();
      
      this.userService.deleteUser(userId).subscribe(
        success => {
          if (success) {
            this.successMessage = 'User deleted successfully!';
            this.loadUsers();
          } else {
            this.errorMessage = 'Error deleting user.';
            this.loading = false;
          }
        },
        error => {
          this.errorMessage = `Error: ${error.message}`;
          this.loading = false;
        }
      );
    }
  }

  onToggleUserStatus(user: User): void {
    const updatedUser = { ...user, active: !user.active };
    
    this.loading = true;
    this.clearMessages();
    
    this.userService.updateUser(updatedUser).subscribe(
      result => {
        this.successMessage = `User status updated to ${result.active ? 'active' : 'inactive'}!`;
        this.loadUsers();
      },
      error => {
        this.errorMessage = `Error updating status: ${error.message}`;
        this.loading = false;
      }
    );
  }

  private clearMessages(): void {
    this.successMessage = '';
    this.errorMessage = '';
  }
}
