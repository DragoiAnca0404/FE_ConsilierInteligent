import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardPageComponent } from './onboard-page.component';

describe('OnboardPageComponent', () => {
  let component: OnboardPageComponent;
  let fixture: ComponentFixture<OnboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnboardPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
