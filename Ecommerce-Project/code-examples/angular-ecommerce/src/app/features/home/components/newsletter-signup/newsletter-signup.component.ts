import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsletter-signup',
  template: `
    <section class="newsletter-section">
      <div class="newsletter-container">
        <div class="newsletter-content">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Stay updated with our latest products, exclusive offers, and shopping tips.</p>
          
          <form [formGroup]="newsletterForm" (ngSubmit)="onSubmit()" class="newsletter-form">
            <div class="form-group">
              <input 
                type="email" 
                formControlName="email" 
                placeholder="Your email address"
                [class.invalid]="submitted && f['email'].errors"
              >
              <button type="submit" [disabled]="loading">
                <span *ngIf="!loading">Subscribe</span>
                <span *ngIf="loading">Subscribing...</span>
              </button>
            </div>
            
            <div class="error-message" *ngIf="submitted && f['email'].errors">
              <span *ngIf="f['email'].errors['required']">Email is required</span>
              <span *ngIf="f['email'].errors['email']">Please enter a valid email address</span>
            </div>
            
            <div class="success-message" *ngIf="success">
              Thank you for subscribing to our newsletter!
            </div>
          </form>
          
          <p class="privacy-note">By subscribing, you agree to our Privacy Policy and consent to receive our promotional emails.</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .newsletter-section {
      background-color: #f0f7ff;
      padding: 60px 20px;
    }
    
    .newsletter-container {
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
    }
    
    .newsletter-content h2 {
      margin-bottom: 15px;
      font-size: 2rem;
      color: #333;
    }
    
    .newsletter-content p {
      margin-bottom: 30px;
      color: #666;
      font-size: 1.1rem;
    }
    
    .newsletter-form {
      margin-bottom: 20px;
    }
    
    .form-group {
      display: flex;
      max-width: 500px;
      margin: 0 auto;
    }
    
    input[type="email"] {
      flex: 1;
      padding: 15px;
      border: 1px solid #ddd;
      border-radius: 4px 0 0 4px;
      font-size: 1rem;
    }
    
    input[type="email"].invalid {
      border-color: #ff3b30;
    }
    
    button {
      padding: 0 25px;
      background-color: #1976d2;
      color: white;
      border: none;
      border-radius: 0 4px 4px 0;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    
    button:hover {
      background-color: #1565c0;
    }
    
    button:disabled {
      background-color: #90caf9;
      cursor: not-allowed;
    }
    
    .error-message {
      color: #ff3b30;
      margin-top: 10px;
      font-size: 0.9rem;
    }
    
    .success-message {
      color: #34c759;
      margin-top: 10px;
      font-size: 1rem;
    }
    
    .privacy-note {
      font-size: 0.8rem;
      color: #999;
      margin-top: 15px;
    }
  `]
})
export class NewsletterSignupComponent {
  newsletterForm: FormGroup;
  loading = false;
  submitted = false;
  success = false;
  
  constructor(private fb: FormBuilder) {
    this.newsletterForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  
  get f() { return this.newsletterForm.controls; }
  
  onSubmit() {
    this.submitted = true;
    
    if (this.newsletterForm.invalid) {
      return;
    }
    
    this.loading = true;
    
    // Simulate API call
    setTimeout(() => {
      this.loading = false;
      this.success = true;
      this.newsletterForm.reset();
      this.submitted = false;
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        this.success = false;
      }, 5000);
    }, 1500);
  }
}
