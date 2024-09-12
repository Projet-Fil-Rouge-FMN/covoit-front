import { TestBed } from '@angular/core/testing';

import { ServiceVehicleService } from './service-vehicle.service';

describe('ServiceVehicleService', () => {
  let service: ServiceVehicleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceVehicleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
