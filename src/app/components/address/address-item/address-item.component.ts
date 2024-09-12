import { Component, Input } from '@angular/core';
import { Address } from '../../../models/address.model';

@Component({
  selector: 'app-address-item',
  standalone: true,
  imports: [],
  templateUrl: './address-item.component.html',
  styleUrl: './address-item.component.css',
})
export class AddressItemComponent {
  @Input() address!: Address;
  constructor() {}
}
