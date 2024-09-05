import { Routes } from '@angular/router';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { VehicleListComponent } from './components/vehicle/vehicle-list/vehicle-list.component';
import { ServiceVehicleListComponent } from './components/service-vehicle/service-vehicle-list/service-vehicle-list.component';
import { RouteListComponent } from './components/route/route-list/route-list.component';
import { VehicleModelAddComponent } from './components/vehicle-model/vehicle-model-add/vehicle-model-add.component';
import { LoginComponent } from './components/auth/login/login.component';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { AddressAddComponent } from './components/address/address-add/address-add.component';
import { BookingListComponent } from './components/booking/booking-list/booking-list.component';
import { BrandListComponent } from './components/brand/brand-list/brand-list.component';
import { BookingAddComponent } from './components/booking/booking-add/booking-add.component';

export const routes: Routes = [
  { path: 'user', component: UserListComponent },
  { path: 'vehicle', component: VehicleListComponent },
  { path: 'service-vehicle', component: ServiceVehicleListComponent },
  { path: 'route', component: RouteListComponent },
  { path: 'booking', component: BookingListComponent },
  { path: 'add-vehicleModel', component: VehicleModelAddComponent },
  { path: 'brands', component: BrandListComponent },
  { path: 'add-brand', component: BrandAddComponent },
  { path: 'add-address', component: AddressAddComponent },
  { path: 'add-booking', component: BookingAddComponent },
  { path: 'login', component: LoginComponent },
];
