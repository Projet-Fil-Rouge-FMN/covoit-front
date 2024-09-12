import { Component, Input } from '@angular/core';
import { VehicleModel } from '../../../models/vehicleModel.model';

@Component({
  selector: 'app-vehicle-model-item',
  standalone: true,
  imports: [],
  templateUrl: './vehicle-model-item.component.html',
  styleUrl: './vehicle-model-item.component.css',
})
export class VehicleModelItemComponent {
  @Input() model!: VehicleModel;
  constructor() {}
}
