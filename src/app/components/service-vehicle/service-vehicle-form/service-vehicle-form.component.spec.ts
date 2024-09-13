import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceVehicleFormComponent } from './service-vehicle-form.component';

describe('ServiceVehicleFormComponent', () => {
  let component: ServiceVehicleFormComponent;
  let fixture: ComponentFixture<ServiceVehicleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceVehicleFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceVehicleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
