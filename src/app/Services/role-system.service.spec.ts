import { TestBed } from '@angular/core/testing';

import { RoleSystemService } from './role-system.service';

describe('RoleSystemService', () => {
  let service: RoleSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
