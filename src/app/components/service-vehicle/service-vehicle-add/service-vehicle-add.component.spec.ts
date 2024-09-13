import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceVehicleAddComponent } from './service-vehicle-add.component';

describe('ServiceVehicleAddComponent', () => {
  let component: ServiceVehicleAddComponent;
  let fixture: ComponentFixture<ServiceVehicleAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceVehicleAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceVehicleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
