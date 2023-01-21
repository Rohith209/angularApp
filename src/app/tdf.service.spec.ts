import { TestBed } from '@angular/core/testing';

import { TdfService } from './tdf.service';

describe('TdfService', () => {
  let service: TdfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TdfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
