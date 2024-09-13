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
  ServiceVehicleForm = this.formBuilder.group({
    registration: ['', Validators.required],
    nbSeat: [0, Validators.required],
    brand: [0, Validators.required],
    model: [0, Validators.required],
    category: [0, Validators.required],
    state: ['', Validators.required],
    picture: ['', Validators.required],
    motorization: ['', Validators.required],
    co2Km: [0, Validators.required],
  });
  constructor(private formBuilder: NonNullableFormBuilder) {}

  ngOnInit() {
    if (this.defaultServiceVehicle) {
      const { id, brand, model, category, ...serviceVehicle } =
        this.defaultServiceVehicle;

      // Convertir brand, model et category en identifiants numériques
      const brandId =
        typeof brand === 'object' && brand !== null ? brand.id : brand;
      const modelId =
        typeof model === 'object' && model !== null ? model.id : model;
      const categoryId =
        typeof category === 'object' && category !== null
          ? category.id
          : category;
      this.ServiceVehicleForm.setValue({
        registration: serviceVehicle.registration || '',
        nbSeat: serviceVehicle.nbSeat || 0,
        brand: brandId || 0,
        model: modelId || 0,
        category: categoryId || 0,
        state: serviceVehicle.state || '',
        picture: serviceVehicle.picture || '',
        motorization: serviceVehicle.motorization || '',
        co2Km: serviceVehicle.co2Km || 0,
      });
    }
  }

  submit() {
    if (this.ServiceVehicleForm.valid) {
      // Création de l'objet ServiceVehicle basé sur le formulaire
      const serviceVehicle: ServiceVehicle = {
        id: this.defaultServiceVehicle?.id || 0,
        registration: this.ServiceVehicleForm.value.registration || '',
        nbSeat: this.ServiceVehicleForm.value.nbSeat || 0,
        brand: { id: this.ServiceVehicleForm.value.brand || 0, name: '' }, // Ajuster la structure de 'brand'
        model: { id: this.ServiceVehicleForm.value.model || 0, name: '' }, // Ajuster la structure de 'model'
        category: { id: this.ServiceVehicleForm.value.category || 0, name: '' }, // Ajuster la structure de 'category'
        state: this.ServiceVehicleForm.value.state || '',
        picture: this.ServiceVehicleForm.value.picture || '',
        motorization: this.ServiceVehicleForm.value.motorization || '',
        co2Km: this.ServiceVehicleForm.value.co2Km || 0,
      };

      // Émission de l'événement onSubmit avec le serviceVehicle
      this.onSubmit.emit(serviceVehicle);
    } else {
      console.error('Form is invalid');
    }
  }
}
