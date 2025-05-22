import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  
  constructor(private snackBar: MatSnackBar) {}

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
}
