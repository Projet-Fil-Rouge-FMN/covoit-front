import { Component } from '@angular/core';
import { AddressFormComponent } from '../address-form/address-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AddressService } from '../../../services/address.service';

import { Address } from '../../../models/address.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-add',
  standalone: true,
  imports: [ReactiveFormsModule, AddressFormComponent],
  templateUrl: './address-add.component.html',
  styleUrl: './address-add.component.css'
})
export class AddressAddComponent {
  private sub: Subscription[] = [];
  constructor(private addressService: AddressService, private router: Router) {}

  ngOnDestroy() {
    this.sub.forEach((subscription) => subscription.unsubscribe);
  }

  addAddress(newAddress: Address) {
    if (newAddress) {
      this.sub.push(
        this.addressService
          .addAddress(newAddress)
          .subscribe(() => this.router.navigate(['address']))
      );
    }
  }
}
