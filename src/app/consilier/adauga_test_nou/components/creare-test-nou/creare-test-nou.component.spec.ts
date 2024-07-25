import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreareTestNouComponent } from './creare-test-nou.component';

describe('CreareTestNouComponent', () => {
  let component: CreareTestNouComponent;
  let fixture: ComponentFixture<CreareTestNouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreareTestNouComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreareTestNouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
