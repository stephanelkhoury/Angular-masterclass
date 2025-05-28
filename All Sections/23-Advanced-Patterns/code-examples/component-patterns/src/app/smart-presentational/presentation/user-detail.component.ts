import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user.model';

/**
 * Presentational Component - User Detail
 * 
 * Responsibilities:
 * - Render UI based on inputs
 * - Emit events when user interacts with the UI
 * - Handle form validation
 * - No direct dependency on services
 * - No business logic
 */
@Component({
  selector: 'app-user-detail',
  template: `
    <div class="user-detail-component" *ngIf="user">
      <h3>{{ isNewUser ? 'Create User' : 'Edit User' }}</h3>
      
      <form [formGroup]="userForm" (ngSubmit)="onSubmit()">
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input
            type="text"
            id="name"
            formControlName="name"
            class="form-control"
            [ngClass]="{'is-invalid': hasError('name')}"
          />
          <div *ngIf="hasError('name')" class="invalid-feedback">
            Name is required.
          </div>
        </div>
        
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            type="email"
            id="email"
            formControlName="email"
            class="form-control"
            [ngClass]="{'is-invalid': hasError('email')}"
          />
          <div *ngIf="hasError('email', 'required')" class="invalid-feedback">
            Email is required.
          </div>
          <div *ngIf="hasError('email', 'email')" class="invalid-feedback">
            Please enter a valid email address.
          </div>
        </div>
        
        <div class="mb-3">
          <label for="role" class="form-label">Role</label>
          <select
            id="role"
            formControlName="role"
            class="form-select"
          >
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="guest">Guest</option>
          </select>
        </div>
        
        <div class="mb-3">
          <div class="form-check">
            <input
              type="checkbox"
              id="active"
              formControlName="active"
              class="form-check-input"
            />
            <label for="active" class="form-check-label">Active</label>
          </div>
        </div>
        
        <div class="d-flex justify-content-between">
          <button
            type="button"
            class="btn btn-secondary"
            (click)="onCancel()"
          >
            Cancel
          </button>
          
          <button
            type="submit"
            class="btn btn-primary"
            [disabled]="userForm.invalid"
          >
            {{ isNewUser ? 'Create' : 'Save Changes' }}
          </button>
        </div>
      </form>
    </div>
    
    <div *ngIf="!user" class="select-user-message">
      <p>Select a user to view details or click "Add New User" to create one.</p>
    </div>
  `,
  styles: [`
    .user-detail-component {
      padding: 15px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    .select-user-message {
      padding: 15px;
      background-color: #f8f9fa;
      border-radius: 8px;
      text-align: center;
      color: #6c757d;
    }
  `]
})
export class UserDetailComponent implements OnChanges {
  @Input() user: User | null = null;
  @Output() save = new EventEmitter<User>();
  @Output() close = new EventEmitter<void>();
  
  userForm: FormGroup;
  
  get isNewUser(): boolean {
    return this.user ? this.user.id === 0 : false;
  }
  
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      id: [0],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['user'],
      active: [true]
    });
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['user'] && this.user) {
      this.userForm.patchValue(this.user);
    }
  }
  
  onSubmit(): void {
    if (this.userForm.valid) {
      const userData: User = this.userForm.value;
      this.save.emit(userData);
    }
  }
  
  onCancel(): void {
    this.close.emit();
  }
  
  hasError(controlName: string, validationType?: string): boolean {
    const control = this.userForm.get(controlName);
    if (!control) return false;
    
    if (validationType) {
      return control.touched && control.hasError(validationType);
    }
    
    return control.touched && control.invalid;
  }
}
