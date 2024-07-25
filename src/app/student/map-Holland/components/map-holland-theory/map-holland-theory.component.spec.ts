import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapHollandTheoryComponent } from './map-holland-theory.component';

describe('MapHollandTheoryComponent', () => {
  let component: MapHollandTheoryComponent;
  let fixture: ComponentFixture<MapHollandTheoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapHollandTheoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapHollandTheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
