import { TestBed } from '@angular/core/testing';

import { TimeTravelSelectorResolverServiceResolver } from './time-travel-selector-resolver-service.resolver';

describe('TimeTravelSelectorResolverServiceResolver', () => {
  let resolver: TimeTravelSelectorResolverServiceResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TimeTravelSelectorResolverServiceResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
