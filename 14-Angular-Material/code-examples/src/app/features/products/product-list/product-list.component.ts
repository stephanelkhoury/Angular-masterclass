import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ProductService } from '../../../core/services/product.service';
import { Product } from '../../../models/product.model';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['image', 'name', 'category', 'price', 'stock', 'featured', 'actions'];
  dataSource = new MatTableDataSource<Product>([]);
  loading = true;
  error: string | null = null;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(
    private productService: ProductService,
    private router: Router,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}
  
  ngOnInit(): void {
    this.loadProducts();
  }
  
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
    // Custom sort for price that handles salePrice when available
    this.dataSource.sortingDataAccessor = (item: Product, property: string) => {
      switch (property) {
        case 'price':
          return item.salePrice || item.price;
        default:
          return item[property as keyof Product];
      }
    };
  }
  
  loadProducts(): void {
    this.loading = true;
    this.error = null;
    
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.dataSource.data = products;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading products', err);
        this.error = 'Failed to load products. Please try again later.';
        this.loading = false;
      }
    });
  }
  
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  viewProduct(productId: string): void {
    this.router.navigate(['/products', productId]);
  }
  
  editProduct(productId: string): void {
    this.router.navigate(['/products', productId, 'edit']);
  }
  
  deleteProduct(product: Product): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: {
        title: 'Delete Product',
        message: `Are you sure you want to delete ${product.name}? This action cannot be undone.`,
        confirmText: 'Delete',
        cancelText: 'Cancel'
      }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.productService.deleteProduct(product.id).subscribe({
          next: () => {
            this.snackBar.open(`Product ${product.name} has been deleted`, 'Close', {
              duration: 3000
            });
            this.loadProducts(); // Refresh the list
          },
          error: (err) => {
            console.error('Error deleting product', err);
            this.snackBar.open('Failed to delete product. Please try again later.', 'Close', {
              duration: 3000
            });
          }
        });
      }
    });
  }
  
  createNewProduct(): void {
    this.router.navigate(['/products/new']);
  }
  
  refresh(): void {
    this.loadProducts();
  }
  
  getDisplayPrice(product: Product): string {
    if (product.salePrice) {
      return `$${product.salePrice.toFixed(2)} <span class="original-price">$${product.price.toFixed(2)}</span>`;
    }
    return `$${product.price.toFixed(2)}`;
  }
  
  getStockStatusClass(stock: number): string {
    if (stock <= 0) {
      return 'out-of-stock';
    } else if (stock < 10) {
      return 'low-stock';
    } else {
      return 'in-stock';
    }
  }
  
  getStockStatusText(stock: number): string {
    if (stock <= 0) {
      return 'Out of Stock';
    } else if (stock < 10) {
      return 'Low Stock';
    } else {
      return 'In Stock';
    }
  }
}
