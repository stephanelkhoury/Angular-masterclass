import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-fade-in-out',
  template: `
    <h2>Fade In/Out Animations</h2>
    <hr>
    
    <div class="mb-4">
      <h4>Simple Fade In/Out</h4>
      <button class="btn btn-primary me-2" (click)="toggleVisibility()">
        {{ isVisible ? 'Hide' : 'Show' }}
      </button>
      
      <div [@simpleFade]="isVisible ? 'visible' : 'hidden'" class="demo-box mt-3 bg-info">
        <p>Simple fade animation with state</p>
      </div>
    </div>
    
    <div class="mb-4">
      <h4>Fade with Different Durations</h4>
      <div class="btn-group">
        <button class="btn btn-outline-primary" (click)="showWithDuration('fast')">Fast</button>
        <button class="btn btn-outline-primary" (click)="showWithDuration('medium')">Medium</button>
        <button class="btn btn-outline-primary" (click)="showWithDuration('slow')">Slow</button>
        <button class="btn btn-outline-danger" (click)="showWithDuration('none')">Hide</button>
      </div>
      
      <div [@durationFade]="fadeDuration" class="demo-box mt-3 bg-warning">
        <p>Fade with {{ fadeDuration }} duration</p>
      </div>
    </div>
    
    <div class="mb-4">
      <h4>Fade with Different Easing</h4>
      <div class="btn-group">
        <button class="btn btn-outline-primary" (click)="showWithEasing('ease')">Ease</button>
        <button class="btn btn-outline-primary" (click)="showWithEasing('linear')">Linear</button>
        <button class="btn btn-outline-primary" (click)="showWithEasing('ease-in')">Ease In</button>
        <button class="btn btn-outline-primary" (click)="showWithEasing('ease-out')">Ease Out</button>
        <button class="btn btn-outline-primary" (click)="showWithEasing('ease-in-out')">Ease In Out</button>
        <button class="btn btn-outline-danger" (click)="showWithEasing('none')">Hide</button>
      </div>
      
      <div [@easingFade]="fadeEasing" class="demo-box mt-3 bg-success">
        <p>Fade with {{ fadeEasing }} easing</p>
      </div>
    </div>
  `,
  styles: [`
    .demo-box {
      padding: 20px;
      border-radius: 5px;
      color: white;
      margin: 10px 0;
      max-width: 400px;
    }
  `],
  animations: [
    trigger('simpleFade', [
      state('visible', style({
        opacity: 1
      })),
      state('hidden', style({
        opacity: 0
      })),
      transition('visible => hidden', [
        animate('0.5s')
      ]),
      transition('hidden => visible', [
        animate('0.5s')
      ])
    ]),
    
    trigger('durationFade', [
      state('none', style({
        opacity: 0
      })),
      state('*', style({
        opacity: 1
      })),
      transition('* => none', [
        animate('0.5s')
      ]),
      transition('none => fast', [
        animate('0.2s')
      ]),
      transition('none => medium', [
        animate('0.5s')
      ]),
      transition('none => slow', [
        animate('1s')
      ])
    ]),
    
    trigger('easingFade', [
      state('none', style({
        opacity: 0
      })),
      state('*', style({
        opacity: 1
      })),
      transition('* => none', [
        animate('0.5s')
      ]),
      transition('none => ease', [
        animate('0.5s ease')
      ]),
      transition('none => linear', [
        animate('0.5s linear')
      ]),
      transition('none => ease-in', [
        animate('0.5s ease-in')
      ]),
      transition('none => ease-out', [
        animate('0.5s ease-out')
      ]),
      transition('none => ease-in-out', [
        animate('0.5s ease-in-out')
      ])
    ])
  ]
})
export class FadeInOutComponent {
  isVisible = true;
  fadeDuration = 'medium';
  fadeEasing = 'ease';
  
  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
  
  showWithDuration(duration: string) {
    this.fadeDuration = duration;
  }
  
  showWithEasing(easing: string) {
    this.fadeEasing = easing;
  }
}