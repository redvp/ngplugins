import { inject, TestBed } from '@angular/core/testing';

import { ModuleaService } from './modulea.service';

describe('ModuleaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModuleaService],
    });
  });

  it('should be created', inject(
    [ModuleaService],
    (service: ModuleaService) => {
      expect(service).toBeTruthy();
    }
  ));
});
