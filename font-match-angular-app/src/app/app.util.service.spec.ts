import { TestBed } from '@angular/core/testing';

import { App.UtilService } from './app.util.service';

describe('App.UtilService', () => {
  let service: App.UtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(App.UtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
