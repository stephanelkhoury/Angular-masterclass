import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Order, CreateOrderRequest } from '../models/order.model';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = `${environment.apiUrl}/orders`;
  
  constructor(
    private http: HttpClient,
    private notificationService: NotificationService
  ) {}

  getOrders(page = 1, limit = 10): Observable<{ orders: Order[], totalCount: number }> {
    return this.http.get<{ orders: Order[], totalCount: number }>(
      `${this.apiUrl}?page=${page}&limit=${limit}`
    ).pipe(
      catchError(error => {
        this.notificationService.error('Failed to load your orders. Please try again.');
        return throwError(() => error);
      })
    );
  }

  getOrderById(id: string): Observable<Order> {
    return this.http.get<Order>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => {
        this.notificationService.error('Failed to load order details. Please try again.');
        return throwError(() => error);
      })
    );
  }

  createOrder(orderData: CreateOrderRequest): Observable<Order> {
    return this.http.post<Order>(this.apiUrl, orderData).pipe(
      tap(() => {
        this.notificationService.success('Order placed successfully!');
      }),
      catchError(error => {
        this.notificationService.error('Failed to place your order. Please try again.');
        return throwError(() => error);
      })
    );
  }

  cancelOrder(orderId: string, reason?: string): Observable<Order> {
    return this.http.post<Order>(
      `${this.apiUrl}/${orderId}/cancel`,
      { reason }
    ).pipe(
      tap(() => {
        this.notificationService.success('Order cancelled successfully.');
      }),
      catchError(error => {
        this.notificationService.error('Failed to cancel your order. Please try again.');
        return throwError(() => error);
      })
    );
  }
}
