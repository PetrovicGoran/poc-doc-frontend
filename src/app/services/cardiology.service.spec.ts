import { TestBed } from '@angular/core/testing';

import { CardiologyService } from './cardiology.service';

describe('CardiologyService', () => {
  let service: CardiologyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardiologyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
