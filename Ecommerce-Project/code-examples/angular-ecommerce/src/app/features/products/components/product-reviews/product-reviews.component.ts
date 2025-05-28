import { Component, Input } from '@angular/core';
import { Review } from '../../../../core/models/product.model';

@Component({
  selector: 'app-product-reviews',
  template: `
    <div class="reviews-container">
      <div *ngIf="reviews && reviews.length > 0; else noReviews">
        <div class="reviews-summary">
          <div class="average-rating">
            <div class="rating-number">{{ averageRating.toFixed(1) }}</div>
            <div class="stars">
              <span class="filled-stars" [style.width.%]="(averageRating / 5) * 100">★★★★★</span>
              <span class="empty-stars">★★★★★</span>
            </div>
            <div class="total-reviews">{{ reviews.length }} {{ reviews.length === 1 ? 'review' : 'reviews' }}</div>
          </div>
          
          <div class="rating-distribution">
            <div class="rating-bar" *ngFor="let star of [5,4,3,2,1]">
              <span class="rating-label">{{ star }} stars</span>
              <div class="progress-bar">
                <div class="progress" [style.width.%]="getRatingPercentage(star)"></div>
              </div>
              <span class="rating-count">{{ getRatingCount(star) }}</span>
            </div>
          </div>
        </div>
        
        <div class="reviews-list">
          <div class="review-item" *ngFor="let review of reviews">
            <div class="review-header">
              <div class="reviewer-info">
                <img 
                  [src]="review.userAvatar || 'assets/images/default-avatar.png'" 
                  [alt]="review.userName"
                  class="reviewer-avatar"
                >
                <div>
                  <div class="reviewer-name">{{ review.userName }}</div>
                  <div class="review-date">{{ review.createdAt | date:'mediumDate' }}</div>
                </div>
              </div>
              <div class="review-rating">
                <span class="stars">
                  <span class="filled-stars" [style.width.%]="(review.rating / 5) * 100">★★★★★</span>
                  <span class="empty-stars">★★★★★</span>
                </span>
              </div>
            </div>
            
            <h4 class="review-title">{{ review.title }}</h4>
            <p class="review-content">{{ review.comment }}</p>
            
            <div class="review-footer">
              <div class="helpful-section">
                <span>Was this review helpful?</span>
                <button class="helpful-btn">Yes</button>
                <button class="helpful-btn">No</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ng-template #noReviews>
        <div class="no-reviews">
          <p>This product has no reviews yet. Be the first to share your experience!</p>
        </div>
      </ng-template>
    </div>
  `,
  styles: [`
    .reviews-container {
      margin-top: 20px;
    }
    
    .reviews-summary {
      display: flex;
      margin-bottom: 30px;
      padding-bottom: 20px;
      border-bottom: 1px solid #eee;
    }
    
    .average-rating {
      flex: 0 0 200px;
      text-align: center;
      padding-right: 30px;
    }
    
    .rating-number {
      font-size: 3rem;
      font-weight: bold;
      color: #333;
      margin-bottom: 5px;
    }
    
    .stars {
      position: relative;
      display: inline-block;
      color: #ddd;
      font-size: 1.5rem;
    }
    
    .filled-stars {
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      color: #FFD700;
      white-space: nowrap;
    }
    
    .total-reviews {
      margin-top: 5px;
      color: #777;
      font-size: 0.9rem;
    }
    
    .rating-distribution {
      flex: 1;
    }
    
    .rating-bar {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
    }
    
    .rating-label {
      flex: 0 0 60px;
      font-size: 0.9rem;
      color: #666;
    }
    
    .progress-bar {
      flex: 1;
      height: 10px;
      background-color: #eee;
      border-radius: 5px;
      overflow: hidden;
      margin: 0 10px;
    }
    
    .progress {
      height: 100%;
      background-color: #1976d2;
    }
    
    .rating-count {
      flex: 0 0 30px;
      font-size: 0.9rem;
      color: #666;
      text-align: right;
    }
    
    .reviews-list {
      margin-top: 20px;
    }
    
    .review-item {
      padding: 20px 0;
      border-bottom: 1px solid #eee;
    }
    
    .review-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
    }
    
    .reviewer-info {
      display: flex;
      align-items: center;
    }
    
    .reviewer-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
      object-fit: cover;
    }
    
    .reviewer-name {
      font-weight: 500;
      color: #333;
    }
    
    .review-date {
      font-size: 0.8rem;
      color: #999;
    }
    
    .review-title {
      margin: 0 0 10px 0;
      font-size: 1.1rem;
      color: #333;
    }
    
    .review-content {
      color: #555;
      line-height: 1.5;
      margin-bottom: 15px;
    }
    
    .review-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.9rem;
    }
    
    .verified-badge {
      color: #4CAF50;
      font-weight: 500;
    }
    
    .helpful-section {
      color: #777;
    }
    
    .helpful-btn {
      background: none;
      border: 1px solid #ddd;
      border-radius: 3px;
      padding: 3px 8px;
      margin-left: 10px;
      cursor: pointer;
      color: #555;
      font-size: 0.8rem;
    }
    
    .helpful-btn:hover {
      background-color: #f5f5f5;
    }
    
    .no-reviews {
      text-align: center;
      padding: 40px 0;
      color: #777;
    }
  `]
})
export class ProductReviewsComponent {
  @Input() reviews: Review[] = [];
  
  get averageRating(): number {
    if (!this.reviews || this.reviews.length === 0) return 0;
    const sum = this.reviews.reduce((total, review) => total + review.rating, 0);
    return sum / this.reviews.length;
  }
  
  getRatingCount(stars: number): number {
    if (!this.reviews) return 0;
    return this.reviews.filter(review => review.rating === stars).length;
  }
  
  getRatingPercentage(stars: number): number {
    if (!this.reviews || this.reviews.length === 0) return 0;
    return (this.getRatingCount(stars) / this.reviews.length) * 100;
  }
}
