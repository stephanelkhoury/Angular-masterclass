import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.scss']
})
export class HeroBannerComponent {
  @Output() search = new EventEmitter<string>();
  
  searchControl = new FormControl('');
  
  slides = [
    {
      title: 'Summer Collection 2025',
      subtitle: 'New Arrivals',
      description: 'Discover the latest trends for this season. Up to 40% off on selected items.',
      buttonText: 'Shop Now',
      buttonLink: '/products?category=summer',
      imageSrc: 'assets/images/banners/summer-collection.jpg'
    },
    {
      title: 'Tech Gadgets',
      subtitle: 'Latest Electronics',
      description: 'Explore our wide range of cutting-edge electronics and gadgets.',
      buttonText: 'Discover Now',
      buttonLink: '/products?category=electronics',
      imageSrc: 'assets/images/banners/tech-gadgets.jpg'
    },
    {
      title: 'Home Essentials',
      subtitle: 'Make Your Home Beautiful',
      description: 'Find everything you need to create your dream living space.',
      buttonText: 'Shop Collection',
      buttonLink: '/products?category=home',
      imageSrc: 'assets/images/banners/home-essentials.jpg'
    }
  ];
  
  currentSlideIndex = 0;
  
  constructor() {
    // Auto-rotate slides every 5 seconds
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }
  
  onSearch(): void {
    this.search.emit(this.searchControl.value || '');
    this.searchControl.setValue('');
  }
  
  previousSlide(): void {
    this.currentSlideIndex = this.currentSlideIndex === 0 ? 
      this.slides.length - 1 : 
      this.currentSlideIndex - 1;
  }
  
  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }
  
  goToSlide(index: number): void {
    this.currentSlideIndex = index;
  }
}
