import { Component, Input } from '@angular/core';
import { Booking } from '../../../models/booking.model';

@Component({
  selector: 'app-booking-item',
  standalone: true,
  imports: [],
  templateUrl: './booking-item.component.html',
  styleUrl: './booking-item.component.css',
})
export class BookingItemComponent {
  @Input() booking!: Booking;
  constructor() {}
}
