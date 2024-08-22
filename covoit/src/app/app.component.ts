import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './components/user/user-list/user-list.component';

import { BrandListComponent } from './components/brand/brand-list/brand-list.component';

import { RouteListComponent } from './components/route/route-list/route-list.component';
import { AddressListComponent } from './components/address/address-list/address-list.component';
import { VehicleListComponent } from "./components/vehicle/vehicle-list/vehicle-list.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserListComponent,
    RouteListComponent,
    AddressListComponent,
    VehicleListComponent,
    BrandListComponent
    
],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'covoit';
}
