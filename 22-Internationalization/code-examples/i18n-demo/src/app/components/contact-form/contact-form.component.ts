import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-form',
  template: `
    <div class="container">
      <h2 i18n="@@contactFormTitle">{{ 'CONTACT.TITLE' | translate }}</h2>
      <p i18n="@@contactDescription">{{ 'CONTACT.DESCRIPTION' | translate }}</p>
      
      <div class="card">
        <div class="card-body">
          <form #contactForm="ngForm" (ngSubmit)="onSubmit(contactForm)">
            <div class="form-group mb-3">
              <label for="name" i18n="@@nameLabel">{{ 'CONTACT.NAME' | translate }}</label>
              <input type="text" class="form-control" id="name" name="name"
                     [(ngModel)]="contactData.name" required
                     [placeholder]="'CONTACT.NAME_PLACEHOLDER' | translate">
            </div>
            
            <div class="form-group mb-3">
              <label for="email" i18n="@@emailLabel">{{ 'CONTACT.EMAIL' | translate }}</label>
              <input type="email" class="form-control" id="email" name="email"
                     [(ngModel)]="contactData.email" required email
                     [placeholder]="'CONTACT.EMAIL_PLACEHOLDER' | translate">
            </div>
            
            <div class="form-group mb-3">
              <label for="subject" i18n="@@subjectLabel">{{ 'CONTACT.SUBJECT' | translate }}</label>
              <select class="form-control" id="subject" name="subject" 
                      [(ngModel)]="contactData.subject" required>
                <option value="" disabled selected i18n="@@selectSubject">{{ 'CONTACT.SELECT_SUBJECT' | translate }}</option>
                <option value="general" i18n="@@generalInquiry">{{ 'CONTACT.SUBJECTS.GENERAL' | translate }}</option>
                <option value="support" i18n="@@technicalSupport">{{ 'CONTACT.SUBJECTS.SUPPORT' | translate }}</option>
                <option value="billing" i18n="@@billingInquiry">{{ 'CONTACT.SUBJECTS.BILLING' | translate }}</option>
                <option value="feedback" i18n="@@feedback">{{ 'CONTACT.SUBJECTS.FEEDBACK' | translate }}</option>
              </select>
            </div>
            
            <div class="form-group mb-3">
              <label for="message" i18n="@@messageLabel">{{ 'CONTACT.MESSAGE' | translate }}</label>
              <textarea class="form-control" id="message" name="message" rows="5"
                        [(ngModel)]="contactData.message" required
                        [placeholder]="'CONTACT.MESSAGE_PLACEHOLDER' | translate"></textarea>
            </div>
            
            <div class="form-group form-check mb-3">
              <input type="checkbox" class="form-check-input" id="terms" name="terms"
                     [(ngModel)]="contactData.termsAccepted" required>
              <label class="form-check-label" for="terms" i18n="@@termsLabel">
                {{ 'CONTACT.AGREE_TERMS' | translate }}
              </label>
            </div>
            
            <button type="submit" class="btn btn-primary" [disabled]="!contactForm.valid" i18n="@@submitButton">
              {{ 'CONTACT.SUBMIT' | translate }}
            </button>
          </form>
          
          <div *ngIf="submitted" class="alert alert-success mt-3" i18n="@@submissionSuccess">
            {{ 'CONTACT.SUBMISSION_SUCCESS' | translate }}
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ContactFormComponent {
  contactData = {
    name: '',
    email: '',
    subject: '',
    message: '',
    termsAccepted: false
  };
  
  submitted = false;
  
  constructor(private translate: TranslateService) {}
  
  onSubmit(form: NgForm) {
    if (form.valid) {
      // In a real app, you would send this data to a server
      console.log('Form submitted:', this.contactData);
      this.submitted = true;
      // Reset the form after 3 seconds
      setTimeout(() => {
        this.submitted = false;
        form.reset();
        this.contactData = {
          name: '',
          email: '',
          subject: '',
          message: '',
          termsAccepted: false
        };
      }, 3000);
    }
  }
}
