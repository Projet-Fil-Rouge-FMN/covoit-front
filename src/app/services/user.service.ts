import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = environment.apiURL+"/user";

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      
      })
    };
    return this.http.get<User[]>(this.apiUrl+"/", options).pipe(
      catchError(error => {
        console.error('Erreur lors de la récupération des utilisateurs', error);
        return of([]);
      })
    );
  }

  getUserById(id: number): Observable<User | null> {
    return this.http.get<User>(`${this.apiUrl}${id}`).pipe(
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

  deleteUser(Id: number): Observable<void> {
    const url = `${this.apiUrl}/${Id}`;
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.delete<void>(url, options).pipe(
      catchError(error => {
        console.error('Error deleting user', error);
        return throwError(() => new Error('Failed to delete user.'));
      })
    );
  }
}
