import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { Product, ProductImage } from '../../../core/models/product.model'; // Added ProductImage
import { Store } from '@ngrx/store'; // Import Store
import { AppState } from '../../../store'; // Assuming AppState is defined
import * as CartActions from '../../../store/actions/cart.actions'; // Import CartActions
import { Observable, of } from 'rxjs'; // Import Observable and of for isInWishlist$
import { WishlistService } from '../../../core/services/wishlist.service'; // Assuming you have a WishlistService
import { map } from 'rxjs/operators';
import { CartItem } from '../../../core/models/cart-item.model'; // Import CartItem


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent implements OnInit, OnChanges {
  @Input() product!: Product;
  @Input() currencySymbol: string = '$';
  @Input() newThresholdDays: number = 7; // Days to consider a product "new"
  
  // Configuration for what to show
  @Input() showNewBadge: boolean = true;
  @Input() showFeaturedBadge: boolean = true;
  @Input() showBestsellerBadge: boolean = true;
  @Input() showSoldOutBadge: boolean = true;
  @Input() showImageHoverControls: boolean = true;
  @Input() showImageIndicators: boolean = true;
  @Input() showStockIndicator: boolean = true;
  @Input() showRating: boolean = true;
  @Input() showShortDescription: boolean = false;
  @Input() showKeyFeatures: boolean = false;
  @Input() showShippingInfo: boolean = false;
  @Input() cycleImagesOnHover: boolean = true;

  // New Inputs for layout and specific button visibility
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() showBuyNowButton: boolean = true;
  @Input() showQuantityControl: boolean = true; // For controlling the +/- quantity input
  @Input() layout: 'vertical' | 'horizontal' = 'vertical';


  // Event Emitters - Renamed to avoid conflict with method names
  @Output() productAddedToCart = new EventEmitter<{product: Product, quantity: number}>();
  @Output() productAddedToWishlist = new EventEmitter<Product>();
  @Output() productCompared = new EventEmitter<Product>();
  @Output() productViewed = new EventEmitter<Product>(); // For quick view
  @Output() productBoughtNow = new EventEmitter<{product: Product, quantity: number}>();


  isNew = false;
  isBestSeller = false;
  isLowStock = false;
  discountPercentage: number | null = null;
  discountAmount: number | null = null;

  currentImageIndex = 0;
  private imageChangeInterval: any;

  addingToCart = false;
  addingToWishlistState = false; // Renamed to avoid conflict
  uiShowQuantitySelector = false; // Renamed to avoid conflict
  selectedQuantity: number = 1;

  isInWishlist$: Observable<boolean> = of(false); // Default to false
  isInCompare$: Observable<boolean> = of(false); // Placeholder for compare feature


  constructor(
    private store: Store<AppState>, // Inject Store
    private wishlistService: WishlistService, // Inject WishlistService
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.updateProductFlags();
    this.calculateDiscount();
    if (this.product && this.product.id) { // Ensure product and product.id exist
        this.isInWishlist$ = this.wishlistService.isInWishlist(this.product.id);
        // this.isInCompare$ = this.compareService.isInCompare(this.product.id); // If you have a compare service
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product'] && this.product && this.product.id) { // Ensure product and product.id exist
      this.updateProductFlags();
      this.calculateDiscount();
      this.selectedQuantity = 1; // Reset quantity when product changes
      this.uiShowQuantitySelector = false;
      this.isInWishlist$ = this.wishlistService.isInWishlist(this.product.id);
      // this.isInCompare$ = this.compareService.isInCompare(this.product.id);
      this.cdr.markForCheck();
    }
  }

  private updateProductFlags(): void {
    if (!this.product) return;

    const now = new Date();
    const productDate = this.product.createdAt ? new Date(this.product.createdAt) : now;
    const diffTime = Math.abs(now.getTime() - productDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    this.isNew = diffDays <= (this.newThresholdDays || 7);

    this.isBestSeller = !!this.product.featured ||
                       ( (this.product.rating || 0) >= 4.5 && (this.product.reviews?.length || 0) >= 50); // Adjusted review count
    
    this.isLowStock = (this.product.stockQuantity || 0) > 0 && (this.product.stockQuantity || 0) <= 10;
  }

  private calculateDiscount(): void {
    if (!this.product) {
      this.discountPercentage = null;
      this.discountAmount = null;
      return;
    }
    if (this.product.regularPrice && this.product.regularPrice > this.product.price) {
      this.discountPercentage = Math.round(
        ((this.product.regularPrice - this.product.price) / this.product.regularPrice) * 100
      );
      this.discountAmount = this.product.regularPrice - this.product.price;
    } else {
      this.discountPercentage = null;
      this.discountAmount = null;
    }
  }

  // Mouse enter/leave handlers for image cycling
  onMouseEnter(): void {
    if (this.cycleImagesOnHover) {
      this.startImageCycle();
    }
  }

  onMouseLeave(): void {
    if (this.cycleImagesOnHover) {
      this.stopImageCycle();
    }
  }
  
  startImageCycle(): void {
    if (this.cycleImagesOnHover && this.product?.images && this.product.images.length > 1) {
      this.stopImageCycle(); // Clear existing interval
      this.imageChangeInterval = setInterval(() => {
        if (this.product.images && this.product.images.length > 1) {
          this.currentImageIndex = (this.currentImageIndex + 1) % this.product.images.length;
          this.cdr.markForCheck(); // Trigger change detection
        }
      }, 2000); // Change image every 2 seconds
    }
  }

  stopImageCycle(): void {
    if (this.imageChangeInterval) {
      clearInterval(this.imageChangeInterval);
      this.imageChangeInterval = null;
    }
  }
  
  // Image navigation
  prevImage(event: MouseEvent): void {
    event.stopPropagation();
    if (this.product?.images && this.product.images.length > 0) {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.product.images.length) % this.product.images.length;
    }
  }

  nextImage(event: MouseEvent): void {
    event.stopPropagation();
    if (this.product?.images && this.product.images.length > 0) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.product.images.length;
    }
  }
  
  setImage(index: number, event: MouseEvent): void {
    event.stopPropagation();
    this.currentImageIndex = index;
  }

  onImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = 'assets/images/placeholder.png'; // Fallback image
  }


  // Action Methods
  addToCartHandler(event: MouseEvent): void {
    event.stopPropagation();
    if (!this.product || (this.product.stockQuantity || 0) === 0 || this.addingToCart) return;

        this.addingToCart = true;
    const cartItem: CartItem = {
      productId: this.product.id,
      quantity: this.selectedQuantity,
      name: this.product.name,
      price: this.product.discountPrice || this.product.price,
      unitPrice: this.product.discountPrice || this.product.price,
      image: this.product.imageUrl || (this.product.images && this.product.images[0]?.url) || ''
    };
    // Simulate API call
    setTimeout(() => {
      this.store.dispatch(CartActions.addToCart({ item: cartItem }));
      this.productAddedToCart.emit({product: this.product, quantity: this.selectedQuantity});
      this.addingToCart = false;
      this.uiShowQuantitySelector = false; // Hide quantity selector after adding
      this.selectedQuantity = 1; // Reset quantity
      this.cdr.markForCheck();
    }, 500);
  }

  addToWishlistHandler(event: MouseEvent): void { // Renamed method
    event.stopPropagation();
    if (!this.product || this.addingToWishlistState) return;

    this.addingToWishlistState = true;
    // Assuming WishlistService has a method like toggleWishlistItem or add/remove
    // For now, let's assume toggleWishlist exists and works as intended.
    // If toggleWishlist is not the correct method, this needs to be adjusted based on WishlistService's API.
    this.wishlistService.toggleWishlist(this.product.id).subscribe(() => {
        this.productAddedToWishlist.emit(this.product);
        this.addingToWishlistState = false;
        if (this.product && this.product.id) { // Re-check after ensuring product.id exists
             this.isInWishlist$ = this.wishlistService.isInWishlist(this.product.id);
        }
        this.cdr.markForCheck();
    });
  }
  
  compareProductHandler(event: MouseEvent): void {
    event.stopPropagation();
    if (!this.product) return;
    this.productCompared.emit(this.product);
    // Add logic for compare service if available
    // this.isInCompare$ = this.compareService.toggleCompare(this.product.id);
    this.cdr.markForCheck();
  }

  viewProductHandler(event: MouseEvent): void {
    event.stopPropagation();
    if (!this.product) return;
    this.productViewed.emit(this.product);
    // Logic for opening a quick view modal, for example
  }


  buyNowHandler(event: MouseEvent): void {
    event.stopPropagation();
    if (!this.product || (this.product.stockQuantity || 0) === 0) return;
    
        const cartItem: CartItem = {
      productId: this.product.id,
      quantity: this.selectedQuantity,
      name: this.product.name,
      price: this.product.discountPrice || this.product.price,
      unitPrice: this.product.discountPrice || this.product.price,
      image: this.product.imageUrl || (this.product.images && this.product.images[0]?.url) || ''
    };
    this.store.dispatch(CartActions.addToCart({ item: cartItem }));
    this.productBoughtNow.emit({product: this.product, quantity: this.selectedQuantity});
    // Typically, you'd navigate to checkout here or dispatch another action
    // If 'navigateToCheckout' is not a standard action, you might need to implement custom navigation
    // or a specific NGRX effect that handles this. For now, commenting out if it causes issues.
    // this.store.dispatch(CartActions.navigateToCheckout()); 
    console.log('Buy Now: Navigating to checkout (placeholder)');
    this.cdr.markForCheck();
  }

  toggleQuantitySelectorHandler(event: MouseEvent): void { // Renamed method
    event.stopPropagation();
    if ((this.product?.stockQuantity || 0) === 0) return;
    this.uiShowQuantitySelector = !this.uiShowQuantitySelector;
  }

  onQuantityChange(): void {
    if (this.selectedQuantity < 1) {
      this.selectedQuantity = 1;
    }
    if (this.product?.stockQuantity && this.selectedQuantity > this.product.stockQuantity) {
      this.selectedQuantity = this.product.stockQuantity;
    }
  }

  incrementQuantity(event: MouseEvent): void {
    event.stopPropagation();
    if (this.product?.stockQuantity && this.selectedQuantity < this.product.stockQuantity) {
      this.selectedQuantity++;
    }
  }

  decrementQuantity(event: MouseEvent): void {
    event.stopPropagation();
    if (this.selectedQuantity > 1) {
      this.selectedQuantity--;
    }
  }

  get currentDisplayImage(): string {
    if (this.product?.images && this.product.images.length > 0 && this.product.images[this.currentImageIndex]?.url) {
      return this.product.images[this.currentImageIndex].url;
    }
    return this.product?.imageUrl || 'assets/images/placeholder.png';
  }

  get stockStatusClass(): string {
    if ((this.product?.stockQuantity || 0) === 0) return 'out-of-stock';
    if ((this.product?.stockQuantity || 0) <= 10 && (this.product?.stockQuantity || 0) > 0) return 'low-stock'; // Fixed condition
    return 'in-stock';
  }

  get cardClasses(): string[] {
    const classes = ['product-card'];
    if (this.product?.featured) {
      classes.push('product-card--featured');
    }
    if (this.isNew) {
      classes.push('product-card--new');
    }
    if (this.isBestSeller) {
      classes.push('product-card--bestseller');
    }
    if ((this.product?.stockQuantity || 0) === 0) {
      classes.push('product-card--out-of-stock');
    }
    return classes;
  }
}
