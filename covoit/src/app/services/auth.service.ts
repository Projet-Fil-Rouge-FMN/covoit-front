import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8081/login'; // L'URL de votre backend

  constructor(private http: HttpClient) { }

  // Méthode pour authentifier l'utilisateur
  login(username: string, password: string): Observable<any> {
    const loginPayload = {
      username: username,
      password: password
    };
    return this.http.post(`${this.apiUrl}/auth/login`, loginPayload);
  }


}
