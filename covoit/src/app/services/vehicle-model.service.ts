import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VehicleModel } from '../models/vehicleModel.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VehicleModelService {
  private apiUrl = 'http://localhost:8081/model/';

  constructor(private http: HttpClient) {}

  getModels(): Observable<VehicleModel[]> {
    return this.http.get<VehicleModel[]>(this.apiUrl);
  }
}
