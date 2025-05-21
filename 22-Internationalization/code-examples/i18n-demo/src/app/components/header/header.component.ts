import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" routerLink="/" i18n="@@appName">I18n Demo</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" 
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" routerLink="/" routerLinkActive="active" 
                 [routerLinkActiveOptions]="{exact: true}" i18n="@@navHome">{{ 'NAV.HOME' | translate }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/products" routerLinkActive="active" i18n="@@navProducts">
                {{ 'NAV.PRODUCTS' | translate }}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/dates" routerLinkActive="active" i18n="@@navDates">
                {{ 'NAV.DATES' | translate }}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/numbers" routerLinkActive="active" i18n="@@navNumbers">
                {{ 'NAV.NUMBERS' | translate }}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/contact" routerLinkActive="active" i18n="@@navContact">
                {{ 'NAV.CONTACT' | translate }}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/profile" routerLinkActive="active" i18n="@@navProfile">
                {{ 'NAV.PROFILE' | translate }}
              </a>
            </li>
          </ul>
          <span class="navbar-text ms-auto">
            {{ 'HEADER.CURRENT_LANG' | translate }}: {{ currentLangName }}
          </span>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar { 
      margin-bottom: 20px; 
    }
    .active { 
      font-weight: bold; 
    }
  `]
})
export class HeaderComponent {
  get currentLangName(): string {
    const langMap: {[key: string]: string} = {
      'en': 'English',
      'fr': 'Français',
      'es': 'Español',
      'ar': 'العربية'
    };
    return langMap[this.i18nService.getCurrentLanguage()] || 'Unknown';
  }

  constructor(
    private translate: TranslateService,
    private i18nService: I18nService
  ) {}
}
