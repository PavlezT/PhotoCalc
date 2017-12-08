import { TestBed, inject } from '@angular/core/testing';

import { CalcParamsService } from './calc-params.service';

describe('CalcParamsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalcParamsService]
    });
  });

  it('should be created', inject([CalcParamsService], (service: CalcParamsService) => {
    expect(service).toBeTruthy();
  }));
});
