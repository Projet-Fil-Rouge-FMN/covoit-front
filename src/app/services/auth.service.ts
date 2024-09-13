
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiURL}/auth`;

  constructor(private http: HttpClient, private router: Router) {}

  login(data: { username: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, data)
      .pipe(
        tap(response => {
          console.log('Réponse de connexion:', response); // Ajouter ce log
          if (response.token) {
            localStorage.setItem('token', response.token);
          }
        }),
        catchError(error => {
          console.error('Erreur lors de la connexion', error);
          return of(null);
        }),
        tap(response => {
          if (response) {
            this.router.navigate(['/user/']);
          }
        })
      );
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  getUserData(): Observable<any> {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('Token non disponible');
      return of(null);
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    console.log('En-têtes de la requête:', headers); // Ajouter ce log

    return this.http.get(`${this.apiUrl}/user`, { headers }).pipe(
      tap(data => console.log('Données récupérées:', data)),
      catchError(error => {
        console.error('Erreur lors de la récupération des utilisateurs', error);
        return of(null);
      })
    );
  }
}
