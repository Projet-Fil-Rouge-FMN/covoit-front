import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carpool } from '../models/carpool.model';

@Injectable({
	providedIn: 'root',
})

export class CarpoolService {
	private apiUrl = 'http://localhost:8081/carpool/';
	
	constructor(private http: HttpClient) {}
	
	getCarpools(): Observable<Carpool[]> {
		return this.http.get<Carpool[]>(this.apiUrl);
	}
}