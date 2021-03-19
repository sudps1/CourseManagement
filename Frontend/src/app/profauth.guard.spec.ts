import { TestBed } from '@angular/core/testing';

import { ProfauthGuard } from './profauth.guard';

describe('ProfauthGuard', () => {
  let guard: ProfauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProfauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
