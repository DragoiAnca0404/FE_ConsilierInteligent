import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAQuizComponent } from './select-a-quiz.component';

describe('SelectAQuizComponent', () => {
  let component: SelectAQuizComponent;
  let fixture: ComponentFixture<SelectAQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectAQuizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectAQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
