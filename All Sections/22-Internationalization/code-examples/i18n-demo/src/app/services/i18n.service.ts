import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  private currentLanguageSubject = new BehaviorSubject<string>('en');
  currentLanguage$ = this.currentLanguageSubject.asObservable();

  constructor(private translate: TranslateService) {
    // Initialize languages
    translate.addLangs(['en', 'fr', 'es', 'ar']);
    
    // Set default language
    translate.setDefaultLang('en');
    
    // Try to get browser language
    const browserLang = translate.getBrowserLang();
    if (browserLang && translate.getLangs().includes(browserLang)) {
      this.setLanguage(browserLang);
    } else {
      this.setLanguage('en');
    }
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLanguageSubject.next(lang);
    
    // Update HTML lang attribute and direction for RTL languages
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Store preference
    localStorage.setItem('preferredLanguage', lang);
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang || this.translate.getDefaultLang();
  }

  getLanguages(): string[] {
    return this.translate.getLangs();
  }

  getLanguageDirection(): 'ltr' | 'rtl' {
    return this.getCurrentLanguage() === 'ar' ? 'rtl' : 'ltr';
  }
}
