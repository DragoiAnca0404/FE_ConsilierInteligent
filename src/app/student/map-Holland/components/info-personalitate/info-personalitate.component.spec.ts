import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPersonalitateComponent } from './info-personalitate.component';

describe('InfoPersonalitateComponent', () => {
  let component: InfoPersonalitateComponent;
  let fixture: ComponentFixture<InfoPersonalitateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPersonalitateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPersonalitateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
