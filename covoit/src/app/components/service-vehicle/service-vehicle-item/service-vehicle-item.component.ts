import { Component, Input } from '@angular/core';
import { ServiceVehicle } from '../../../models/serviceVehicle.model';

@Component({
  selector: 'app-service-vehicle-item',
  standalone: true,
  imports: [],
  templateUrl: './service-vehicle-item.component.html',
  styleUrl: './service-vehicle-item.component.css',
})
export class ServiceVehicleItemComponent {
  @Input() sv!: ServiceVehicle;
  constructor() {}
}
