import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brand } from '../models/brand.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  private apiUrl = 'http://localhost:8081/brands';

  constructor(private http: HttpClient) {}

  getBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(this.apiUrl);
  }

  addBrand({ id, ...brand }: Brand): Observable<void> {
    const newBrand = {
      ...brand,
    };
    console.log(newBrand)
    return this.http.post<void>(this.apiUrl, newBrand);
  }
}
