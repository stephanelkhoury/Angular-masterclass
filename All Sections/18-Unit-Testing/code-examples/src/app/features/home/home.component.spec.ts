import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HomeComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display welcome message', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Welcome to Angular Unit Testing');
  });

  it('should display all testing categories', () => {
    const categoryElements = fixture.debugElement.queryAll(By.css('.category-card'));
    expect(categoryElements.length).toBe(component.testingCategories.length);
  });

  it('should display correct route links for each category', () => {
    const categoryElements = fixture.debugElement.queryAll(By.css('.category-card a'));
    
    categoryElements.forEach((el, index) => {
      const href = el.nativeElement.getAttribute('href');
      expect(href).toContain(component.testingCategories[index].route);
    });
  });
});
