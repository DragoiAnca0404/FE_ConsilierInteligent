import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassionBasedQuizComponent } from './passion-based-quiz.component';

describe('PassionBasedQuizComponent', () => {
  let component: PassionBasedQuizComponent;
  let fixture: ComponentFixture<PassionBasedQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassionBasedQuizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassionBasedQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
