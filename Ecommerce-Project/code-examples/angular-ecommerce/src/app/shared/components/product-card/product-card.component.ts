import { 
  Component, 
  Input, 
  Output, 
  EventEmitter, 
  OnInit, 
  OnDestroy, 
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  HostListener,
  Inject,
  Optional
} from '@angular/core';
import { Subject, interval, takeUntil, of } from 'rxjs';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent implements OnInit, OnDestroy {
  @Input() product!: Product;
  @Input() showActions = true;
  @Input() showQuantitySelector = false;
  @Input() showBuyNow = false;
  @Input() showPriceDetails = true;
  @Input() showShippingInfo = true;
  @Input() loading = 'lazy' as 'lazy' | 'eager';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() layout: 'vertical' | 'horizontal' = 'vertical';

  @Output() addToCart = new EventEmitter<{product: Product, quantity: number}>();
  @Output() addToWishlist = new EventEmitter<Product>();
  @Output() removeFromWishlist = new EventEmitter<Product>();
  @Output() addToCompare = new EventEmitter<Product>();
  @Output() removeFromCompare = new EventEmitter<Product>();
  @Output() viewDetails = new EventEmitter<Product>();
  @Output() quickView = new EventEmitter<Product>();
  @Output() buyNow = new EventEmitter<{product: Product, quantity: number}>();
  @Output() imageClick = new EventEmitter<{product: Product, imageIndex: number}>();

  // Component state
  private destroy$ = new Subject<void>();
  discountPercentage: number = 0;
  discountAmount: number = 0;
  selectedQuantity = 1;
  currentImageIndex = 0;
  addingToCart = false;
  imageLoading = true;
  imageError = false;

  // Product status properties
  isNewArrival = false;
  isBestSeller = false;
  isLowStock = false;
  isInWishlist = false;
  isInCompare = false;

  constructor(
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.calculateDiscounts();
    this.checkProductStatus();
    this.initializeUserInteractions();
    this.startImageCarousel();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    // Optional: Preload additional product data on hover
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    // Reset any hover states if needed
  }

  private calculateDiscounts(): void {
    if (this.product.regularPrice && this.product.regularPrice > this.product.price) {
      this.discountPercentage = Math.round(
        ((this.product.regularPrice - this.product.price) / this.product.regularPrice) * 100
      );
      this.discountAmount = this.product.regularPrice - this.product.price;
    }
  }

  private checkProductStatus(): void {
    const now = new Date();
    const productDate = new Date(this.product.createdAt || now);
    const daysDiff = Math.floor((now.getTime() - productDate.getTime()) / (1000 * 60 * 60 * 24));
    
    // Check if new arrival (less than 30 days old)
    this.isNewArrival = daysDiff <= 30;
    
    // Check if bestseller (based on sales or rating)
    this.isBestSeller = this.product.featured || 
                       (this.product.rating >= 4.5 && (this.product.reviews?.length || 0) >= 100);
    
    // Check if low stock
    this.isLowStock = this.product.stockQuantity > 0 && this.product.stockQuantity <= 10;
  }

  private initializeUserInteractions(): void {
    // These would be connected to actual services in a real implementation
    // For now, we'll use mock values
    this.isInWishlist = false;
    this.isInCompare = false;
  }

  private startImageCarousel(): void {
    if (this.product.images && this.product.images.length > 1) {
      // Auto-rotate images on hover (optional)
      interval(3000)
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          if (this.product.images && this.product.images.length > 1) {
            this.currentImageIndex = (this.currentImageIndex + 1) % this.product.images.length;
            this.cdr.markForCheck();
          }
        });
    }
  }

  // Event handlers
  onAddToCart(): void {
    if (this.product.stockQuantity === 0 || this.addingToCart) return;

    this.addingToCart = true;
    this.cdr.markForCheck();

    // Simulate API call delay
    setTimeout(() => {
      this.addToCart.emit({
        product: this.product,
        quantity: this.selectedQuantity
      });
      this.addingToCart = false;
      this.cdr.markForCheck();
    }, 500);
  }

  onToggleWishlist(event: Event): void {
    event.stopPropagation();
    event.preventDefault();

    if (this.isInWishlist) {
      this.removeFromWishlist.emit(this.product);
      this.isInWishlist = false;
    } else {
      this.addToWishlist.emit(this.product);
      this.isInWishlist = true;
    }
    this.cdr.markForCheck();
  }

  onToggleCompare(event: Event): void {
    event.stopPropagation();
    event.preventDefault();

    if (this.isInCompare) {
      this.removeFromCompare.emit(this.product);
      this.isInCompare = false;
    } else {
      this.addToCompare.emit(this.product);
      this.isInCompare = true;
    }
    this.cdr.markForCheck();
  }

  onQuickView(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.quickView.emit(this.product);
  }

  onViewDetails(): void {
    this.viewDetails.emit(this.product);
  }

  onBuyNow(): void {
    if (this.product.stockQuantity === 0) return;

    this.buyNow.emit({
      product: this.product,
      quantity: this.selectedQuantity
    });
  }

  onQuantityChange(quantity: number): void {
    this.selectedQuantity = quantity;
  }

  changeImage(index: number, event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.currentImageIndex = index;
    this.imageClick.emit({
      product: this.product,
      imageIndex: index
    });
  }

  onImageLoad(): void {
    this.imageLoading = false;
    this.imageError = false;
    this.cdr.markForCheck();
  }

  onImageError(): void {
    this.imageLoading = false;
    this.imageError = true;
    this.cdr.markForCheck();
  }

  // Getter methods for template
  get currentImage(): string {
    if (this.product.images && this.product.images.length > 0) {
      return this.product.images[this.currentImageIndex] || this.product.imageUrl;
    }
    return this.product.imageUrl;
  }

  get stockStatus(): 'in-stock' | 'low-stock' | 'out-of-stock' {
    if (this.product.stockQuantity === 0) return 'out-of-stock';
    if (this.product.stockQuantity <= 10) return 'low-stock';
    return 'in-stock';
  }

  get cardClasses(): string[] {
    const classes = [`product-card--${this.size}`, `product-card--${this.layout}`];
    
    if (this.product.featured) classes.push('product-card--featured');
    if (this.isNewArrival) classes.push('product-card--new');
    if (this.isBestSeller) classes.push('product-card--bestseller');
    if (this.discountPercentage > 0) classes.push('product-card--on-sale');
    
    return classes;
  }
}
