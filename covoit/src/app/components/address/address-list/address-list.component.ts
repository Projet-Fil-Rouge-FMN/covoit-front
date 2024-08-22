import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { AddressItemComponent } from '../address-item/address-item.component';
import { Observable } from 'rxjs';
import { Address } from '../../../models/address.model';
import { AddressService } from '../../../services/address.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-address-list',
  standalone: true,
  imports: [AsyncPipe, AddressItemComponent, RouterLink],
  templateUrl: './address-list.component.html',
  styleUrl: './address-list.component.css',
})
export class AddressListComponent {
  addresses$: Observable<Address[]>;

  constructor(private addressService: AddressService) {
    this.addresses$ = this.addressService.getAddresses();
  }
}
