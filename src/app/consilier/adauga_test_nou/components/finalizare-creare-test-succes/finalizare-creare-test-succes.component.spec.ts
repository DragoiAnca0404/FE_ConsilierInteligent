import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizareCreareTestSuccesComponent } from './finalizare-creare-test-succes.component';

describe('FinalizareCreareTestSuccesComponent', () => {
  let component: FinalizareCreareTestSuccesComponent;
  let fixture: ComponentFixture<FinalizareCreareTestSuccesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalizareCreareTestSuccesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalizareCreareTestSuccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
