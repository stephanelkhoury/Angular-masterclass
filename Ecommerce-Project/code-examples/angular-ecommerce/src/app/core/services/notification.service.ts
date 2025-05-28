import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  
  constructor(private snackBar: MatSnackBar) {}

  show(message: string, duration: number = 3000): void {
    this.snackBar.open(message, 'Close', {
      duration: duration,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }

  success(message: string, duration: number = 3000): void {
    this.snackBar.open(message, 'Close', {
      duration: duration,
      panelClass: ['notification-success'],
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }

  error(message: string, duration: number = 5000): void {
    this.snackBar.open(message, 'Close', {
      duration: duration,
      panelClass: ['notification-error'],
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }

  info(message: string, duration: number = 4000): void {
    this.snackBar.open(message, 'Close', {
      duration: duration,
      panelClass: ['notification-info'],
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }

  warn(message: string, duration: number = 4000): void {
    this.snackBar.open(message, 'Close', {
      duration: duration,
      panelClass: ['notification-warn'],
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }

  // Aliases for consistency with other parts of the app
  showSuccess(message: string, duration: number = 3000): void {
    this.success(message, duration);
  }

  showError(message: string, duration: number = 5000): void {
    this.error(message, duration);
  }

  showInfo(message: string, duration: number = 4000): void {
    this.info(message, duration);
  }

  showWarning(message: string, duration: number = 4000): void {
    this.warn(message, duration);
  }
}
