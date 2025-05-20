// components/products/product-detail/product-detail.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../models/product.model';
import { ProductService } from '../../../services/product.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product = {} as Product;
  prevProductId: string | null = null;
  nextProductId: string | null = null;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}
  
  ngOnInit(): void {
    // Method 1: Using router resolver (preferred for pre-loading data)
    this.route.data.subscribe(data => {
      this.product = data['product'];
      this.loadAdjacentProducts();
    });
    
    // Method 2: Using route params directly (alternative approach)
    /*
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        return id ? this.productService.getProduct(id) : of({} as Product);
      })
    ).subscribe(product => {
      this.product = product;
      this.loadAdjacentProducts();
    });
    */
  }
  
  loadAdjacentProducts(): void {
    this.productService.getProducts().subscribe(products => {
      if (!this.product.id) return;
      
      const currentIndex = products.findIndex(p => p.id === this.product.id);
      if (currentIndex === -1) return;
      
      // Find previous and next product IDs
      this.prevProductId = currentIndex > 0 ? products[currentIndex - 1].id : null;
      this.nextProductId = currentIndex < products.length - 1 ? products[currentIndex + 1].id : null;
    });
  }
  
  gotoPreviousProduct(): void {
    if (this.prevProductId) {
      this.router.navigate(['/products', this.prevProductId]);
    }
  }
  
  gotoNextProduct(): void {
    if (this.nextProductId) {
      this.router.navigate(['/products', this.nextProductId]);
    }
  }
  
  goBackToList(): void {
    // Method 1: Simple navigation
    // this.router.navigate(['/products']);
    
    // Method 2: Use Location service to go back to previous page
    window.history.back();
  }
}
