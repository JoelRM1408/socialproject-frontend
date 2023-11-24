import { TestBed } from '@angular/core/testing';

import { TipodocintService } from './tipodocint.service';

describe('TipodocintService', () => {
  let service: TipodocintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipodocintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
