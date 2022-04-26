import { TestBed } from '@angular/core/testing';

import { BancaapiService } from './bancaapi.service';

describe('BancaapiService', () => {
  let service: BancaapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BancaapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
