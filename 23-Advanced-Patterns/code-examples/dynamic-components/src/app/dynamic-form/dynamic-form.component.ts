import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface FormFieldConfig {
  key: string;
  label: string;
  type: 'text' | 'textarea' | 'select' | 'checkbox' | 'radio';
  value?: any;
  required?: boolean;
  validators?: any[];
  inputType?: string;
  placeholder?: string;
  helpText?: string;
  options?: { value: any, label: string }[];
  rows?: number;
  checkboxLabel?: string;
  order?: number;
}

interface FormConfig {
  title: string;
  fields: FormFieldConfig[];
}

@Component({
  selector: 'app-dynamic-form',
  template: `
    <div class="dynamic-form">
      <div class="description-box mb-4">
        <h2>Dynamic Form Generation</h2>
        <p>
          This example demonstrates how to create forms dynamically from JSON configuration,
          allowing for flexible UI generation based on data.
        </p>
        <ul>
          <li>Creates form controls from configuration objects</li>
          <li>Supports different field types with appropriate validation</li>
          <li>Allows switching between different form configurations</li>
          <li>Handles form submission and validation</li>
        </ul>
      </div>

      <div class="row mb-4">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header bg-primary text-white">
              Form Controls
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-4 mb-3">
                  <button class="btn btn-outline-primary w-100" (click)="loadContactForm()">
                    Contact Form
                  </button>
                </div>
                <div class="col-md-4 mb-3">
                  <button class="btn btn-outline-primary w-100" (click)="loadRegistrationForm()">
                    Registration Form
                  </button>
                </div>
                <div class="col-md-4 mb-3">
                  <button class="btn btn-outline-primary w-100" (click)="loadSurveyForm()">
                    Survey Form
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">
              <h3>{{ currentConfig?.title }}</h3>
            </div>
            <div class="card-body">
              <form [formGroup]="form" (ngSubmit)="onSubmit()">
                <div *ngFor="let field of formFields">
                  <app-form-field 
                    [field]="field" 
                    [parentForm]="form"
                    [showErrors]="submitted">
                  </app-form-field>
                </div>
                
                <div class="d-flex justify-content-between mt-4">
                  <button type="button" class="btn btn-secondary" (click)="resetForm()">
                    Reset
                  </button>
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        <div class="col-md-4">
          <div class="card">
            <div class="card-header">
              Form Preview
            </div>
            <div class="card-body">
              <h5>Form Values</h5>
              <pre>{{ form.value | json }}</pre>
              
              <h5>Form Valid: {{ form.valid }}</h5>
              <div *ngIf="submitted && !form.valid" class="alert alert-danger">
                Please fix the errors in the form.
              </div>
              <div *ngIf="submitted && form.valid" class="alert alert-success">
                Form submitted successfully!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dynamic-form {
      padding: 20px;
      background-color: #f9f9f9;
      border-radius: 8px;
    }
    .description-box {
      background-color: #e8f4f8;
      border-left: 4px solid #17a2b8;
      padding: 15px;
      border-radius: 4px;
    }
    pre {
      background-color: #f8f9fa;
      padding: 10px;
      border-radius: 4px;
      font-size: 0.85rem;
    }
  `]
})
export class DynamicFormComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  currentConfig: FormConfig | null = null;
  formFields: FormFieldConfig[] = [];
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loadContactForm(); // Default form
  }
  
  loadContactForm(): void {
    const config: FormConfig = {
      title: 'Contact Us Form',
      fields: [
        {
          key: 'name',
          label: 'Your Name',
          type: 'text',
          required: true,
          placeholder: 'Enter your full name',
          order: 1
        },
        {
          key: 'email',
          label: 'Email Address',
          type: 'text',
          inputType: 'email',
          required: true,
          placeholder: 'Enter your email',
          validators: [Validators.email],
          order: 2
        },
        {
          key: 'subject',
          label: 'Subject',
          type: 'select',
          required: true,
          options: [
            { value: 'general', label: 'General Inquiry' },
            { value: 'support', label: 'Technical Support' },
            { value: 'billing', label: 'Billing Question' },
            { value: 'other', label: 'Other' }
          ],
          order: 3
        },
        {
          key: 'message',
          label: 'Your Message',
          type: 'textarea',
          required: true,
          rows: 5,
          placeholder: 'Enter your message here',
          order: 4
        },
        {
          key: 'urgent',
          label: 'Priority',
          type: 'checkbox',
          checkboxLabel: 'Mark as urgent',
          order: 5
        }
      ]
    };
    
    this.createDynamicForm(config);
  }
  
  loadRegistrationForm(): void {
    const config: FormConfig = {
      title: 'User Registration',
      fields: [
        {
          key: 'firstName',
          label: 'First Name',
          type: 'text',
          required: true,
          order: 1
        },
        {
          key: 'lastName',
          label: 'Last Name',
          type: 'text',
          required: true,
          order: 2
        },
        {
          key: 'email',
          label: 'Email',
          type: 'text',
          inputType: 'email',
          required: true,
          validators: [Validators.email],
          order: 3
        },
        {
          key: 'password',
          label: 'Password',
          type: 'text',
          inputType: 'password',
          required: true,
          validators: [Validators.minLength(8)],
          helpText: 'Password must be at least 8 characters long',
          order: 4
        },
        {
          key: 'gender',
          label: 'Gender',
          type: 'radio',
          options: [
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
            { value: 'other', label: 'Other' },
            { value: 'prefer-not', label: 'Prefer not to say' }
          ],
          order: 5
        },
        {
          key: 'terms',
          label: 'Terms',
          type: 'checkbox',
          required: true,
          checkboxLabel: 'I agree to the Terms and Conditions',
          order: 6
        }
      ]
    };
    
    this.createDynamicForm(config);
  }
  
  loadSurveyForm(): void {
    const config: FormConfig = {
      title: 'Product Feedback Survey',
      fields: [
        {
          key: 'productRating',
          label: 'How would you rate our product?',
          type: 'select',
          required: true,
          options: [
            { value: 5, label: '5 - Excellent' },
            { value: 4, label: '4 - Very Good' },
            { value: 3, label: '3 - Good' },
            { value: 2, label: '2 - Fair' },
            { value: 1, label: '1 - Poor' }
          ],
          order: 1
        },
        {
          key: 'usageFrequency',
          label: 'How often do you use our product?',
          type: 'radio',
          required: true,
          options: [
            { value: 'daily', label: 'Daily' },
            { value: 'weekly', label: 'Weekly' },
            { value: 'monthly', label: 'Monthly' },
            { value: 'rarely', label: 'Rarely' }
          ],
          order: 2
        },
        {
          key: 'favoriteFeatures',
          label: 'What features do you like most?',
          type: 'textarea',
          rows: 3,
          placeholder: 'Enter your favorite features...',
          order: 3
        },
        {
          key: 'improvements',
          label: 'What could we improve?',
          type: 'textarea',
          rows: 3,
          placeholder: 'Enter your suggestions...',
          order: 4
        },
        {
          key: 'recommendToOthers',
          label: 'Would you recommend our product to others?',
          type: 'checkbox',
          checkboxLabel: 'Yes, I would recommend it',
          order: 5
        },
        {
          key: 'contactForFollowUp',
          label: 'Follow Up',
          type: 'checkbox',
          checkboxLabel: 'May we contact you for follow-up questions?',
          order: 6
        }
      ]
    };
    
    this.createDynamicForm(config);
  }
  
  createDynamicForm(config: FormConfig): void {
    this.currentConfig = config;
    this.submitted = false;
    
    // Sort fields by order if specified
    this.formFields = config.fields.sort((a, b) => {
      const orderA = a.order !== undefined ? a.order : 999;
      const orderB = b.order !== undefined ? b.order : 999;
      return orderA - orderB;
    });
    
    // Create a form group with controls for each field
    const group: any = {};
    
    config.fields.forEach(field => {
      // Set up validators
      const validators = field.required ? [Validators.required] : [];
      if (field.validators) {
        validators.push(...field.validators);
      }
      
      // Create form control with validators
      group[field.key] = [field.value !== undefined ? field.value : '', validators];
    });
    
    this.form = this.fb.group(group);
  }
  
  onSubmit(): void {
    this.submitted = true;
    
    if (this.form.valid) {
      console.log('Form submitted', this.form.value);
      // Here you would send the data to your server
      setTimeout(() => {
        // Reset form after successful submission
        this.resetForm();
      }, 3000);
    } else {
      // Mark all controls as touched to trigger validation visuals
      Object.keys(this.form.controls).forEach(key => {
        const control = this.form.get(key);
        control?.markAsTouched();
      });
    }
  }
  
  resetForm(): void {
    this.form.reset();
    this.submitted = false;
  }
}
