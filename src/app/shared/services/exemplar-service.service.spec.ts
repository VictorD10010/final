import { TestBed } from '@angular/core/testing';

import { ExemplarServiceService } from './exemplar-service.service';

describe('ExemplarServiceService', () => {
  let service: ExemplarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExemplarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
