import { TestBed } from '@angular/core/testing';

import { AppLibroService } from './app-libro.service';

describe('AppLibroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppLibroService = TestBed.get(AppLibroService);
    expect(service).toBeTruthy();
  });
});
