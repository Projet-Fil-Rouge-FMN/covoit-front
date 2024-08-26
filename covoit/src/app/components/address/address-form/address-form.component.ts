import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Validators, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Address } from '../../../models/address.model';

@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.css',
})
export class AddressFormComponent {
  @Input() defaultAddress?: Address;
  @Output() onSubmit = new EventEmitter<Address>();
  addressForm = this.formBuilder.group({
    detail: ['', Validators.required],
    city: ['', Validators.required],
    country: ['', Validators.required],
  });

  constructor(private formBuilder: NonNullableFormBuilder) {}

  ngOnInit() {
    if (this.defaultAddress) {
      const { id, ...Address } = this.defaultAddress;
      this.addressForm.setValue(Address);
    }
  }

  submit() {
    const address: Address = {
      id: this.defaultAddress?.id || 0,
      detail: this.addressForm.value.detail || '',
      city: this.addressForm.value.city || '',
      country: this.addressForm.value.country || '',
    };
    this.onSubmit.emit(address);
  }
}
