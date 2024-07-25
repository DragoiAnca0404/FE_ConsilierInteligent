import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HollandQuizComponent } from './holland-quiz.component';

describe('HollandQuizComponent', () => {
  let component: HollandQuizComponent;
  let fixture: ComponentFixture<HollandQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HollandQuizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HollandQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
