import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ServiceVehicleItemComponent } from '../service-vehicle-item/service-vehicle-item.component';
import { Observable } from 'rxjs';
import { ServiceVehicle } from '../../../models/serviceVehicle.model';
import { ServiceVehicleService } from '../../../services/service-vehicle.service';

@Component({
  selector: 'app-service-vehicle-list',
  standalone: true,
  imports: [AsyncPipe, ServiceVehicleItemComponent],
  templateUrl: './service-vehicle-list.component.html',
  styleUrl: './service-vehicle-list.component.css',
})
export class ServiceVehicleListComponent {
  sVs$: Observable<ServiceVehicle[]>;
  constructor(private svService: ServiceVehicleService) {
    this.sVs$ = this.svService.getServiceVehicles();
  }
}
