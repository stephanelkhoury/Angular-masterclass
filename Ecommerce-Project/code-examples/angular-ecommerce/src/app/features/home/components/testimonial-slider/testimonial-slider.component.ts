import { Component, OnInit } from '@angular/core';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

@Component({
  selector: 'app-testimonial-slider',
  template: `
    <section class="testimonial-section">
      <h2 class="section-title">What Our Customers Say</h2>
      
      <div class="testimonials-container">
        <div class="testimonial" *ngFor="let testimonial of testimonials; let i = index" [class.active]="currentIndex === i">
          <div class="testimonial-content">
            <p>"{{ testimonial.content }}"</p>
            <div class="testimonial-rating">
              <span *ngFor="let star of [1,2,3,4,5]" class="star" [class.filled]="star <= testimonial.rating">★</span>
            </div>
          </div>
          <div class="testimonial-author">
            <img [src]="testimonial.image" [alt]="testimonial.name" class="author-image">
            <div class="author-info">
              <h4>{{ testimonial.name }}</h4>
              <p>{{ testimonial.position }}, {{ testimonial.company }}</p>
            </div>
          </div>
        </div>
        
        <div class="navigation">
          <button class="nav-btn prev" (click)="prevTestimonial()">❮</button>
          <div class="dots">
            <span *ngFor="let _ of testimonials; let i = index" 
                  class="dot" 
                  [class.active]="currentIndex === i"
                  (click)="goToTestimonial(i)"></span>
          </div>
          <button class="nav-btn next" (click)="nextTestimonial()">❯</button>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .testimonial-section {
      padding: 60px 20px;
      background-color: #f9f9f9;
    }
    
    .section-title {
      text-align: center;
      margin-bottom: 40px;
      font-size: 2rem;
      color: #333;
    }
    
    .testimonials-container {
      max-width: 800px;
      margin: 0 auto;
      position: relative;
    }
    
    .testimonial {
      display: none;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 30px;
      margin-bottom: 30px;
    }
    
    .testimonial.active {
      display: flex;
    }
    
    .testimonial-content {
      margin-bottom: 30px;
    }
    
    .testimonial-content p {
      font-size: 1.2rem;
      line-height: 1.6;
      font-style: italic;
      color: #555;
    }
    
    .testimonial-rating {
      margin: 15px 0;
    }
    
    .star {
      font-size: 1.5rem;
      color: #ddd;
      margin: 0 2px;
    }
    
    .star.filled {
      color: #FFD700;
    }
    
    .testimonial-author {
      display: flex;
      align-items: center;
    }
    
    .author-image {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 15px;
    }
    
    .author-info h4 {
      margin: 0;
      font-size: 1.1rem;
      color: #333;
    }
    
    .author-info p {
      margin: 5px 0 0;
      font-size: 0.9rem;
      color: #777;
    }
    
    .navigation {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
    }
    
    .nav-btn {
      background: none;
      border: none;
      font-size: 1.5rem;
      color: #555;
      cursor: pointer;
      padding: 5px 10px;
    }
    
    .nav-btn:hover {
      color: #333;
    }
    
    .dots {
      display: flex;
      margin: 0 15px;
    }
    
    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #ddd;
      margin: 0 5px;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    
    .dot.active {
      background-color: #555;
    }
  `]
})
export class TestimonialSliderComponent implements OnInit {
  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'John Smith',
      position: 'Marketing Director',
      company: 'Tech Solutions',
      image: 'assets/images/testimonials/person1.jpg',
      content: 'This e-commerce platform has completely transformed our shopping experience. The interface is intuitive, and the product quality exceeds expectations. Will definitely be a returning customer!',
      rating: 5
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'UX Designer',
      company: 'Creative Labs',
      image: 'assets/images/testimonials/person2.jpg',
      content: 'I\'ve tried many online stores, but this one stands out for its user-friendly design and seamless checkout process. The customer service is also top-notch!',
      rating: 4
    },
    {
      id: 3,
      name: 'Michael Chen',
      position: 'Product Manager',
      company: 'Innovate Inc.',
      image: 'assets/images/testimonials/person3.jpg',
      content: 'The variety of products available here is impressive. I appreciate the detailed descriptions and honest reviews that help make informed purchasing decisions.',
      rating: 5
    }
  ];
  
  currentIndex = 0;
  
  ngOnInit() {
    this.startAutoSlide();
  }
  
  prevTestimonial() {
    this.currentIndex = this.currentIndex === 0 ? this.testimonials.length - 1 : this.currentIndex - 1;
  }
  
  nextTestimonial() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }
  
  goToTestimonial(index: number) {
    this.currentIndex = index;
  }
  
  private autoSlideInterval: any;
  
  private startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextTestimonial();
    }, 5000);
  }
  
  ngOnDestroy() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }
}
