import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';
import { By } from '@angular/platform-browser';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    // Note: We're not calling detectChanges() yet to test inputs
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should use default values when no inputs provided', () => {
    fixture.detectChanges();
    expect(component.label).toBe('Counter');
    expect(component.counter).toBe(0);
  });

  it('should use provided input values', () => {
    // Set input properties
    component.label = 'Test Counter';
    component.initialValue = 10;
    
    // Trigger change detection
    fixture.detectChanges();
    
    // Verify component state
    expect(component.label).toBe('Test Counter');
    expect(component.counter).toBe(10);
    
    // Verify template rendering
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3')?.textContent).toBe('Test Counter');
    expect(compiled.querySelector('.counter-value')?.textContent).toBe('10');
  });

  it('should increment the counter when + button is clicked', () => {
    fixture.detectChanges();
    
    // Setup spy for output event
    const counterChangeSpy = spyOn(component.counterChange, 'emit');
    
    // Trigger button click
    const incrementButton = fixture.debugElement.queryAll(By.css('.counter-button'))[1];
    incrementButton.triggerEventHandler('click', null);
    
    // Check component state
    expect(component.counter).toBe(1);
    
    // Check UI update after change detection
    fixture.detectChanges();
    const counterValue = fixture.debugElement.query(By.css('.counter-value')).nativeElement;
    expect(counterValue.textContent).toBe('1');
    
    // Check that the output event was emitted with the correct value
    expect(counterChangeSpy).toHaveBeenCalledWith(1);
  });

  it('should decrement the counter when - button is clicked', () => {
    // Initialize with value > 0
    component.initialValue = 5;
    fixture.detectChanges();
    
    // Setup spy
    const counterChangeSpy = spyOn(component.counterChange, 'emit');
    
    // Click decrement button
    const decrementButton = fixture.debugElement.queryAll(By.css('.counter-button'))[0];
    decrementButton.triggerEventHandler('click', null);
    
    // Check state and UI
    expect(component.counter).toBe(4);
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.counter-value')).nativeElement.textContent).toBe('4');
    expect(counterChangeSpy).toHaveBeenCalledWith(4);
  });

  it('should disable decrement button when counter is 0', () => {
    fixture.detectChanges();
    
    const decrementButton = fixture.debugElement.queryAll(By.css('.counter-button'))[0].nativeElement;
    
    // Button should be disabled when counter is 0
    expect(decrementButton.disabled).toBe(true);
    
    // Increment to make counter > 0
    component.increment();
    fixture.detectChanges();
    
    // Button should now be enabled
    expect(decrementButton.disabled).toBe(false);
  });

  it('should reset counter to 0 when reset button is clicked', () => {
    // Initialize with value > 0
    component.initialValue = 10;
    fixture.detectChanges();
    
    // Setup spy
    const counterChangeSpy = spyOn(component.counterChange, 'emit');
    
    // Click reset button
    const resetButton = fixture.debugElement.query(By.css('.reset-button'));
    resetButton.triggerEventHandler('click', null);
    
    // Check state and UI
    expect(component.counter).toBe(0);
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.counter-value')).nativeElement.textContent).toBe('0');
    expect(counterChangeSpy).toHaveBeenCalledWith(0);
  });
});
