import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Review } from '../../../../core/models/product.model';

@Component({
  selector: 'app-add-review',
  template: `
    <div class="add-review-form">
      <h4>Write a Review</h4>
      <form [formGroup]="reviewForm" (ngSubmit)="onSubmit()">
        <div class="form-field">
          <label>Rating</label>
          <div class="star-rating-input">
            <button type="button" 
                    *ngFor="let star of [1,2,3,4,5]; let i = index"
                    [class.active]="rating >= star"
                    (click)="setRating(star)">
              ★
            </button>
          </div>
        </div>
        
        <div class="form-field">
          <label for="title">Review Title</label>
          <input type="text" id="title" formControlName="title" placeholder="Summarize your review">
        </div>
        
        <div class="form-field">
          <label for="content">Review</label>
          <textarea id="content" formControlName="content" rows="4" 
                   placeholder="Tell others about your experience with this product"></textarea>
        </div>
        
        <button type="submit" [disabled]="reviewForm.invalid">Submit Review</button>
      </form>
    </div>
  `,
  styles: [`
    .add-review-form {
      margin-top: 24px;
      padding: 24px;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
    }
    
    .form-field {
      margin-bottom: 16px;
    }
    
    .form-field label {
      display: block;
      margin-bottom: 4px;
      font-weight: 500;
    }
    
    .form-field input,
    .form-field textarea {
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    
    .star-rating-input button {
      background: none;
      border: none;
      font-size: 24px;
      color: #ddd;
      cursor: pointer;
      margin-right: 4px;
    }
    
    .star-rating-input button.active {
      color: #ffc107;
    }
    
    button[type="submit"] {
      background-color: #3f51b5;
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    
    button[type="submit"]:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  `]
})
export class AddReviewComponent {
  @Input() productId!: string;
  @Output() reviewSubmitted = new EventEmitter<Review>();
  
  reviewForm: FormGroup;
  rating = 0;
  
  constructor(private fb: FormBuilder) {
    this.reviewForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', [Validators.required, Validators.minLength(10)]],
      rating: [0, [Validators.required, Validators.min(1)]]
    });
  }
  
  setRating(star: number): void {
    this.rating = star;
    this.reviewForm.patchValue({ rating: star });
  }
  
  onSubmit(): void {
    if (this.reviewForm.valid) {
      const review: Review = {
        id: '', // Will be set by the service
        productId: this.productId,
        userId: '', // Should come from auth service
        userName: 'Anonymous User', // Should come from auth service
        rating: this.reviewForm.value.rating,
        title: this.reviewForm.value.title,
        comment: this.reviewForm.value.content,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      
      this.reviewSubmitted.emit(review);
      this.reviewForm.reset();
      this.rating = 0;
    }
  }
}
