import { Component, EventEmitter, Input, model, Output } from '@angular/core';
import {
  Validators,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { ServiceVehicle } from '../../../models/serviceVehicle.model';

@Component({
  selector: 'app-service-vehicle-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './service-vehicle-form.component.html',
  styleUrl: './service-vehicle-form.component.css',
})
export class ServiceVehicleFormComponent {
  @Input() defaultServiceVehicle?: ServiceVehicle;
  @Output() onSubmit = new EventEmitter<ServiceVehicle>();
  addressForm = this.formBuilder.group({
    registration: ['', Validators.required],
    nbSeat: ['', Validators.required],
    brand: [0, Validators.required],
    model: [0, Validators.required],
    category: [0, Validators.required],
    state: [0, Validators.required],
    picture: ['', Validators.required],
    motorization: ['', Validators.required],
    co2Km: [0, Validators.required],
  });
  constructor(private formBuilder: NonNullableFormBuilder) {}

  ngOnInit() {
    if (this.defaultServiceVehicle) {
      const { id, ...ServiceVehicle } = this.defaultServiceVehicle;
      this.addressForm.setValue(ServiceVehicle);
    }
  }

  submit() {
    const serviceVehicle: ServiceVehicle = {
      id: this.defaultServiceVehicle?.id || 0,
      detail: this.addressForm.value.detail || '',
      city: this.addressForm.value.city || '',
      country: this.addressForm.value.country || '',
    };
    this.onSubmit.emit(serviceVehicle);
  }
}
