import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehicle } from '../models/vehicle.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private apiUrl = environment.apiURL + '/vehicles';

  constructor(private http: HttpClient) {}

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.apiUrl);
  }

  getVehicleById(id: Number): Observable<Vehicle> {
    return this.http.get<Vehicle>(this.apiUrl + '/' + id);
  }
  addVehicle({ id, ...vehicle }: Vehicle): Observable<void> {
    const newVehicle = { ...vehicle };
    return this.http.post<void>(this.apiUrl, newVehicle);
  }
}
