import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

// Material Module
import { MaterialModule } from './shared/material.module';

// App Components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Core Components
import { NavbarComponent } from './core/navbar/navbar.component';
import { SidenavComponent } from './core/sidenav/sidenav.component';
import { ThemeTogglerComponent } from './core/theme-toggler/theme-toggler.component';

// Feature Components
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { StatCardComponent } from './features/dashboard/stat-card/stat-card.component';
import { ChartCardComponent } from './features/dashboard/chart-card/chart-card.component';
import { RecentActivityComponent } from './features/dashboard/recent-activity/recent-activity.component';

// Auth Components
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { ForgotPasswordComponent } from './features/auth/forgot-password/forgot-password.component';

// User Components
import { UserListComponent } from './features/users/user-list/user-list.component';
import { UserDetailComponent } from './features/users/user-detail/user-detail.component';
import { UserFormComponent } from './features/users/user-form/user-form.component';

// Product Components
import { ProductListComponent } from './features/products/product-list/product-list.component';
import { ProductDetailComponent } from './features/products/product-detail/product-detail.component';
import { ProductFormComponent } from './features/products/product-form/product-form.component';

// Shared Components
import { ConfirmDialogComponent } from './shared/components/confirm-dialog/confirm-dialog.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    ThemeTogglerComponent,
    DashboardComponent,
    StatCardComponent,
    ChartCardComponent,
    RecentActivityComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    UserListComponent,
    UserDetailComponent,
    UserFormComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductFormComponent,
    ConfirmDialogComponent,
    NotFoundComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
