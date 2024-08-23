import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Booking } from '../../../models/booking.model';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.css',
})
export class BookingFormComponent {
  @Input() defautBooking?: Booking;
  @Output() onSubmit = new EventEmitter<Booking>();
  defaultUser!: User;
  BookingForm = this.formBuilder.group({
    startTime: ['', Validators.required],
    endTime: ['', Validators.required],
    driver: [this.defaultUser, Validators.required as unknown as User],
    //driver devra être modifié quand on aura implémenté le getUserById
  });
  constructor(private formBuilder: NonNullableFormBuilder) {}

  ngOnInit() {
    if (this.defautBooking) {
      const { id, ...booking } = this.defautBooking;
      this.BookingForm.setValue(booking);
    }
  }

  submit() {
    const driverValue = this.BookingForm.value.driver;
    const driver: User =
      typeof driverValue === 'object' &&
      driverValue !== null &&
      'id' in driverValue
        ? (driverValue as User)
        : this.defaultUser;
    const booking: Booking = {
      id: this.defautBooking?.id || 0,
      startTime: this.BookingForm.value.startTime || '',
      endTime: this.BookingForm.value.endTime || '',
      driver: driver,
    };
    this.onSubmit.emit(booking);
  }
}
