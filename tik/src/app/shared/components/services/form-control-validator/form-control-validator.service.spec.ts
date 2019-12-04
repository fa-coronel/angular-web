import { TestBed } from '@angular/core/testing';

import { FormControlValidatorService } from './form-control-validator.service';

describe('FormControlValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormControlValidatorService = TestBed.get(FormControlValidatorService);
    expect(service).toBeTruthy();
  });
});
