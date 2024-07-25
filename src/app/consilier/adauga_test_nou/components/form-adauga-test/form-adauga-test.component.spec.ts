import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAdaugaTestComponent } from './form-adauga-test.component';

describe('FormAdaugaTestComponent', () => {
  let component: FormAdaugaTestComponent;
  let fixture: ComponentFixture<FormAdaugaTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAdaugaTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAdaugaTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
