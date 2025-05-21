import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: `
    <div [dir]="currentLangDir">
      <app-language-selector></app-language-selector>
      <app-header></app-header>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <router-outlet></router-outlet>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AppComponent implements OnInit {
  currentLangDir: 'ltr' | 'rtl' = 'ltr';

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    // Initialize with browser language or default to English
    const browserLang = this.translate.getBrowserLang();
    const defaultLang = browserLang && ['en', 'fr', 'es', 'ar'].includes(browserLang) ? browserLang : 'en';
    this.translate.use(defaultLang);
    
    // Set RTL for Arabic
    this.translate.onLangChange.subscribe(lang => {
      this.currentLangDir = lang.lang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = lang.lang;
    });
  }
}
