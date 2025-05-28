import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFiltersComponent } from './components/product-filters/product-filters.component';
import { ProductSortComponent } from './components/product-sort/product-sort.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { ProductReviewsComponent } from './components/product-reviews/product-reviews.component';
import { AddReviewComponent } from './components/add-review/add-review.component';
import { CategoryMenuComponent } from './components/category-menu/category-menu.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailComponent,
    ProductFiltersComponent,
    ProductSortComponent,
    ProductGridComponent,
    ProductReviewsComponent,
    AddReviewComponent,
    CategoryMenuComponent
  ],
  imports: [
    SharedModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
