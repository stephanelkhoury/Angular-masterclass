import { Component } from '@angular/core';

@Component({
  selector: 'app-promo-banner',
  templateUrl: './promo-banner.component.html',
  styleUrls: ['./promo-banner.component.scss']
})
export class PromoBannerComponent {
  promoData = {
    title: 'Summer Sale',
    subtitle: 'Special Offer',
    description: 'Get up to 40% off on selected items! Limited time offer.',
    buttonText: 'Shop Now',
    buttonLink: '/products?sale=true',
    backgroundImage: 'assets/images/banners/summer-sale.jpg'
  };
}
