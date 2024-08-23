import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { VehicleModelService } from '../../../services/vehicle-model.service';
import { Router } from '@angular/router';
import { VehicleModel } from '../../../models/vehicleModel.model';
import { ReactiveFormsModule } from '@angular/forms';
import { VehicleModelFormComponent } from '../vehicle-model-form/vehicle-model-form.component';

@Component({
  selector: 'app-vehicle-model-add',
  standalone: true,
  imports: [ReactiveFormsModule, VehicleModelFormComponent],
  templateUrl: './vehicle-model-add.component.html',
  styleUrl: './vehicle-model-add.component.css'
})
export class VehicleModelAddComponent {
  private sub: Subscription[] = [];
  constructor(private vehicleModelService: VehicleModelService, private router: Router){}

  ngOnDestroy() {
    this.sub.forEach((subscription) => subscription.unsubscribe());
  }

  addVehicleModel(newVehicleModel: VehicleModel){
    if(newVehicleModel){
      this.sub.push(
        this.vehicleModelService
          .addVehicleModel(newVehicleModel)
          .subscribe(() => this.router.navigate(['vehicleModels']))
      )
    }
  }
}
