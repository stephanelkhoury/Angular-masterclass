# Chapter 11: Angular Forms

## Overview

Forms are a critical part of web applications, enabling users to input data and interact with applications. Angular provides two approaches to handling forms: **Template-driven forms** and **Reactive forms**. Each approach has its strengths, and understanding both will allow you to choose the most suitable option for different scenarios.

In this chapter, we'll explore:

- Template-driven forms
- Reactive forms
- Form validation
- Custom validators
- Dynamic forms
- Form arrays and nested forms
- Form submission and handling

## Template-Driven Forms vs. Reactive Forms

### Template-Driven Forms

Template-driven forms use directives in the template to build the form model. They are:

- **Simple to implement** for basic scenarios
- **Similar to AngularJS forms** (easier transition from AngularJS)
- **Two-way data binding** with `[(ngModel)]`
- Form validation logic mostly exists in the template
- Form structure and validation rules are defined in the HTML template

```typescript
// Import the FormsModule in your module
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule
  ]
})
export class AppModule { }
```

### Reactive Forms

Reactive forms create form controls programmatically in the component class. They are:

- **More robust** for complex scenarios
- **Immutable data model** with predictable state changes
- **Easier to test** since the logic is in the component
- **Reactive** approach using Observables
- More control over form validation logic
- Form structure and validation rules are defined in the component class

```typescript
// Import the ReactiveFormsModule in your module
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ReactiveFormsModule
  ]
})
export class AppModule { }
```

## Template-Driven Forms

### Basic Implementation

1. Import `FormsModule` in your module
2. Create a form in your template with `ngForm` directive
3. Use `ngModel` for two-way data binding
4. Handle form submission with `ngSubmit`

```html
<!-- template-form.component.html -->
<form #myForm="ngForm" (ngSubmit)="onSubmit(myForm)">
  <div class="form-group">
    <label for="name">Name</label>
    <input 
      type="text" 
      class="form-control" 
      id="name" 
      name="name" 
      [(ngModel)]="user.name" 
      required 
      #nameInput="ngModel">
    <div class="alert alert-danger" *ngIf="nameInput.invalid && nameInput.touched">
      Name is required
    </div>
  </div>

  <div class="form-group">
    <label for="email">Email</label>
    <input 
      type="email" 
      class="form-control" 
      id="email" 
      name="email" 
      [(ngModel)]="user.email" 
      required 
      email 
      #emailInput="ngModel">
    <div class="alert alert-danger" *ngIf="emailInput.invalid && emailInput.touched">
      <div *ngIf="emailInput.errors?.required">Email is required</div>
      <div *ngIf="emailInput.errors?.email">Enter a valid email</div>
    </div>
  </div>

  <button type="submit" class="btn btn-primary" [disabled]="myForm.invalid">Submit</button>
</form>

<div class="mt-4" *ngIf="submitted">
  <h3>Form Data:</h3>
  <pre>{{ formData | json }}</pre>
</div>
```

```typescript
// template-form.component.ts
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  user = {
    name: '',
    email: ''
  };
  
  submitted = false;
  formData: any;
  
  onSubmit(form: NgForm) {
    if (form.valid) {
      this.submitted = true;
      this.formData = form.value;
      console.log('Form submitted:', form.value);
      
      // You would typically send this data to a server
      // this.userService.createUser(form.value).subscribe(...)
    }
  }
}
```

### Form State and CSS Classes

Template-driven forms add CSS classes to form controls based on their state:

- `ng-untouched` / `ng-touched`: Whether the field has been blurred
- `ng-pristine` / `ng-dirty`: Whether the value has changed
- `ng-valid` / `ng-invalid`: Whether the value is valid

You can use these classes for styling:

```css
.ng-invalid.ng-touched {
  border-color: red;
}

.ng-valid.ng-touched {
  border-color: green;
}
```

## Reactive Forms

### Basic Implementation

1. Import `ReactiveFormsModule` in your module
2. Create form controls in the component class
3. Link the controls to your template

