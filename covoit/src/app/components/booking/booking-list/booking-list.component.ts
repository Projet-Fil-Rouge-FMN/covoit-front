import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { BookingItemComponent } from '../booking-item/booking-item.component';
import { Observable } from 'rxjs';
import { Booking } from '../../../models/booking.model';
import { BookingService } from '../../../services/booking.service';

@Component({
  selector: 'app-booking-list',
  standalone: true,
  imports: [AsyncPipe, BookingItemComponent],
  templateUrl: './booking-list.component.html',
  styleUrl: './booking-list.component.css',
})
export class BookingListComponent {
  bookings$: Observable<Booking[]>;
  constructor(private bookingService: BookingService) {
    this.bookings$ = this.bookingService.getBookings();
  }
}
