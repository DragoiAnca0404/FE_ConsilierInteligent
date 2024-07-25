import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectQuizSectionComponent } from './select-quiz-section.component';

describe('SelectQuizSectionComponent', () => {
  let component: SelectQuizSectionComponent;
  let fixture: ComponentFixture<SelectQuizSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectQuizSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectQuizSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
