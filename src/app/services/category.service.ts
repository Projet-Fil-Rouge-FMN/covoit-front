import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl = environment.apiURL + '/category';
  constructor(private http: HttpClient) {}
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }

  getCategoryById(id: Number): Observable<Category> {
    return this.http.get<Category>(this.apiUrl + '/' + id);
  }

  addCategory({ id, ...category }: Category): Observable<void> {
    const newCategory = { ...category };
    return this.http.post<void>(this.apiUrl, newCategory);
  }
}
