import { TestBed } from '@angular/core/testing';

import { QuotationUtilService } from './quotation-util.service';

describe('QuotationUtilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuotationUtilService = TestBed.get(QuotationUtilService);
    expect(service).toBeTruthy();
  });
});
