import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brand } from '../models/brand.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  private apiUrl = environment.apiURL + '/brands';

  constructor(private http: HttpClient) {}

  getBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(this.apiUrl);
  }

  getBrandById(id: Number): Observable<Brand> {
    return this.http.get<Brand>(this.apiUrl + '/' + id);
  }

  addBrand({ id, ...brand }: Brand): Observable<void> {
    const newBrand = {
      ...brand,
    };
    console.log(newBrand);
    return this.http.post<void>(this.apiUrl, newBrand);
  }
}
