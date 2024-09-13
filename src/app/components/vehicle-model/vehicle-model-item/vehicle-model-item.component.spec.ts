import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleModelItemComponent } from './vehicle-model-item.component';

describe('VehicleModelItemComponent', () => {
  let component: VehicleModelItemComponent;
  let fixture: ComponentFixture<VehicleModelItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleModelItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleModelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
