import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ProductService } from '../../../core/services/product.service';
import { Product, ProductCategory } from '../../../models/product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  productForm!: FormGroup;
  productId: string | null = null;
  isEditMode = false;
  loading = false;
  submitting = false;
  error: string | null = null;
  categories$!: Observable<ProductCategory[]>;
  
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private snackBar: MatSnackBar
  ) {}
  
  ngOnInit(): void {
    this.initForm();
    this.categories$ = this.productService.getCategories();
    
    this.productId = this.route.snapshot.paramMap.get('id');
    this.isEditMode = !!this.productId;
    
    if (this.isEditMode && this.productId) {
      this.loadProductData();
    }
  }
  
  initForm(): void {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.minLength(20)]],
      price: [0, [Validators.required, Validators.min(0)]],
      salePrice: [null, [Validators.min(0)]],
      imageUrl: ['assets/images/products/placeholder.jpg', [Validators.required]],
      category: ['', [Validators.required]],
      stock: [0, [Validators.required, Validators.min(0)]],
      sku: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9-]+$/)]],
      featured: [false]
    });
  }
  
  loadProductData(): void {
    if (!this.productId) return;
    
    this.loading = true;
    this.error = null;
    
    this.productService.getProductById(this.productId).subscribe({
      next: (product) => {
        if (product) {
          this.productForm.patchValue({
            name: product.name,
            description: product.description,
            price: product.price,
            salePrice: product.salePrice,
            imageUrl: product.imageUrl,
            category: product.category,
            stock: product.stock,
            sku: product.sku,
            featured: product.featured
          });
        } else {
          this.error = 'Product not found';
          this.router.navigate(['/products']);
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading product data', err);
        this.error = 'Failed to load product data. Please try again later.';
        this.loading = false;
      }
    });
  }
  
  onSubmit(): void {
    if (this.productForm.invalid) {
      this.markFormGroupTouched(this.productForm);
      return;
    }
    
    this.submitting = true;
    
    const productData = this.productForm.value;
    
    // Handle null or empty salePrice
    if (!productData.salePrice) {
      delete productData.salePrice;
    }
    
    if (this.isEditMode && this.productId) {
      this.updateProduct(productData);
    } else {
      this.createProduct(productData);
    }
  }
  
  createProduct(productData: Partial<Product>): void {
    this.productService.createProduct(productData).subscribe({
      next: (product) => {
        this.snackBar.open('Product created successfully', 'Close', {
          duration: 3000
        });
        this.router.navigate(['/products', product.id]);
      },
      error: (err) => {
        console.error('Error creating product', err);
        this.snackBar.open('Failed to create product. Please try again.', 'Close', {
          duration: 3000
        });
        this.submitting = false;
      }
    });
  }
  
  updateProduct(productData: Partial<Product>): void {
    if (!this.productId) return;
    
    this.productService.updateProduct(this.productId, productData).subscribe({
      next: (product) => {
        this.snackBar.open('Product updated successfully', 'Close', {
          duration: 3000
        });
        this.router.navigate(['/products', product.id]);
      },
      error: (err) => {
        console.error('Error updating product', err);
        this.snackBar.open('Failed to update product. Please try again.', 'Close', {
          duration: 3000
        });
        this.submitting = false;
      }
    });
  }
  
  cancel(): void {
    if (this.isEditMode && this.productId) {
      this.router.navigate(['/products', this.productId]);
    } else {
      this.router.navigate(['/products']);
    }
  }
  
  // Helper method to mark all controls in a form group as touched
  markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
  
  // Helper methods for form validation
  isFieldInvalid(fieldName: string): boolean {
    const field = this.productForm.get(fieldName);
    return !!field && field.invalid && (field.dirty || field.touched);
  }
  
  getErrorMessage(fieldName: string): string {
    const field = this.productForm.get(fieldName);
    
    if (!field) return '';
    
    if (field.hasError('required')) {
      return 'This field is required';
    }
    
    if (field.hasError('minlength')) {
      const requiredLength = field.getError('minlength').requiredLength;
      return `Minimum length is ${requiredLength} characters`;
    }
    
    if (field.hasError('maxlength')) {
      const requiredLength = field.getError('maxlength').requiredLength;
      return `Maximum length is ${requiredLength} characters`;
    }
    
    if (field.hasError('min')) {
      const min = field.getError('min').min;
      return `Value must be at least ${min}`;
    }
    
    if (field.hasError('pattern')) {
      if (fieldName === 'sku') {
        return 'SKU can only contain letters, numbers, and hyphens';
      }
      return 'Invalid format';
    }
    
    return 'Invalid field';
  }
  
  // Helper method for price validation
  validateSalePrice(): void {
    const priceControl = this.productForm.get('price');
    const salePriceControl = this.productForm.get('salePrice');
    
    if (!priceControl || !salePriceControl || !salePriceControl.value) return;
    
    const price = priceControl.value;
    const salePrice = salePriceControl.value;
    
    if (salePrice >= price) {
      salePriceControl.setErrors({ invalidSalePrice: true });
    } else {
      // Clear the custom error if it exists
      const errors = { ...salePriceControl.errors };
      if (errors) {
        delete errors['invalidSalePrice'];
        salePriceControl.setErrors(Object.keys(errors).length ? errors : null);
      }
    }
  }
}
