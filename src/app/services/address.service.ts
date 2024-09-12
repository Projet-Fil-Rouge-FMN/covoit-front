import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../models/address.model';
import { log } from 'node:console';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  private apiUrl = environment.apiURL+'/address';

  constructor(private http: HttpClient) {}

  getAddresses(): Observable<Address[]> {
    return this.http.get<Address[]>(this.apiUrl);
  }
  addAddress({ id, ...address }: Address): Observable<void> {
    const newAddress = {
      ...address,
    };
    console.log("try to add address");
    console.log(newAddress)
    return this.http.post<void>(this.apiUrl, newAddress);
  }
}
