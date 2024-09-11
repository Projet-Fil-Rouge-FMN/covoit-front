
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login(data: { username: string; password: string }): Observable<any> {
    return this.http.post<any>('http://localhost:8081/auth/login', data)
      .pipe(
        tap(response => {
          if (response.token) {
            // Stocker le token dans le localStorage
            localStorage.setItem('token', response.token);
          }
        }),
        catchError(error => {
          console.error('Login error', error);
          // Optionnel: Afficher un message d'erreur ou faire quelque chose d'autre
          return of(null);
        }),
        tap(response => {
          if (response) {
            // Rediriger l'utilisateur après une connexion réussie
            this.router.navigate(['/user/']);
          }
        })
      );
  }



  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/']); // Rediriger vers la page de connexion
  }

  isAuthenticated(): boolean {
    // Vérifier la présence du token pour déterminer si l'utilisateur est authentifié
    return !!localStorage.getItem('token');
  }
}
