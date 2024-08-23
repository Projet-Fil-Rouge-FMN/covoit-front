import { Routes } from '@angular/router';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { VehicleListComponent } from './components/vehicle/vehicle-list/vehicle-list.component';
import { ServiceVehicleListComponent } from './components/service-vehicle/service-vehicle-list/service-vehicle-list.component';
import { RouteListComponent } from './components/route/route-list/route-list.component';
import { BookingListComponent } from './components/booking/booking-list/booking-list.component';
import { VehicleModelAddComponent } from './components/vehicle-model/vehicle-model-add/vehicle-model-add.component';
import { LoginComponent } from './components/auth/login/login.component';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';

export const routes: Routes = [
  { path: 'user', component: UserListComponent },
  { path: 'vehicle', component: VehicleListComponent },
  { path: 'service-vehicle', component: ServiceVehicleListComponent },
  { path: 'route', component: RouteListComponent },
  { path: 'booking', component: BookingListComponent },
  { path: 'add-vehicleModel', component: VehicleModelAddComponent },
  { path: 'add-brand', component: BrandAddComponent },
  {path: 'auth/login', component: LoginComponent},
];
