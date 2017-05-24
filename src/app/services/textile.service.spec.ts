import { TestBed, inject } from '@angular/core/testing';

import { TextileService } from './textile.service';

describe('TextileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TextileService]
    });
  });

  it('should be created', inject([TextileService], (service: TextileService) => {
    expect(service).toBeTruthy();
  }));
});