```typescript
// reactive-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  userForm!: FormGroup;
  submitted = false;
  
  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        zipCode: new FormControl('', [Validators.pattern(/^\d{5}(?:[-\s]\d{4})?$/)])
      })
    });
  }
  
  onSubmit() {
    if (this.userForm.valid) {
      this.submitted = true;
      console.log('Form submitted:', this.userForm.value);
      
      // You would typically send this data to a server
      // this.userService.createUser(this.userForm.value).subscribe(...)
    } else {
      // Mark all fields as touched to trigger validation
      this.markFormGroupTouched(this.userForm);
    }
  }
  
  // Helper method to mark all controls in a form group as touched
  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
  
  // Convenience getters for easy access in the template
  get name() { return this.userForm.get('name'); }
  get email() { return this.userForm.get('email'); }
  get address() { return this.userForm.get('address') as FormGroup; }
  get street() { return this.address.get('street'); }
  get city() { return this.address.get('city'); }
  get zipCode() { return this.address.get('zipCode'); }
}
```

```html
<!-- reactive-form.component.html -->
<form [formGroup]="userForm" (ngSubmit)="onSubmit()">
  <div class="form-group">
    <label for="name">Name</label>
    <input 
      type="text" 
      class="form-control" 
      id="name" 
      formControlName="name">
    <div class="alert alert-danger" *ngIf="name?.invalid && name?.touched">
      <div *ngIf="name?.errors?.required">Name is required</div>
      <div *ngIf="name?.errors?.minlength">Name must be at least 3 characters</div>
    </div>
  </div>

  <div class="form-group">
    <label for="email">Email</label>
    <input 
      type="email" 
      class="form-control" 
      id="email" 
      formControlName="email">
    <div class="alert alert-danger" *ngIf="email?.invalid && email?.touched">
      <div *ngIf="email?.errors?.required">Email is required</div>
      <div *ngIf="email?.errors?.email">Enter a valid email</div>
    </div>
  </div>

  <div formGroupName="address" class="form-group">
    <h3>Address</h3>
    
    <div class="form-group">
      <label for="street">Street</label>
      <input 
        type="text" 
        class="form-control" 
        id="street" 
        formControlName="street">
    </div>
    
    <div class="form-group">
      <label for="city">City</label>
      <input 
        type="text" 
        class="form-control" 
        id="city" 
        formControlName="city">
    </div>
    
    <div class="form-group">
      <label for="zipCode">Zip Code</label>
      <input 
        type="text" 
        class="form-control" 
        id="zipCode" 
        formControlName="zipCode">
      <div class="alert alert-danger" *ngIf="zipCode?.invalid && zipCode?.touched">
        <div *ngIf="zipCode?.errors?.pattern">Enter a valid zip code</div>
      </div>
    </div>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>

<div class="mt-4" *ngIf="submitted">
  <h3>Form Data:</h3>
  <pre>{{ userForm.value | json }}</pre>
</div>
```

### FormBuilder Service

For more complex forms, the `FormBuilder` service provides a more concise way to define form controls:

```typescript
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-builder',
  templateUrl: './reactive-form-builder.component.html'
})
export class ReactiveFormBuilderComponent implements OnInit {
  userForm!: FormGroup;
  
  constructor(private fb: FormBuilder) { }
  
  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      address: this.fb.group({
        street: [''],
        city: [''],
        zipCode: ['', [Validators.pattern(/^\d{5}(?:[-\s]\d{4})?$/)]]
      })
    });
  }
  
  // Rest of the component remains the same
}
```

## Form Validation

### Built-in Validators

Angular provides several built-in validators:

- `Validators.required`: Field cannot be empty
- `Validators.minLength(n)`: Field must have at least n characters
- `Validators.maxLength(n)`: Field cannot exceed n characters
- `Validators.pattern(regexp)`: Field must match the pattern
- `Validators.email`: Field must be a valid email format

### Custom Validators

You can create custom validators for specific validation requirements:

