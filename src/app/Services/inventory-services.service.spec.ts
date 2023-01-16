import { TestBed } from '@angular/core/testing';

import { InventoryServicesService } from './inventory-services.service';

describe('InventoryServicesService', () => {
  let service: InventoryServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventoryServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
