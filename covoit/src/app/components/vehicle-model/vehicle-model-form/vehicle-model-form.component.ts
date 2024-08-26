import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VehicleModel } from '../../../models/vehicleModel.model';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-vehicle-model-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './vehicle-model-form.component.html',
  styleUrl: './vehicle-model-form.component.css',
})
export class VehicleModelFormComponent {
  @Input() defautVehicleModel?: VehicleModel;
  @Output() onSubmit = new EventEmitter<VehicleModel>();
  vehicleModelForm = this.formBuilder.group({
    name: ['', Validators.required],
  });
  constructor(private formBuilder: NonNullableFormBuilder) {}

  ngOnInit() {
    if (this.defautVehicleModel) {
      const { id, ...vehicleModel } = this.defautVehicleModel;
      this.vehicleModelForm.setValue(vehicleModel);
    }
  }

  submit() {
    const vehicleModel: VehicleModel = {
      id: this.defautVehicleModel?.id || 0,
      name: this.vehicleModelForm.value.name || '',
    };
    this.onSubmit.emit(vehicleModel);
  }
}
