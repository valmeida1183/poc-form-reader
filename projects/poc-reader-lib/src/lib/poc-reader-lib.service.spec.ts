import { TestBed } from '@angular/core/testing';

import { PocReaderLibService } from './poc-reader-lib.service';

describe('PocReaderLibService', () => {
  let service: PocReaderLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PocReaderLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
