import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { ProductService } from '../../../core/services/product.service';
import { Product } from '../../../models/product.model';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product?: Product;
  loading = true;
  error: string | null = null;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}
  
  ngOnInit(): void {
    this.loadProduct();
  }
  
  loadProduct(): void {
    this.loading = true;
    this.error = null;
    
    const productId = this.route.snapshot.paramMap.get('id');
    
    if (!productId) {
      this.error = 'Product ID not found';
      this.loading = false;
      return;
    }
    
    this.productService.getProductById(productId).subscribe({
      next: (product) => {
        if (product) {
          this.product = product;
        } else {
          this.error = 'Product not found';
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading product details', err);
        this.error = 'Failed to load product details. Please try again later.';
        this.loading = false;
      }
    });
  }
  
  editProduct(): void {
    if (this.product) {
      this.router.navigate(['/products', this.product.id, 'edit']);
    }
  }
  
  deleteProduct(): void {
    if (!this.product) return;
    
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: {
        title: 'Delete Product',
        message: `Are you sure you want to delete ${this.product.name}? This action cannot be undone.`,
        confirmText: 'Delete',
        cancelText: 'Cancel'
      }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if (result && this.product) {
        this.productService.deleteProduct(this.product.id).subscribe({
          next: () => {
            this.snackBar.open(`Product ${this.product?.name} has been deleted`, 'Close', {
              duration: 3000
            });
            this.router.navigate(['/products']);
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
  
  goBack(): void {
    this.router.navigate(['/products']);
  }
  
  getFormattedDate(date: Date): string {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
  
  getDisplayPrice(): string {
    if (!this.product) return '';
    
    if (this.product.salePrice) {
      return `$${this.product.salePrice.toFixed(2)} <span class="original-price">$${this.product.price.toFixed(2)}</span>`;
    }
    return `$${this.product.price.toFixed(2)}`;
  }
  
  getStockStatusClass(): string {
    if (!this.product) return '';
    
    if (this.product.stock <= 0) {
      return 'out-of-stock';
    } else if (this.product.stock < 10) {
      return 'low-stock';
    } else {
      return 'in-stock';
    }
  }
  
  getStockStatusText(): string {
    if (!this.product) return '';
    
    if (this.product.stock <= 0) {
      return 'Out of Stock';
    } else if (this.product.stock < 10) {
      return 'Low Stock';
    } else {
      return 'In Stock';
    }
  }
}
