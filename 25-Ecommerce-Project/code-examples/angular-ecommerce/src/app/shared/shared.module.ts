import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Angular Material Imports
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';

// Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { QuantitySelectorComponent } from './components/quantity-selector/quantity-selector.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

// Pipes
import { TruncatePipe } from './pipes/truncate.pipe';
import { PricePipe } from './pipes/price.pipe';

// Directives
import { HighlightDirective } from './directives/highlight.directive';
import { LazyImgDirective } from './directives/lazy-img.directive';

const materialModules = [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatSnackBarModule,
  MatBadgeModule,
  MatMenuModule,
  MatToolbarModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatDividerModule,
  MatListModule,
  MatStepperModule,
  MatExpansionModule,
  MatChipsModule
];

const components = [
  HeaderComponent,
  FooterComponent,
  LoadingSpinnerComponent,
  ProductCardComponent,
  StarRatingComponent,
  NotFoundComponent,
  QuantitySelectorComponent,
  ConfirmDialogComponent
];

const pipes = [
  TruncatePipe,
  PricePipe
];

const directives = [
  HighlightDirective,
  LazyImgDirective
];

@NgModule({
  declarations: [
    ...components,
    ...pipes,
    ...directives
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ...materialModules
  ],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    ...materialModules,
    ...components,
    ...pipes,
    ...directives
  ]
})
export class SharedModule { }
