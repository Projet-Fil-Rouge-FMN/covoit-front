import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8081/user/';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // Ajoutez d'autres en-têtes si nécessaire
      })
    };
    return this.http.get<User[]>(this.apiUrl, options).pipe(
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

  deleteUser(id: number): Observable<any> {
    const url = `${this.apiUrl}delete/${id}`;
    console.log('Deleting user at URL:', url);

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // Ajoutez d'autres en-têtes si nécessaire
      })
    };

    return this.http.delete(url, options);
  }
}
