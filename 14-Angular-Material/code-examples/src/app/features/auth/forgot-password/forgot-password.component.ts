import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { ForgotPasswordRequest } from '../../../models/user.model';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup;
  loading = false;
  requestSent = false;
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.forgotPasswordForm.invalid) {
      return;
    }

    this.loading = true;
    
    const request: ForgotPasswordRequest = {
      email: this.forgotPasswordForm.controls['email'].value
    };
    
    this.authService.forgotPassword(request)
      .pipe(finalize(() => this.loading = false))
      .subscribe({
        next: (response) => {
          this.requestSent = true;
          this.snackBar.open(response.message, 'Close', {
            duration: 5000
          });
        },
        error: (error) => {
          this.snackBar.open(
            'Request failed: ' + error.message, 
            'Close', 
            { duration: 3000 }
          );
        }
      });
  }
  
  getErrorMessage(controlName: string): string {
    const control = this.forgotPasswordForm.get(controlName);
    
    if (control?.hasError('required')) {
      return 'You must enter a value';
    }
    
    if (controlName === 'email' && control?.hasError('email')) {
      return 'Please enter a valid email address';
    }
    
    return '';
  }
  
  backToLogin(): void {
    this.router.navigate(['/login']);
  }
}
