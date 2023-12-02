import { TestBed } from '@angular/core/testing';

import { TipopyService } from './tipopy.service';

describe('TipopyService', () => {
  let service: TipopyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipopyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
