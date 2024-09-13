import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingFormComponent } from '../booking-form/booking-form.component';
import { Subscription } from 'rxjs';
import { BookingService } from '../../../services/booking.service';
import { Router } from '@angular/router';
import { Booking } from '../../../models/booking.model';

@Component({
  selector: 'app-booking-add',
  standalone: true,
  imports: [ReactiveFormsModule, BookingFormComponent],
  templateUrl: './booking-add.component.html',
  styleUrl: './booking-add.component.css',
})
export class BookingAddComponent {
  private sub: Subscription[] = [];
  constructor(private bookingService: BookingService, private router: Router) {}

  ngOnDestroy() {
    this.sub.forEach((subscription) => subscription.unsubscribe());
  }

  addBooking(newBooking: Booking) {
    if (newBooking) {
      this.sub.push(
        this.bookingService
          .addBooking(newBooking)
          .subscribe(() => this.router.navigate(['./bookings']))
      );
    }
  }
}
