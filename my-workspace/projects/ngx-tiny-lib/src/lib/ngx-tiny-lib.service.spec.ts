import { TestBed } from '@angular/core/testing';

import { NgxTinyLibService } from './ngx-tiny-lib.service';

describe('NgxTinyLibService', () => {
  let service: NgxTinyLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTinyLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
