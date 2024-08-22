import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceVehicle } from '../models/serviceVehicle.model';

@Injectable({
  providedIn: 'root',
})
export class ServiceVehicleService {
  private apiUrl = 'http://localhost:8081/service-vehicle/';

  constructor(private http: HttpClient) {}

  getServiceVehicles(): Observable<ServiceVehicle[]> {
    return this.http.get<ServiceVehicle[]>(this.apiUrl);
  }
}
