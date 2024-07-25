import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelanceSectionComponent } from './freelance-section.component';

describe('FreelanceSectionComponent', () => {
  let component: FreelanceSectionComponent;
  let fixture: ComponentFixture<FreelanceSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreelanceSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreelanceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
