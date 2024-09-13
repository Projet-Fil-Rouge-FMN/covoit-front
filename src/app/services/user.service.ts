import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = environment.apiURL+'/user';

  constructor(private http: HttpClient) {}



 // Méthode pour récupérer les utilisateurs
 getUsers(): Observable<User[]> {
  return this.http.get<User[]>(this.apiUrl).pipe(
    catchError(error => {
      console.error('Erreur lors de la récupération des utilisateurs', error);
      return of([]); // Retourne un tableau vide en cas d'erreur
    })
  );
}


  getUserById(id: number): Observable<User | null> {
    return this.http.get<User>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => {
        console.error(`Erreur lors de la récupération de l'utilisateur avec ID ${id}`, error);
        return of(null);
      })
    );
  }

  register(user: User): Observable<User | null> {
    return this.http.post<User>(`${this.apiUrl}/register`, user).pipe(
      catchError(error => {
        console.error('Erreur lors de l\'inscription de l\'utilisateur', error);
        return of(null);
      })
    );
  }

  deleteUser(id: number, options?: { headers?: HttpHeaders }): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url, options).pipe(
      catchError(this.handleError<void>('deleteUser'))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return throwError(() => new Error(`${operation} failed: ${error.message}`));
    };
  }
}
