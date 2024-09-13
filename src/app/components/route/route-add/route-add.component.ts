import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Route } from '../../../models/route.model';
import { Address } from '../../../models/address.model';
import { AddressService } from '../../../services/address.service';

@Component({
  selector: 'app-route-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './route-form.component.html',
  styleUrl: './route-form.component.css',
})
export class RouteFormComponent {
  @Input() defaultRoute?: Route;
  @Output() onSubmit = new EventEmitter<Route>();

  RouteForm = this.formBuilder.group({
    duration: [0, Validators.required],
    kmTotal: [0, Validators.required],
    startAddress: [0, Validators.required],
    endAddress: [0, Validators.required],
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private addressService: AddressService
  ) {}

  ngOnInit() {
    if (this.defaultRoute) {
      const { id, startAddress, endAddress, ...route } = this.defaultRoute;

      // Convertir startAddress et endAddress en identifiants numériques
      const startAddressId =
        typeof startAddress === 'object' && startAddress !== null
          ? startAddress.id
          : startAddress;
      const endAddressId =
        typeof endAddress === 'object' && endAddress !== null
          ? endAddress.id
          : endAddress;

      this.RouteForm.setValue({
        duration: route.duration || 0,
        kmTotal: route.kmTotal || 0,
        startAddress: startAddressId || 0,
        endAddress: endAddressId || 0,
      });
    }
  }

  submit() {
    // Récupérer l'adresse de départ
    this.addressService
      .getAddressById(this.RouteForm.value.startAddress!)
      .subscribe((startAddress: Address | null) => {
        if (startAddress) {
          // Récupérer l'adresse de fin
          this.addressService
            .getAddressById(this.RouteForm.value.endAddress!)
            .subscribe((endAddress: Address | null) => {
              if (endAddress) {
                const route: Route = {
                  id: this.defaultRoute?.id || 0,
                  duration: this.RouteForm.value.duration || 0,
                  kmTotal: this.RouteForm.value.kmTotal || 0,
                  startAddress: startAddress, // On utilise l'adresse de départ récupérée
                  endAddress: endAddress, // On utilise l'adresse de fin récupérée
                };

                // Émission de l'événement onSubmit avec la route
                this.onSubmit.emit(route);
              } else {
                console.error('End address not found');
              }
            });
        } else {
          console.error('Start address not found');
        }
      });
  }
}
