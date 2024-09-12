import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VehicleModel } from '../models/vehicleModel.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VehicleModelService {
  private apiUrl = environment.apiURL+"/models";

  constructor(private http: HttpClient) {}

  getModels(): Observable<VehicleModel[]> {
    return this.http.get<VehicleModel[]>(this.apiUrl);
  }

  addVehicleModel({id, ...vehicleModel}:VehicleModel):Observable<void> {
    const newVehicleModel = {
      ...vehicleModel
    };
    return this.http.post<void>(this.apiUrl, newVehicleModel);
  }
}