```typescript
// custom-validators.ts
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  // Password strength validator
  static passwordStrength(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      
      if (!value) {
        return null; // Let required validator handle empty fields
      }
      
      const hasUpperCase = /[A-Z]+/.test(value);
      const hasLowerCase = /[a-z]+/.test(value);
      const hasNumeric = /[0-9]+/.test(value);
      const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value);
      
      const isValid = hasUpperCase && hasLowerCase && hasNumeric && hasSpecialChar && value.length >= 8;
      
      if (!isValid) {
        return { passwordStrength: {
          hasUpperCase,
          hasLowerCase,
          hasNumeric,
          hasSpecialChar,
          minLength: value.length >= 8
        } };
      }
      
      return null;
    };
  }
  
  // Password match validator (for confirmation password)
  static passwordMatch(controlName: string, matchingControlName: string): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const control = group.get(controlName);
      const matchingControl = group.get(matchingControlName);
      
      if (!control || !matchingControl) {
        return null;
      }
      
      if (matchingControl.errors && !matchingControl.errors.passwordMatch) {
        return null; // Return if another validator has already found an error
      }
      
      // Set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ passwordMatch: true });
        return { passwordMatch: true };
      } else {
        matchingControl.setErrors(null);
        return null;
      }
    };
  }
}
```

Using custom validators:

```typescript
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html'
})
export class SignupFormComponent implements OnInit {
  signupForm!: FormGroup;
  
  constructor(private fb: FormBuilder) { }
  
  ngOnInit() {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      passwords: this.fb.group({
        password: ['', [
          Validators.required, 
          CustomValidators.passwordStrength()
        ]],
        confirmPassword: ['', Validators.required]
      }, { validators: CustomValidators.passwordMatch('password', 'confirmPassword') })
    });
  }
  
  // Rest of the component
}
```

### Async Validators

For validations that require server-side checks, like checking if a username is available:

```typescript
// username-validator.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, catchError, debounceTime, switchMap, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsernameValidatorService {
  constructor(private http: HttpClient) { }
  
  checkUsernameAvailability(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      if (!control.value) {
        return of(null); // Don't validate empty values
      }
      
      return of(control.value).pipe(
        debounceTime(500), // Wait for user to stop typing
        switchMap(username => 
          this.http.get<{ isAvailable: boolean }>(`/api/check-username/${username}`)
            .pipe(
              map(response => response.isAvailable ? null : { usernameExists: true }),
              catchError(() => of({ serverError: true })),
              first() // Complete observable after first response
            )
        )
      );
    };
  }
}
```

Using the async validator:

```typescript
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsernameValidatorService } from './username-validator.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html'
})
export class SignupFormComponent implements OnInit {
  signupForm!: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private usernameValidator: UsernameValidatorService
  ) { }
  
  ngOnInit() {
    this.signupForm = this.fb.group({
      username: ['', 
        [Validators.required, Validators.minLength(4)], 
        [this.usernameValidator.checkUsernameAvailability()]
      ],
      // Other form controls
    });
  }
}
```

## Dynamic Forms

Dynamic forms allow you to build forms with varying controls based on data or user interaction.

### FormArray for Dynamic Controls

`FormArray` allows you to manage an array of form controls:

```typescript
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html'
})
export class DynamicFormComponent implements OnInit {
  profileForm!: FormGroup;
  
  constructor(private fb: FormBuilder) { }
  
  ngOnInit() {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      skills: this.fb.array([
        this.createSkillFormGroup()
      ])
    });
  }
  
  get skills() {
    return this.profileForm.get('skills') as FormArray;
  }
  
  createSkillFormGroup(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      level: ['beginner', Validators.required]
    });
  }
  
  addSkill() {
    this.skills.push(this.createSkillFormGroup());
  }
  
  removeSkill(index: number) {
    this.skills.removeAt(index);
  }
  
  onSubmit() {
    console.log(this.profileForm.value);
  }
}
```

