import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { VehicleModelItemComponent } from '../vehicle-model-item/vehicle-model-item.component';
import { Observable } from 'rxjs';
import { VehicleModel } from '../../../models/vehicleModel.model';
import { VehicleModelService } from '../../../services/vehicle-model.service';

@Component({
  selector: 'app-vehicle-model-list',
  standalone: true,
  imports: [AsyncPipe, VehicleModelItemComponent],
  templateUrl: './vehicle-model-list.component.html',
  styleUrl: './vehicle-model-list.component.css',
})
export class VehicleModelListComponent {
  models$: Observable<VehicleModel[]>;

  constructor(private modelService: VehicleModelService) {
    this.models$ = this.modelService.getModels();
  }
}
