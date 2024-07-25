import { TestBed } from '@angular/core/testing';

import { CreareSiGestionareTestService } from './creare-si-gestionare-test.service';

describe('CreareSiGestionareTestService', () => {
  let service: CreareSiGestionareTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreareSiGestionareTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
