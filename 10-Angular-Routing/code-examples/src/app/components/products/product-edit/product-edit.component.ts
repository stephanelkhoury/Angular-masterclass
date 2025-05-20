// components/products/product-edit/product-edit.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../../../models/product.model';
import { ProductService } from '../../../services/product.service';
import { CanComponentDeactivate } from '../../../guards/can-deactivate.guard';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit, CanComponentDeactivate {
  product: Product = {} as Product;
  productForm!: FormGroup;
  hasUnsavedChanges = false;
  
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}
  
  ngOnInit(): void {
    // Initialize form
    this.initForm();
    
    // Get product ID from route parameters
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.loadProduct(id);
      }
    });
  }
  
  initForm(): void {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0.01)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      imageUrl: ['', [Validators.required, Validators.pattern('^https?://.*$')]],
      category: ['', Validators.required]
    });
  }
  
  loadProduct(id: string): void {
    this.productService.getProduct(id).subscribe(product => {
      this.product = product;
      
      // Populate form with product data
      this.productForm.patchValue({
        name: product.name,
        price: product.price,
        description: product.description,
        imageUrl: product.imageUrl,
        category: product.category
      });
      
      // Reset unsaved changes tracker
      this.hasUnsavedChanges = false;
    });
  }
  
  onFormValueChanged(): void {
    this.hasUnsavedChanges = true;
  }
  
  onSubmit(): void {
    if (this.productForm.invalid) {
      return;
    }
    
    const updatedProduct: Product = {
      ...this.product,
      ...this.productForm.value
    };
    
    this.productService.updateProduct(this.product.id, updatedProduct).subscribe(() => {
      // Mark form as saved
      this.hasUnsavedChanges = false;
      
      // Navigate back to product detail
      this.router.navigate(['/products', this.product.id]);
    });
  }
  
  cancel(): void {
    // Navigate back to product detail
    this.router.navigate(['/products', this.product.id]);
  }
  
  // Implementation for CanDeactivate guard
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.hasUnsavedChanges) {
      return confirm('You have unsaved changes! If you leave, your changes will be lost.');
    }
    return true;
  }
}
