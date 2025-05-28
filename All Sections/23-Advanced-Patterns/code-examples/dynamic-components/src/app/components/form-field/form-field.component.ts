import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  template: `
    <div [formGroup]="parentForm" class="mb-3">
      <label [for]="field.key" class="form-label">{{ field.label }}</label>
      
      <ng-container [ngSwitch]="field.type">
        <!-- Input field -->
        <input *ngSwitchCase="'text'"
               [type]="field.inputType || 'text'"
               class="form-control"
               [id]="field.key"
               [formControlName]="field.key"
               [placeholder]="field.placeholder || ''"
               [required]="field.required">
        
        <!-- Textarea field -->
        <textarea *ngSwitchCase="'textarea'"
                  class="form-control"
                  [id]="field.key"
                  [formControlName]="field.key"
                  [placeholder]="field.placeholder || ''"
                  [rows]="field.rows || 3"
                  [required]="field.required"></textarea>
        
        <!-- Select field -->
        <select *ngSwitchCase="'select'"
                class="form-select"
                [id]="field.key"
                [formControlName]="field.key"
                [required]="field.required">
          <option value="" disabled>{{ field.placeholder || 'Select an option' }}</option>
          <option *ngFor="let option of field.options" [value]="option.value">
            {{ option.label }}
          </option>
        </select>
        
        <!-- Checkbox field -->
        <div *ngSwitchCase="'checkbox'" class="form-check">
          <input type="checkbox"
                 class="form-check-input"
                 [id]="field.key"
                 [formControlName]="field.key">
          <label class="form-check-label" [for]="field.key">
            {{ field.checkboxLabel || field.label }}
          </label>
        </div>
        
        <!-- Radio button group -->
        <div *ngSwitchCase="'radio'" class="form-check-group">
          <div *ngFor="let option of field.options; let i = index" class="form-check">
            <input type="radio"
                   class="form-check-input"
                   [id]="field.key + '-' + i"
                   [value]="option.value"
                   [formControlName]="field.key">
            <label class="form-check-label" [for]="field.key + '-' + i">
              {{ option.label }}
            </label>
          </div>
        </div>
        
        <!-- Default - text input -->
        <input *ngSwitchDefault
               type="text"
               class="form-control"
               [id]="field.key"
               [formControlName]="field.key"
               [placeholder]="field.placeholder || ''"
               [required]="field.required">
      </ng-container>
      
      <!-- Validation errors -->
      <div *ngIf="showErrors && getControl(field.key).errors" class="invalid-feedback d-block">
        <div *ngIf="getControl(field.key).errors?.required">
          {{ field.label }} is required.
        </div>
        <div *ngIf="getControl(field.key).errors?.email">
          Please enter a valid email address.
        </div>
        <div *ngIf="getControl(field.key).errors?.minlength">
          {{ field.label }} must be at least {{ getControl(field.key).errors?.minlength.requiredLength }} characters.
        </div>
        <div *ngIf="getControl(field.key).errors?.pattern">
          {{ field.label }} format is invalid.
        </div>
      </div>
      
      <!-- Help text -->
      <div *ngIf="field.helpText" class="form-text text-muted">
        {{ field.helpText }}
      </div>
    </div>
  `,
  styles: []
})
export class FormFieldComponent implements OnChanges {
  @Input() field!: any;
  @Input() parentForm!: FormGroup;
  @Input() showErrors = false;
  
  constructor() { }
  
  ngOnChanges(changes: SimpleChanges): void {
    // Could add logic when field or form changes
  }
  
  getControl(name: string) {
    return this.parentForm.get(name)!;
  }
}
