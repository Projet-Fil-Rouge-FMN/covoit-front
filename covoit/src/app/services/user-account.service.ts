// src/app/services/user-account.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAccount } from '../models/user-account.model';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {
  private apiUrl = 'http://localhost:8081/user';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<UserAccount[]> {
    return this.http.get<UserAccount[]>(`${this.apiUrl}/`);
  }
  constructor(private http: HttpClient) { }


  getUserById(id: number): Observable<UserAccount> {
    return this.http.get<UserAccount>(`${this.apiUrl}/${id}`);
  }

  createUser(user: UserAccount): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  updateUser(id: number, user: UserAccount): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
