import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceVehicle } from '../models/serviceVehicle.model';
import { environment } from '../../environments/environment';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';

@Injectable({
  providedIn: 'root',
})
export class ServiceVehicleService {
  private apiUrl = environment.apiURL + '/servicevehicle';

  constructor(private http: HttpClient) {}

  getServiceVehicles(): Observable<ServiceVehicle[]> {
    return this.http.get<ServiceVehicle[]>(this.apiUrl);
  }

  getServiceVehicleById(id: Number): Observable<ServiceVehicle> {
    return this.http.get<ServiceVehicle>(this.apiUrl + '/' + id);
  }
  addServiceVehicle({
    id,
    ...serviceVehicle
  }: ServiceVehicle): Observable<void> {
    const newServiceVehicle = { ...serviceVehicle };
    return this.http.post<void>(this.apiUrl, newServiceVehicle);
  }
}
