import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Brand } from '../../../models/brand.model';

@Component({
  selector: 'app-brand-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './brand-form.component.html',
  styleUrl: './brand-form.component.css',
})
export class BrandFormComponent {
  @Input() defaultBrand?: Brand;
  @Output() onSubmit = new EventEmitter<Brand>();
  brandForm = this.formBuilder.group({
    name: ['', Validators.required],
  });

  constructor(private formBuilder: NonNullableFormBuilder) {}

  ngOnInit() {
    if (this.defaultBrand) {
      const { id, ...brand } = this.defaultBrand;
      this.brandForm.setValue(brand);
    }
  }

  submit() {
    const brand: Brand = {
      id: this.defaultBrand?.id || 0,
      name: this.brandForm.value.name || '',
    };
    this.onSubmit.emit(brand);
  }
}
