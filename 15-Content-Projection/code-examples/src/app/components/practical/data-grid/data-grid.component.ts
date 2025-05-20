import { Component, ContentChildren, ElementRef, EventEmitter, Input, Output, QueryList, TemplateRef } from '@angular/core';
import { DataHeaderDirective } from './data-header.directive';
import { DataCellDirective } from './data-cell.directive';

@Component({
  selector: 'app-data-grid',
  template: `
    <div class="data-grid-container">
      <table class="data-grid">
        <thead>
          <tr>
            <ng-container *ngFor="let header of headers">
              <th [ngClass]="getColumnClass(header.appDataHeader)">
                <ng-container *ngTemplateOutlet="header.template"></ng-container>
              </th>
            </ng-container>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let item of data; let i = index" [ngClass]="{ 'even-row': i % 2 === 0 }">
            <ng-container *ngFor="let cell of cells">
              <td [ngClass]="getColumnClass(cell.appDataCell)">
                <ng-container 
                  *ngTemplateOutlet="cell.template; context: { $implicit: item, index: i }">
                </ng-container>
              </td>
            </ng-container>
          </tr>
        </tbody>
      </table>
      
      <div *ngIf="data && data.length === 0" class="no-data">
        <ng-content select="[no-data]"></ng-content>
        <div *ngIf="!hasNoDataContent">No data available</div>
      </div>
      
      <div class="pagination" *ngIf="pagination && data && data.length > 0">
        <button 
          class="pagination-btn" 
          [disabled]="currentPage === 1" 
          (click)="onPageChange(currentPage - 1)">
          Previous
        </button>
        
        <span class="pagination-info">
          Page {{ currentPage }} of {{ totalPages }}
        </span>
        
        <button 
          class="pagination-btn" 
          [disabled]="currentPage === totalPages" 
          (click)="onPageChange(currentPage + 1)">
          Next
        </button>
      </div>
    </div>
  `,
  styles: [`
    .data-grid-container {
      width: 100%;
      overflow-x: auto;
    }
    
    .data-grid {
      width: 100%;
      border-collapse: collapse;
      border-spacing: 0;
    }
    
    .data-grid th, .data-grid td {
      padding: 12px 16px;
      text-align: left;
      border-bottom: 1px solid #e0e0e0;
    }
    
    .data-grid th {
      background-color: #f5f5f5;
      font-weight: 500;
      white-space: nowrap;
      position: sticky;
      top: 0;
      z-index: 1;
    }
    
    .even-row {
      background-color: #fafafa;
    }
    
    tr:hover {
      background-color: #f0f0f0;
    }
    
    .column-numeric {
      text-align: right;
    }
    
    .column-centered {
      text-align: center;
    }
    
    .no-data {
      padding: 32px;
      text-align: center;
      border: 1px solid #e0e0e0;
      border-top: none;
      color: #757575;
    }
    
    .pagination {
      margin-top: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 16px;
    }
    
    .pagination-btn {
      padding: 8px 12px;
      border: 1px solid #e0e0e0;
      background-color: white;
      border-radius: 4px;
      cursor: pointer;
    }
    
    .pagination-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    
    .pagination-btn:hover:not(:disabled) {
      background-color: #f5f5f5;
    }
    
    .pagination-info {
      color: #757575;
    }
  `]
})
export class DataGridComponent<T> {
  @Input() data: T[] = [];
  @Input() columnConfig: { [key: string]: { class?: string } } = {};
  @Input() pagination: boolean = false;
  @Input() pageSize: number = 10;
  @Input() currentPage: number = 1;
  @Input() totalItems?: number;
  
  @ContentChildren(DataHeaderDirective) headerTemplates!: QueryList<DataHeaderDirective>;
  @ContentChildren(DataCellDirective) cellTemplates!: QueryList<DataCellDirective>;
  
  get headers(): DataHeaderDirective[] {
    return this.headerTemplates ? this.headerTemplates.toArray() : [];
  }
  
  get cells(): DataCellDirective[] {
    return this.cellTemplates ? this.cellTemplates.toArray() : [];
  }
  
  get hasNoDataContent(): boolean {
    // Check if there is custom no-data content projected
    return !!this.element.nativeElement.querySelector('[no-data]');
  }
  
  get totalPages(): number {
    if (this.totalItems) {
      return Math.ceil(this.totalItems / this.pageSize);
    }
    return Math.ceil(this.data.length / this.pageSize);
  }
  
  constructor(private element: ElementRef) {}
  
  getColumnClass(columnName: string): { [key: string]: boolean } {
    const config = this.columnConfig[columnName] || {};
    return {
      [`column-${columnName}`]: true,
      'column-numeric': config.class === 'numeric',
      'column-centered': config.class === 'centered',
    };
  }
  
  onPageChange(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    
    // Emit a page change event that parent components can listen for
    this.pageChange.emit({
      page: this.currentPage,
      pageSize: this.pageSize
    });
  }
  
  // PageChange event emitter
  @Output() pageChange = new EventEmitter<{page: number, pageSize: number}>();
}
