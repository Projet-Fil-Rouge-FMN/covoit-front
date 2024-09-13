import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Booking } from '../../../models/booking.model';
import { User } from '../../../models/user.model';
import { ServiceVehicle } from '../../../models/serviceVehicle.model';
import { UserService } from '../../../services/user.service';
import { ServiceVehicleService } from '../../../services/service-vehicle.service';

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
  BookingForm = this.formBuilder.group({
    startTime: ['', Validators.required],
    endTime: ['', Validators.required],
    driver: [0, Validators.required],
    serviceVehicle: [0, Validators.required],
  });
  constructor(
    private formBuilder: NonNullableFormBuilder,
    private userService: UserService,
    private serviceVehicleService: ServiceVehicleService
  ) {}

  ngOnInit() {
    if (this.defautBooking) {
      const { id, driver, serviceVehicle, ...booking } = this.defautBooking;

      // Convertir driver et serviceVehicle en identifiants numériques
      const driverId =
        typeof driver === 'object' && driver !== null ? driver.id : driver;
      const serviceVehicleId =
        typeof serviceVehicle === 'object' && serviceVehicle !== null
          ? serviceVehicle.id
          : serviceVehicle;

      this.BookingForm.setValue({
        startTime: booking.startTime || '',
        endTime: booking.endTime || '',
        driver: driverId || 0,
        serviceVehicle: serviceVehicleId || 0,
      });
    }
  }

  submit() {
    // Abonnement pour récupérer le driver
    this.userService
      .getUserById(this.BookingForm.value.driver!)
      .subscribe((driver: User | null) => {
<<<<<<< HEAD
        if (driver === null) {
          // Gérer le cas où driver est null
          driver = {
            id: 0,
            userName: 'Default Name',
            lastName: 'string',
            password: 'string',
            email: 'string',
            driverLicence: false,
            authorities: [''],
          }; // Utiliser un objet User par défaut
        }

        // Abonnement pour récupérer le serviceVehicle
        this.serviceVehicleService
          .getServiceVehicleById(this.BookingForm.value.serviceVehicle!)
          .subscribe((serviceVehicle: ServiceVehicle | null) => {
            if (serviceVehicle === null) {
              // Gérer le cas où serviceVehicle est null
              serviceVehicle = {
                id: 0,
                registration: '',
                nbSeat: 0,
                brand: { id: 0, name: '' },
                model: { id: 0, name: '' },
                category: { id: 0, name: '' },
                state: '',
                picture: '',
                motorization: '',
                co2Km: 0,
              }; // Utiliser un objet ServiceVehicle par défaut
            }

            // Création de l'objet booking après avoir obtenu les données
            const booking: Booking = {
              id: this.defautBooking?.id || 0,
              startTime: this.BookingForm.value.startTime || '',
              endTime: this.BookingForm.value.endTime || '',
              driver: driver, // Utiliser le driver trouvé ou par défaut
              serviceVehicle: serviceVehicle, // Utiliser le serviceVehicle trouvé ou par défaut
            };
=======
        if (driver) {
          // Le driver est bien un utilisateur valide
          this.serviceVehicleService
            .getServiceVehicleById(this.BookingForm.value.serviceVehicle!)
            .subscribe((serviceVehicle: ServiceVehicle | null) => {
              if (serviceVehicle) {
                // Si le serviceVehicle est valide
                const booking: Booking = {
                  id: this.defautBooking?.id || 0,
                  startTime: this.BookingForm.value.startTime || '',
                  endTime: this.BookingForm.value.endTime || '',
                  driver: driver, // On utilise le driver récupéré
                  serviceVehicle: serviceVehicle, // On utilise le serviceVehicle récupéré
                };
>>>>>>> 98b2490b01b321c1b1ee977cefe207c0728e7ee0

                // Émission de l'événement onSubmit avec le booking
                this.onSubmit.emit(booking);
              } else {
                console.error('Service vehicle not found');
              }
            });
        } else {
          console.error('User not found');
        }
      });
  }
}
