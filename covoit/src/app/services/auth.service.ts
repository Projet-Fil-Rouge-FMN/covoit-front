
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:8081/auth/login'; // URL de connexion

  private httpClient = inject(HttpClient);
  private router = inject(Router);

  login(data: { username: string, password: string }) {
    return this.httpClient.post(`${this.loginUrl}`, data)
      .pipe(tap((result) => {
        localStorage.setItem('authUser', JSON.stringify(result));
      }));
}



  // Méthode pour vérifier si l'utilisateur est authentifié
  isAuthenticated() {
    return localStorage.getItem('authUser') !== null;
  }

  logout() {
    localStorage.removeItem('authUser');
    this.router.navigate(['/']); // Rediriger vers la page d'accueil après la déconnexion
  }
}
