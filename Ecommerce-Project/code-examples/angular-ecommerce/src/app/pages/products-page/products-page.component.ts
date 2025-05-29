import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap, tap, map as rxjsMap } from 'rxjs';
import { Product, PaginatedResponse } from '../../core/models/product.model';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  products$: Observable<Product[]>;
  pageTitle = 'All Products';
  
  // For potential pagination controls
  totalCount = 0;
  currentPage = 1;
  itemsPerPage = 10; // Default, can be updated from params or response

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    this.products$ = this.route.queryParams.pipe(
      tap(params => {
        const category = params['category'];
        const subcategory = params['subcategory'];
        const search = params['search'];
        this.currentPage = params['page'] ? +params['page'] : 1;
        // Update itemsPerPage if it's in queryParams too
        
        if (search) {
          this.pageTitle = `Search Results for "${search}"`;
        } else if (category) {
          this.pageTitle = `Products in ${this.capitalizeFirstLetter(category)}`;
        } else if (subcategory) {
           this.pageTitle = `Products in ${this.capitalizeFirstLetter(subcategory)}`;
        } else {
          this.pageTitle = 'All Products';
        }
      }),
      switchMap(params => {
        const category = params['category'];
        const subcategory = params['subcategory'];
        const search = params['search'];
        const page = params['page'] ? +params['page'] : 1;
        const limit = params['limit'] ? +params['limit'] : this.itemsPerPage;
        
        return this.productService.getProducts({ category, subcategory, search, page, limit });
      }),
      rxjsMap((response: PaginatedResponse<Product>) => { 
        this.totalCount = response.totalCount;
        this.currentPage = response.page;
        this.itemsPerPage = response.limit;
        return response.items; // Extract items for the template
      })
    );
  }

  ngOnInit(): void {
  }

  private capitalizeFirstLetter(str: string): string {
    if (!str) {
      return '';
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
