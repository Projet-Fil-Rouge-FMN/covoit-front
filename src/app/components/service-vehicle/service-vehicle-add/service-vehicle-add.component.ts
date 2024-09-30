import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceVehicleFormComponent } from '../service-vehicle-form/service-vehicle-form.component';
import { Subscription } from 'rxjs';
import { ServiceVehicleService } from '../../../services/service-vehicle.service';
import { Router } from '@angular/router';
import { ServiceVehicle } from '../../../models/serviceVehicle.model';

@Component({
  selector: 'app-service-vehicle-add',
  standalone: true,
  imports: [ReactiveFormsModule, ServiceVehicleFormComponent],
  templateUrl: './service-vehicle-add.component.html',
  styleUrl: './service-vehicle-add.component.css',
})
export class ServiceVehicleAddComponent {
  private sub: Subscription[] = [];

  constructor(
    private serviceVehicleService: ServiceVehicleService,
    private router: Router
  ) {}

  ngOnDestroy() {
    this.sub.forEach((subscription) => subscription.unsubscribe());
  }

  addServiceVehicle(newServiceVehicle: ServiceVehicle) {
    if (newServiceVehicle) {
      this.sub.push(
        this.serviceVehicleService
          .addServiceVehicle(newServiceVehicle)
          .subscribe(() => this.router.navigate(['./service-vehicles']))
      );
    }
  }
}
