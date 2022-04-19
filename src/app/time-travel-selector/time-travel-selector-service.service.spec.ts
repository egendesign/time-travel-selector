import { TestBed } from '@angular/core/testing';

import { TimeTravelSelectorServiceService } from './time-travel-selector-service.service';

describe('TimeTravelSelectorServiceService', () => {
  let service: TimeTravelSelectorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeTravelSelectorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
