import { Component, Input } from '@angular/core';
import { Vehicle } from '../../../models/vehicle.model';

@Component({
  selector: 'app-vehicle-item',
  standalone: true,
  imports: [],
  templateUrl: './vehicle-item.component.html',
  styleUrl: './vehicle-item.component.css'
})
export class VehicleItemComponent {
  @Input() vehicle!: Vehicle;
}
