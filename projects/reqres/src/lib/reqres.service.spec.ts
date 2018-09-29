import { TestBed, inject } from '@angular/core/testing';

import { ReqresService } from './reqres.service';

describe('ReqresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReqresService]
    });
  });

  it('should be created', inject([ReqresService], (service: ReqresService) => {
    expect(service).toBeTruthy();
  }));
});
