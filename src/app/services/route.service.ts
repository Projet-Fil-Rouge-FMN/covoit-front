import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Route } from '../models/route.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  private apiUrl = environment.apiURL+'/routes';

  constructor(private http: HttpClient) {}

  getRoutes(): Observable<Route[]> {
    return this.http.get<Route[]>(this.apiUrl);
  }
}
