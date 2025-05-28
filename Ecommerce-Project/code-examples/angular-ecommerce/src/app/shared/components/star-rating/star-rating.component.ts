import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  template: `
    <div class="star-rating" [class.interactive]="interactive">
      <mat-icon *ngFor="let star of stars; let i = index"
                (click)="onStarClick(i + 1)"
                (mouseenter)="interactive && onStarHover(i + 1)"
                (mouseleave)="interactive && onStarHover(0)">
        {{ getStarIcon(i + 1) }}
      </mat-icon>
      <span *ngIf="showRatingValue" class="rating-value">{{ rating | number:'1.1-1' }}</span>
      <span *ngIf="reviewCount !== undefined" class="review-count">({{ reviewCount }})</span>
    </div>
  `,
  styles: [`
    :host {
      /* Modern Design System - CSS Custom Properties */
      --star-size: 1.25rem;
      --star-gap: 0.125rem;
      --star-color-filled: #fbbf24;
      --star-color-empty: #e5e7eb;
      --star-color-hover: #f59e0b;
      --star-shadow: 0 2px 4px rgba(251, 191, 36, 0.2);
      --star-shadow-hover: 0 4px 8px rgba(251, 191, 36, 0.3);
      --star-transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      --rating-text-color: #6b7280;
      --rating-background: rgba(0, 0, 0, 0.05);
      --rating-border-radius: 6px;
    }
    
    .star-rating {
      display: inline-flex;
      align-items: center;
      gap: var(--star-gap);
    }
    
    .star-rating mat-icon {
      font-size: var(--star-size);
      width: var(--star-size);
      height: var(--star-size);
      color: var(--star-color-empty);
      transition: var(--star-transition);
      filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
    }
    
    .star-rating mat-icon.filled {
      color: var(--star-color-filled);
      filter: drop-shadow(var(--star-shadow));
      animation: starGlow 0.3s ease-out;
    }
    
    .star-rating mat-icon.half-filled {
      color: var(--star-color-filled);
      filter: drop-shadow(var(--star-shadow));
      background: linear-gradient(
        90deg,
        var(--star-color-filled) 50%,
        var(--star-color-empty) 50%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .star-rating.interactive mat-icon {
      cursor: pointer;
      position: relative;
    }
    
    .star-rating.interactive mat-icon:hover {
      color: var(--star-color-hover);
      filter: drop-shadow(var(--star-shadow-hover));
      transform: scale(1.1);
    }
    
    .star-rating.interactive mat-icon:active {
      transform: scale(0.95);
    }
    
    /* Ripple effect on click */
    .star-rating.interactive mat-icon::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      border-radius: 50%;
      background: rgba(251, 191, 36, 0.3);
      transform: translate(-50%, -50%);
      transition: width 0.3s ease, height 0.3s ease, opacity 0.3s ease;
      opacity: 0;
      pointer-events: none;
    }
    
    .star-rating.interactive mat-icon:active::after {
      width: 2rem;
      height: 2rem;
      opacity: 1;
    }
    
    .rating-value {
      margin-left: 0.5rem;
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--rating-text-color);
      background: var(--rating-background);
      padding: 0.125rem 0.375rem;
      border-radius: var(--rating-border-radius);
      backdrop-filter: blur(4px);
      transition: var(--star-transition);
    }
    
    .rating-value:hover {
      background: rgba(0, 0, 0, 0.08);
      transform: translateY(-1px);
    }
    
    .review-count {
      margin-left: 0.25rem;
      font-size: 0.8rem;
      color: var(--rating-text-color);
      opacity: 0.8;
      transition: var(--star-transition);
    }
    
    .review-count:hover {
      opacity: 1;
      color: #374151;
    }
    
    /* Size variations */
    :host.small {
      --star-size: 1rem;
      --star-gap: 0.0625rem;
    }
    
    :host.small .rating-value {
      font-size: 0.75rem;
      padding: 0.0625rem 0.25rem;
    }
    
    :host.small .review-count {
      font-size: 0.7rem;
    }
    
    :host.large {
      --star-size: 1.5rem;
      --star-gap: 0.25rem;
    }
    
    :host.large .rating-value {
      font-size: 1rem;
      padding: 0.25rem 0.5rem;
    }
    
    :host.large .review-count {
      font-size: 0.9rem;
    }
    
    /* Animation Keyframes */
    @keyframes starGlow {
      0% {
        filter: drop-shadow(var(--star-shadow));
        transform: scale(1);
      }
      50% {
        filter: drop-shadow(0 4px 12px rgba(251, 191, 36, 0.4));
        transform: scale(1.05);
      }
      100% {
        filter: drop-shadow(var(--star-shadow));
        transform: scale(1);
      }
    }
    
    /* Dark mode support */
    @media (prefers-color-scheme: dark) {
      :host {
        --star-color-empty: #4b5563;
        --rating-text-color: #d1d5db;
        --rating-background: rgba(255, 255, 255, 0.1);
      }
    }
    
    /* High contrast support */
    @media (prefers-contrast: high) {
      :host {
        --star-color-filled: #d97706;
        --star-color-empty: #6b7280;
        --rating-text-color: #000000;
        --rating-background: rgba(255, 255, 255, 0.8);
      }
    }
    
    /* Reduced motion support */
    @media (prefers-reduced-motion: reduce) {
      :host {
        --star-transition: none;
      }
      
      .star-rating mat-icon {
        &:hover {
          transform: none;
        }
        
        &:active {
          transform: none;
        }
        
        &::after {
          transition: none;
        }
      }
      
      .rating-value:hover {
        transform: none;
      }
    }
  `]
})
export class StarRatingComponent {
  @Input() rating: number = 0;
  @Input() maxRating: number = 5;
  @Input() interactive: boolean = false;
  @Input() showRatingValue: boolean = false;
  @Input() reviewCount: number | undefined;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() showCount: boolean = false;
  
  @Output() ratingChange = new EventEmitter<number>();
  
  hoveredRating: number = 0;
  
  get stars(): number[] {
    return Array(this.maxRating).fill(0).map((_, i) => i);
  }
  
  getStarIcon(starPosition: number): string {
    const rating = this.hoveredRating || this.rating;
    
    if (rating >= starPosition) {
      return 'star';
    } else if (rating >= starPosition - 0.5) {
      return 'star_half';
    } else {
      return 'star_border';
    }
  }
  
  onStarClick(rating: number): void {
    if (this.interactive) {
      this.rating = this.rating === rating ? rating - 1 : rating;
      this.ratingChange.emit(this.rating);
    }
  }
  
  onStarHover(rating: number): void {
    this.hoveredRating = rating;
  }
}