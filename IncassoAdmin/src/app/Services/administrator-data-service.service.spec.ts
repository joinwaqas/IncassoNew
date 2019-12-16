import { TestBed } from '@angular/core/testing';

import { AdministratorDataService } from './administrator-data.service';

describe('AdministratorDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdministratorDataService = TestBed.get(AdministratorDataService);
    expect(service).toBeTruthy();
  });
});
