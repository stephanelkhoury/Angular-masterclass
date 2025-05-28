import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../../core/services/user.service';
import { UserDetails } from '../../../models/user-details.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userForm!: FormGroup;
  isEditMode = false;
  userId: string | null = null;
  loading = false;
  savingUser = false;
  
  roles: string[] = ['Admin', 'Manager', 'Developer', 'Designer', 'User'];
  statuses: {value: string, label: string}[] = [
    {value: 'active', label: 'Active'},
    {value: 'inactive', label: 'Inactive'},
    {value: 'suspended', label: 'Suspended'}
  ];

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.createForm();
    
    // Check if we're in edit mode
    this.userId = this.route.snapshot.paramMap.get('id');
    this.isEditMode = !!this.userId;
    
    if (this.isEditMode && this.userId) {
      this.loadUserData(this.userId);
    }
  }
  
  createForm(): void {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      role: ['User', Validators.required],
      status: ['active', Validators.required],
      phone: [''],
      bio: [''],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zipCode: [''],
        country: ['']
      })
    });
  }
  
  loadUserData(userId: string): void {
    this.loading = true;
    
    this.userService.getUserById(userId).subscribe({
      next: (user) => {
        if (user) {
          // Populate the form with user data
          this.userForm.patchValue({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role,
            status: user.status,
            phone: user.phone || '',
            bio: user.bio || '',
            address: {
              street: user.address?.street || '',
              city: user.address?.city || '',
              state: user.address?.state || '',
              zipCode: user.address?.zipCode || '',
              country: user.address?.country || ''
            }
          });
        } else {
          this.snackBar.open('User not found', 'Close', { duration: 3000 });
          this.router.navigate(['/users']);
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading user data', err);
        this.snackBar.open('Failed to load user data', 'Close', { duration: 3000 });
        this.loading = false;
        this.router.navigate(['/users']);
      }
    });
  }
  
  onSubmit(): void {
    if (this.userForm.invalid) {
      return;
    }
    
    this.savingUser = true;
    
    const userData = this.userForm.value;
    
    // Filter out empty address fields
    if (userData.address) {
      const hasAddressData = Object.values(userData.address).some(value => !!value);
      if (!hasAddressData) {
        userData.address = undefined;
      }
    }
    
    if (this.isEditMode && this.userId) {
      // Update existing user
      this.userService.updateUser(this.userId, userData).subscribe({
        next: () => {
          this.snackBar.open('User updated successfully', 'Close', { duration: 3000 });
          this.router.navigate(['/users', this.userId]);
          this.savingUser = false;
        },
        error: (err) => {
          console.error('Error updating user', err);
          this.snackBar.open('Failed to update user', 'Close', { duration: 3000 });
          this.savingUser = false;
        }
      });
    } else {
      // Create new user
      this.userService.createUser(userData).subscribe({
        next: (newUser) => {
          this.snackBar.open('User created successfully', 'Close', { duration: 3000 });
          this.router.navigate(['/users', newUser.id]);
          this.savingUser = false;
        },
        error: (err) => {
          console.error('Error creating user', err);
          this.snackBar.open('Failed to create user', 'Close', { duration: 3000 });
          this.savingUser = false;
        }
      });
    }
  }
  
  getErrorMessage(controlName: string, groupName?: string): string {
    const control = groupName ? 
      this.userForm.get(`${groupName}.${controlName}`) : 
      this.userForm.get(controlName);
    
    if (!control) return '';
    
    if (control.hasError('required')) {
      return 'This field is required';
    }
    
    if (control.hasError('minlength')) {
      return `Minimum length is ${control.getError('minlength').requiredLength} characters`;
    }
    
    if (control.hasError('email')) {
      return 'Please enter a valid email address';
    }
    
    return '';
  }
  
  cancel(): void {
    if (this.isEditMode && this.userId) {
      this.router.navigate(['/users', this.userId]);
    } else {
      this.router.navigate(['/users']);
    }
  }
}
