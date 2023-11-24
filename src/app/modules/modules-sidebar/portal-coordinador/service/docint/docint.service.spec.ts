import { TestBed } from '@angular/core/testing';

import { DocintService } from './docint.service';

describe('DocintService', () => {
  let service: DocintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
