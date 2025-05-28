import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { PromoBannerComponent } from './components/promo-banner/promo-banner.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { TestimonialSliderComponent } from './components/testimonial-slider/testimonial-slider.component';
import { NewsletterSignupComponent } from './components/newsletter-signup/newsletter-signup.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroBannerComponent,
    FeaturedProductsComponent,
    PromoBannerComponent,
    CategoryCardComponent,
    TestimonialSliderComponent,
    NewsletterSignupComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
