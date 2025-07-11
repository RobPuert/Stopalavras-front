import { TestBed } from '@angular/core/testing';

import { CronometroService } from './configuracoes.service';

describe('CronometroService', () => {
  let service: CronometroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CronometroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
