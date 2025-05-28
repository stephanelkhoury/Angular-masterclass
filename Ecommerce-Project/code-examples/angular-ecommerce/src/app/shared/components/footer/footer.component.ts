import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  
  currentYear = new Date().getFullYear();
  newsletterEmail = '';
  isSubscribing = false;
  showBackToTop = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showBackToTop = window.pageYOffset > 400;
  }

  ngOnInit() {
    // Component initialization
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  subscribeNewsletter() {
    if (!this.newsletterEmail || this.isSubscribing) {
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.newsletterEmail)) {
      // Could show toast notification here
      console.warn('Please enter a valid email address');
      return;
    }

    this.isSubscribing = true;

    // Simulate API call
    setTimeout(() => {
      console.log('Newsletter subscription for:', this.newsletterEmail);
      // Could show success toast notification here
      this.newsletterEmail = '';
      this.isSubscribing = false;
    }, 2000);
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
