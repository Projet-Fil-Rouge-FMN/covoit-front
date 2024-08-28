
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:8081/auth/login'; // URL de connexion

  private httpClient = inject(HttpClient);
  private router = inject(Router);

  login(data: { username: string, password: string }) {
    return this.httpClient.post(`${this.loginUrl}`, data)
      .pipe(
        tap((result) => {
          localStorage.setItem('authUser', JSON.stringify(result));
          this.router.navigate(['/dashboard']); // Redirige vers la page d'accueil ou le tableau de bord
        }),
        catchError((error) => {
          console.error('Login failed', error);
          return of(null);
        })
      );
  }




  // Méthode pour vérifier si l'utilisateur est authentifié
  isAuthenticated() {
    const authUser = localStorage.getItem('authUser');
    if (authUser) {
      const user = JSON.parse(authUser);
      // Vérifier si l'utilisateur a un jeton d'accès
      return true;
    }
    // Rediriger vers la page de connexion si l'utilisateur n'est pas authentifié
    return  this.router.navigate(['/login']);
  }

  logout() {
    localStorage.removeItem('authUser');
    this.router.navigate(['/']); // Rediriger vers la page d'accueil après la déconnexion
  }
}
