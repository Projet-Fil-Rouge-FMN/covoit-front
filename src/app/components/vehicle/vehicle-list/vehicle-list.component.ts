import { Component } from '@angular/core';
import { VehicleService } from '../../../services/vehicle.service';
import { Observable } from 'rxjs';
import { Vehicle } from '../../../models/vehicle.model';
import { AsyncPipe } from '@angular/common';
import { VehicleItemComponent } from '../vehicle-item/vehicle-item.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [AsyncPipe, VehicleItemComponent, RouterLink],
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.css',
})
export class VehicleListComponent {
  vehicle$: Observable<Vehicle[]>;

  constructor(private vehicleService: VehicleService) {
    this.vehicle$ = this.vehicleService.getVehicles();
  }
}
