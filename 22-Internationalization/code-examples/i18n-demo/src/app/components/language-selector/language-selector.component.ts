import { Component } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-language-selector',
  template: `
    <div class="lang-container">
      <div class="lang-selector">
        <button *ngFor="let lang of languages" 
                class="lang-btn" 
                [class.active]="isCurrentLanguage(lang)"
                (click)="changeLanguage(lang)">
          {{getLanguageLabel(lang)}}
        </button>
      </div>
    </div>
  `,
  styles: [`
    .lang-container {
      position: fixed;
      top: 10px;
      right: 20px;
      z-index: 1000;
    }
    .lang-selector {
      background-color: rgba(255, 255, 255, 0.9);
      padding: 5px;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    .lang-btn {
      margin: 0 3px;
      cursor: pointer;
      padding: 3px 8px;
      border-radius: 3px;
      border: 1px solid #ddd;
      background-color: #fff;
    }
    .lang-btn.active {
      background-color: #007bff;
      color: white;
      border-color: #007bff;
    }
  `]
})
export class LanguageSelectorComponent {
  languages = ['en', 'fr', 'es', 'ar'];
  
  constructor(private i18nService: I18nService) {}
  
  changeLanguage(lang: string): void {
    this.i18nService.setLanguage(lang);
  }
  
  isCurrentLanguage(lang: string): boolean {
    return this.i18nService.getCurrentLanguage() === lang;
  }
  
  getLanguageLabel(lang: string): string {
    switch (lang) {
      case 'en': return 'EN';
      case 'fr': return 'FR';
      case 'es': return 'ES';
      case 'ar': return 'AR';
      default: return lang.toUpperCase();
    }
  }
}
