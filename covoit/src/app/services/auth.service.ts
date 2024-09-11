
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}
  private router = inject(Router);
  login(data: {username: String,password: String}): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-XSRF-TOKEN': this.getCsrfToken() // Assure-toi d'ajouter le jeton CSRF ici
    });

    return this.http.post<any>('http://localhost:8081/auth/login', data, { headers });
  }

  private getCsrfToken(): string {
    // Lire le jeton CSRF depuis le cookie ou autre source
    return this.getCookie('XSRF-TOKEN') || '';
  }

  private getCookie(name: string): string | null {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() || '';
    return null;
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
