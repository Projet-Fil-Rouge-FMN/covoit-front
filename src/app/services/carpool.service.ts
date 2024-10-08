import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carpool } from '../models/carpool.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CarpoolService {
  private apiUrl = environment.apiURL + '/carpools';

  constructor(private http: HttpClient) {}

  getCarpools(): Observable<Carpool[]> {
    return this.http.get<Carpool[]>(this.apiUrl);
  }

  getCarpoolById(id: Number): Observable<Carpool> {
    return this.http.get<Carpool>(this.apiUrl + '/' + id);
  }

  addCarpool({ id, ...carpool }: Carpool): Observable<void> {
    const newCarpool = {
      ...carpool,
    };
    return this.http.post<void>(this.apiUrl, newCarpool);
  }
}
