import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private apiUrl = environment.apiURL + '/bookings';

  constructor(private http: HttpClient) {}

  getBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.apiUrl);
  }

  getBookingById(id: number): Observable<Booking> {
    return this.http.get<Booking>(this.apiUrl + '/' + id);
  }

  addBooking({ id, ...booking }: Booking): Observable<void> {
    const newBooking = {
      ...booking,
    };
    return this.http.post<void>(this.apiUrl, newBooking);
  }
}
