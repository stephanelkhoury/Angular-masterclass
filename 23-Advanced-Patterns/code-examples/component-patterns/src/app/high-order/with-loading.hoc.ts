import { Component, Input, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap, catchError, finalize } from 'rxjs/operators';

/**
 * Higher-Order Component (HOC) function
 * 
 * This function takes a component and returns a new component that wraps the original
 * with additional loading functionality
 */
export function withLoading<T>(WrappedComponent: any, loadingTemplate: string = defaultLoadingTemplate()) {
  @Component({
    selector: 'app-with-loading',
    template: `
      <div class="with-loading-container">
        <div *ngIf="loading" [innerHTML]="loadingTemplate"></div>
        <div *ngIf="error" class="error-container">
          <div class="alert alert-danger">
            {{ error }}
            <button class="btn btn-sm btn-outline-danger ms-2" (click)="retry()">Retry</button>
          </div>
        </div>
        <ng-container #vcr></ng-container>
        <div *ngIf="!loading && !error" [style.display]="loading ? 'none' : 'block'">
          <ng-content></ng-content>
        </div>
      </div>
    `,
    styles: [`
      .with-loading-container {
        position: relative;
        min-height: 100px;
      }
      .error-container {
        padding: 15px;
        border-radius: 4px;
        margin-bottom: 15px;
      }
    `]
  })
  class WithLoadingComponent<T> implements OnInit {
    @Input() dataSource!: Observable<T>;
    @Input() minDelay: number = 500;
    @ViewChild('vcr', { read: ViewContainerRef }) vcr!: ViewContainerRef;
    
    loading: boolean = true;
    error: string | null = null;
    data: T | null = null;
    loadingTemplate: string = loadingTemplate;
    
    private componentRef: any;
    
    constructor(private componentFactoryResolver: ComponentFactoryResolver) {}
    
    ngOnInit(): void {
      this.loadData();
    }
    
    loadData(): void {
      this.loading = true;
      this.error = null;
      
      // Add a minimum delay to avoid flickering for fast responses
      this.dataSource.pipe(
        delay(this.minDelay),
        tap((data: T) => {
          this.data = data;
          this.renderWrappedComponent();
        }),
        catchError(err => {
          this.error = err.message || 'An error occurred while loading data';
          return of(null);
        }),
        finalize(() => {
          this.loading = false;
        })
      ).subscribe();
    }
    
    retry(): void {
      this.loadData();
    }
    
    private renderWrappedComponent(): void {
      if (!this.vcr) return;
      
      // Clear previous content
      this.vcr.clear();
      
      // Create the wrapped component
      const factory = this.componentFactoryResolver.resolveComponentFactory(WrappedComponent);
      this.componentRef = this.vcr.createComponent(factory);
      
      // Pass our data to it
      Object.assign(this.componentRef.instance, { data: this.data });
    }
    
    ngOnDestroy(): void {
      if (this.componentRef) {
        this.componentRef.destroy();
      }
    }
  }
  
  return WithLoadingComponent;
}

/** Default loading spinner template */
function defaultLoadingTemplate(): string {
  return `
    <div style="display: flex; justify-content: center; align-items: center; min-height: 200px;">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  `;
}