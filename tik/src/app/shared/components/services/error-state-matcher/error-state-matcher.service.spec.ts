import { TestBed } from '@angular/core/testing';

import { ErrorStateMatcherService } from './error-state-matcher.service';

describe('ErrorStateMatcherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorStateMatcherService = TestBed.get(ErrorStateMatcherService);
    expect(service).toBeTruthy();
  });
});
