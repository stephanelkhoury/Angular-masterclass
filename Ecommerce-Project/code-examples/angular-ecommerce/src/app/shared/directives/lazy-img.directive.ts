import { Directive, ElementRef, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: 'img[appLazyImg]'
})
export class LazyImgDirective implements OnInit {
  @HostBinding('attr.src') srcAttr = '';
  @Input() src: string = '';
  @Input() placeholderSrc: string = 'assets/images/placeholder.png';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    // Set placeholder image initially
    this.srcAttr = this.placeholderSrc;
    
    // Use Intersection Observer to detect when the image is in viewport
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Element is in viewport, load the actual image
          this.loadImage();
          // Stop observing once loaded
          observer.unobserve(this.el.nativeElement);
        }
      });
    });

    observer.observe(this.el.nativeElement);
  }

  private loadImage() {
    // Create a new image element to preload the image
    const img = new Image();
    
    img.onload = () => {
      // When the image is loaded, set the source to the element
      this.srcAttr = this.src || this.el.nativeElement.getAttribute('src');
    };
    
    img.onerror = () => {
      // If the image fails to load, keep the placeholder
      this.srcAttr = this.placeholderSrc;
    };
    
    // Start loading the image
    img.src = this.src || this.el.nativeElement.getAttribute('src');
  }
}