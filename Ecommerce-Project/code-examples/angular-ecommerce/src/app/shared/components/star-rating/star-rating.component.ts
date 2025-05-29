import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  template: `
    <div class="star-rating-container" [class.readonly]="readOnly">
      <button *ngFor="let star of stars; let i = index" 
              type="button"
              class="star-button"
              [class.filled]="i < currentRating"
              [class.hovered]="!readOnly && hoverRating !== null && i < hoverRating"
              (click)="!readOnly && rate(i + 1)"
              (mouseenter)="!readOnly && onStarHover(i + 1)"
              (mouseleave)="!readOnly && onStarLeave()">
        <mat-icon>{{ (hoverRating !== null && i < hoverRating) ? 'star' : (i < currentRating ? 'star' : 'star_border') }}</mat-icon>
      </button>
      <span *ngIf="showReviewCount && reviewCount !== undefined" class="review-count">
        ({{ reviewCount }} {{ reviewCount === 1 ? 'review' : 'reviews' }})
      </span>
    </div>
  `,
  styleUrls: ['./star-rating.component.scss'] // Create this SCSS file
})
export class StarRatingComponent implements OnChanges {
  @Input() rating: number = 0;
  @Input() maxRating: number = 5;
  @Input() readOnly: boolean = false; // Added Input
  @Input() reviewCount?: number;
  @Input() showReviewCount: boolean = true;

  @Output() ratingChange = new EventEmitter<number>();

  stars: any[] = [];
  currentRating: number = 0;
  hoverRating: number | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['rating'] || changes['maxRating']) {
      this.currentRating = this.rating;
      this.stars = Array(this.maxRating).fill(0);
    }
  }

  rate(ratingValue: number): void {
    if (!this.readOnly) {
      this.currentRating = ratingValue;
      this.ratingChange.emit(this.currentRating);
    }
  }

  onStarHover(ratingValue: number): void {
    if (!this.readOnly) {
      this.hoverRating = ratingValue;
    }
  }

  onStarLeave(): void {
    if (!this.readOnly) {
      this.hoverRating = null;
    }
  }
}