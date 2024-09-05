import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
<<<<<<< HEAD
  private apiUrl = 'http://localhost:8081/user';
=======
  private apiUrl = 'http://localhost:8081/user/';

>>>>>>> 8f13325e2d5ece4192ce92bf852867da83a3c68f
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Erreur lors de la récupération des utilisateurs', error);
        return of([]); // Retourner un tableau vide en cas d'erreur
      })
    );
  }

  getUserById(id: number): Observable<User | null> {
    return this.http.get<User>(`${this.apiUrl}${id}`).pipe(
      catchError(error => {
        console.error(`Erreur lors de la récupération de l'utilisateur avec ID ${id}`, error);
        return of(null); // Retourner null en cas d'erreur
      })
    );
  }

  register(user: User): Observable<User | null> {
    return this.http.post<User>(`${this.apiUrl}register`, user).pipe(
      catchError(error => {
        console.error('Erreur lors de l\'inscription de l\'utilisateur', error);
        return of(null); // Retourner null en cas d'erreur
      })
    );
  }
}