```html
<!-- dynamic-form.component.html -->
<form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
  <div class="form-group">
    <label for="firstName">First Name</label>
    <input type="text" class="form-control" id="firstName" formControlName="firstName">
  </div>
  
  <div class="form-group">
    <label for="lastName">Last Name</label>
    <input type="text" class="form-control" id="lastName" formControlName="lastName">
  </div>
  
  <div formArrayName="skills">
    <h3>Skills</h3>
    <div *ngFor="let skill of skills.controls; let i = index">
      <div [formGroupName]="i" class="row mb-2">
        <div class="col-5">
          <input type="text" class="form-control" formControlName="name" placeholder="Skill name">
        </div>
        <div class="col-5">
          <select class="form-control" formControlName="level">
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-danger" (click)="removeSkill(i)">Remove</button>
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-secondary mt-2" (click)="addSkill()">Add Skill</button>
  </div>
  
  <button type="submit" class="btn btn-primary mt-3" [disabled]="profileForm.invalid">Submit</button>
</form>

<pre *ngIf="profileForm.value">{{ profileForm.value | json }}</pre>
```

### Dynamic Form Configuration

You can also create forms dynamically based on configuration:

```typescript
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface FormField {
  key: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'select' | 'textarea';
  options?: { value: string; label: string }[];
  validators: any[];
  value?: any;
}

@Component({
  selector: 'app-dynamic-config-form',
  templateUrl: './dynamic-config-form.component.html'
})
export class DynamicConfigFormComponent implements OnInit {
  formFields: FormField[] = [
    {
      key: 'name',
      label: 'Name',
      type: 'text',
      validators: [Validators.required],
      value: ''
    },
    {
      key: 'email',
      label: 'Email',
      type: 'email',
      validators: [Validators.required, Validators.email],
      value: ''
    },
    {
      key: 'country',
      label: 'Country',
      type: 'select',
      options: [
        { value: 'usa', label: 'United States' },
        { value: 'canada', label: 'Canada' },
        { value: 'uk', label: 'United Kingdom' },
        { value: 'australia', label: 'Australia' }
      ],
      validators: [Validators.required],
      value: ''
    },
    {
      key: 'message',
      label: 'Message',
      type: 'textarea',
      validators: [Validators.maxLength(500)],
      value: ''
    }
  ];
  
  form!: FormGroup;
  
  constructor(private fb: FormBuilder) { }
  
  ngOnInit() {
    this.buildForm();
  }
  
  buildForm() {
    const formGroup: { [key: string]: any } = {};
    
    this.formFields.forEach(field => {
      formGroup[field.key] = [field.value || '', field.validators];
    });
    
    this.form = this.fb.group(formGroup);
  }
  
  onSubmit() {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
    } else {
      this.markFormGroupTouched(this.form);
    }
  }
  
  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}
```

```html
<!-- dynamic-config-form.component.html -->
<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <div *ngFor="let field of formFields" class="form-group">
    <label [for]="field.key">{{ field.label }}</label>
    
    <ng-container [ngSwitch]="field.type">
      <!-- Text, Email, Password inputs -->
      <input 
        *ngSwitchCase="'text' || 'email' || 'password'"
        [type]="field.type"
        class="form-control"
        [id]="field.key"
        [formControlName]="field.key">
      
      <!-- Select dropdown -->
      <select 
        *ngSwitchCase="'select'" 
        class="form-control"
        [id]="field.key"
        [formControlName]="field.key">
        <option value="">Select {{ field.label }}</option>
        <option *ngFor="let option of field.options" [value]="option.value">
          {{ option.label }}
        </option>
      </select>
      
      <!-- Textarea -->
      <textarea 
        *ngSwitchCase="'textarea'"
        class="form-control"
        [id]="field.key"
        [formControlName]="field.key"
        rows="4">
      </textarea>
    </ng-container>
    
    <!-- Field validation error messages -->
    <div class="text-danger" *ngIf="form.get(field.key)?.invalid && form.get(field.key)?.touched">
      <div *ngIf="form.get(field.key)?.errors?.required">
        {{ field.label }} is required
      </div>
      <div *ngIf="form.get(field.key)?.errors?.email">
        Please enter a valid email
      </div>
      <div *ngIf="form.get(field.key)?.errors?.maxlength">
        {{ field.label }} cannot exceed {{ form.get(field.key)?.errors?.maxlength.requiredLength }} characters
      </div>
    </div>
  </div>
  
  <button type="submit" class="btn btn-primary" [disabled]="form.invalid">Submit</button>
</form>
```

