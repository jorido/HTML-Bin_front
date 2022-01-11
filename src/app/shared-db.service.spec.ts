import { TestBed } from '@angular/core/testing';

import { SharedDBService } from './shared-db.service';

describe('SharedDBService', () => {
  let service: SharedDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
