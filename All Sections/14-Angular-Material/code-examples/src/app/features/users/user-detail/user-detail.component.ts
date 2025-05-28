import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../../../core/services/user.service';
import { UserDetails } from '../../../models/user-details.model';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user: UserDetails | null = null;
  loading = true;
  error: string | null = null;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadUserDetails();
  }

  loadUserDetails(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    if (!userId) {
      this.error = 'Invalid user ID';
      this.loading = false;
      return;
    }

    this.loading = true;
    this.userService.getUserById(userId).subscribe({
      next: (user) => {
        if (user) {
          this.user = user;
          this.error = null;
        } else {
          this.error = 'User not found';
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading user details', err);
        this.error = 'Failed to load user details. Please try again later.';
        this.loading = false;
      }
    });
  }

  editUser(): void {
    if (this.user) {
      this.router.navigate(['/users', this.user.id, 'edit']);
    }
  }

  deleteUser(): void {
    if (!this.user) return;

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: {
        title: 'Delete User',
        message: `Are you sure you want to delete ${this.user.firstName} ${this.user.lastName}? This action cannot be undone.`,
        confirmText: 'Delete',
        cancelText: 'Cancel'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && this.user) {
        this.userService.deleteUser(this.user.id).subscribe({
          next: () => {
            this.snackBar.open(`User ${this.user?.firstName} ${this.user?.lastName} has been deleted`, 'Close', {
              duration: 3000
            });
            this.router.navigate(['/users']);
          },
          error: (err) => {
            console.error('Error deleting user', err);
            this.snackBar.open('Failed to delete user. Please try again later.', 'Close', {
              duration: 3000
            });
          }
        });
      }
    });
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'active':
        return 'green';
      case 'inactive':
        return 'orange';
      case 'suspended':
        return 'red';
      default:
        return 'grey';
    }
  }

  goBack(): void {
    this.router.navigate(['/users']);
  }
}