## Form Submission and Error Handling

### Handling Form Submission

```typescript
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './user.service';
import { catchError, finalize } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html'
})
export class UserFormComponent {
  userForm: FormGroup;
  isSubmitting = false;
  submitError: string | null = null;
  submitSuccess = false;
  
  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // Other form controls
    });
  }
  
  onSubmit() {
    if (this.userForm.invalid) {
      this.markFormGroupTouched(this.userForm);
      return;
    }
    
    this.isSubmitting = true;
    this.submitError = null;
    this.submitSuccess = false;
    
    this.userService.createUser(this.userForm.value)
      .pipe(
        catchError(error => {
          this.submitError = error.message || 'An error occurred. Please try again.';
          return of(null);
        }),
        finalize(() => {
          this.isSubmitting = false;
        })
      )
      .subscribe(response => {
        if (response) {
          this.submitSuccess = true;
          this.userForm.reset();
        }
      });
  }
  
  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
```

```html
<!-- user-form.component.html -->
<form [formGroup]="userForm" (ngSubmit)="onSubmit()">
  <!-- Form fields -->
  
  <div class="alert alert-danger" *ngIf="submitError">
    {{ submitError }}
  </div>
  
  <div class="alert alert-success" *ngIf="submitSuccess">
    User created successfully!
  </div>
  
  <button 
    type="submit" 
    class="btn btn-primary" 
    [disabled]="isSubmitting">
    {{ isSubmitting ? 'Submitting...' : 'Submit' }}
  </button>
</form>
```

## Best Practices

1. **Choose the right approach**:
   - Use template-driven forms for simple forms with basic validation
   - Use reactive forms for complex forms with dynamic controls or complex validation

2. **Validation strategies**:
   - Implement client-side validation for immediate feedback
   - Implement server-side validation for security
   - Consider using async validators for unique constraints

3. **Error handling**:
   - Provide clear error messages for each validation rule
   - Show validation errors after the field is touched or dirty
   - Group related form controls for better organization

4. **Performance**:
   - Use `OnPush` change detection strategy for better performance
   - Avoid excessive form control creation for large forms
   - Consider debouncing value changes for expensive operations

5. **Accessibility**:
   - Use proper HTML form elements with labels
   - Implement ARIA attributes for screen readers
   - Ensure keyboard navigation works correctly

6. **Testing**:
   - Unit test validators and form logic
   - Create integration tests for form components
   - Test edge cases and error scenarios

## Practical Exercise: Multi-step Form

Create a multi-step registration form with the following features:
1. Step 1: Basic Information (name, email, phone)
2. Step 2: Address Information (street, city, state, zip)
3. Step 3: Account Setup (username, password, confirm password)
4. Step 4: Review and Submit

Implement the following requirements:
- Each step should validate before proceeding to the next step
- Users should be able to navigate back and forth between steps
- Form data should be collected and submitted at the final step
- Implement custom validation for password strength and matching

## Additional Resources

- [Angular Forms Guide](https://angular.io/guide/forms-overview)
- [Reactive Forms in Depth](https://angular.io/guide/reactive-forms)
- [Template-driven Forms](https://angular.io/guide/forms)
- [Custom Form Validation](https://angular.io/guide/form-validation#custom-validators)
- [Dynamic Forms](https://angular.io/guide/dynamic-form)

## Next Steps

Now that you understand Angular Forms, proceed to the next chapter to learn about State Management, where you'll explore different approaches to managing application state in Angular applications.
