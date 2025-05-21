import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface UserProfile {
  firstName: string;
  lastName: string;
  title: string;
  birthDate: Date;
  address: {
    street: string;
    city: string;
    postal: string;
    country: string;
  };
  bio: string;
}

@Component({
  selector: 'app-user-profile',
  template: `
    <div class="container">
      <h2 i18n="@@userProfileTitle">{{ 'PROFILE.TITLE' | translate }}</h2>
      <p i18n="@@profileDescription">{{ 'PROFILE.DESCRIPTION' | translate }}</p>
      
      <div class="card">
        <div class="card-header" i18n="@@personalInfo">{{ 'PROFILE.PERSONAL_INFO' | translate }}</div>
        <div class="card-body">
          <div class="row mb-3">
            <div class="col-md-3"><strong i18n="@@fullName">{{ 'PROFILE.FULL_NAME' | translate }}:</strong></div>
            <div class="col-md-9">{{ profile.title }} {{ profile.firstName }} {{ profile.lastName }}</div>
          </div>
          <div class="row mb-3">
            <div class="col-md-3"><strong i18n="@@birthDate">{{ 'PROFILE.BIRTH_DATE' | translate }}:</strong></div>
            <div class="col-md-9">{{ profile.birthDate | date:'longDate' }}</div>
          </div>
          <div class="row mb-3">
            <div class="col-md-3"><strong i18n="@@address">{{ 'PROFILE.ADDRESS' | translate }}:</strong></div>
            <div class="col-md-9">
              {{ profile.address.street }}<br>
              {{ profile.address.city }}, {{ profile.address.postal }}<br>
              {{ 'COUNTRIES.' + profile.address.country.toUpperCase() | translate }}
            </div>
          </div>
          <div class="row">
            <div class="col-md-3"><strong i18n="@@biography">{{ 'PROFILE.BIO' | translate }}:</strong></div>
            <div class="col-md-9">{{ profile.bio }}</div>
          </div>
        </div>
      </div>
      
      <div class="card mt-4">
        <div class="card-header" i18n="@@languagePreference">{{ 'PROFILE.LANGUAGE_PREFERENCE' | translate }}</div>
        <div class="card-body">
          <p i18n="@@currentLanguage">{{ 'PROFILE.CURRENT_LANGUAGE' | translate }}: 
            <strong>{{ getCurrentLanguageName() }}</strong>
          </p>
          <p i18n="@@changeLanguage">{{ 'PROFILE.CHANGE_LANGUAGE' | translate }}:</p>
          <div class="btn-group">
            <button *ngFor="let lang of availableLanguages" 
                    class="btn btn-outline-primary"
                    [class.active]="currentLang === lang.code"
                    (click)="changeLanguage(lang.code)">
              {{ lang.name }}
            </button>
          </div>
          <p class="mt-3" i18n="@@localeSaved">
            {{ 'PROFILE.LOCALE_SAVED' | translate }}
          </p>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class UserProfileComponent {
  profile: UserProfile = {
    firstName: 'John',
    lastName: 'Doe',
    title: 'Mr.',
    birthDate: new Date(1985, 3, 15),
    address: {
      street: '123 Main Street',
      city: 'New York',
      postal: '10001',
      country: 'usa'
    },
    bio: 'Software developer with 10 years of experience in web technologies and application development.'
  };
  
  availableLanguages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'es', name: 'Español' },
    { code: 'ar', name: 'العربية' }
  ];
  
  get currentLang(): string {
    return this.translate.currentLang || this.translate.getDefaultLang();
  }
  
  constructor(private translate: TranslateService) {}
  
  getCurrentLanguageName(): string {
    const lang = this.availableLanguages.find(l => l.code === this.currentLang);
    return lang ? lang.name : 'Unknown';
  }
  
  changeLanguage(lang: string): void {
    this.translate.use(lang);
    localStorage.setItem('preferredLanguage', lang);
  }
}
