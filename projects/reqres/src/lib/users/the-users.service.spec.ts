import { TestBed, inject } from '@angular/core/testing';

import { TheUsersService } from './the-users.service';

describe('TheUsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TheUsersService]
    });
  });

  it('should be created', inject([TheUsersService], (service: TheUsersService) => {
    expect(service).toBeTruthy();
  }));
});
