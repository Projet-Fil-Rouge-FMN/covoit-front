import { Component, Input } from '@angular/core';
import { Brand } from '../../../models/brand.model';

@Component({
  selector: 'app-brand-item',
  standalone: true,
  imports: [],
  templateUrl: './brand-item.component.html',
  styleUrl: './brand-item.component.css',
})
export class BrandItemComponent {
  @Input() brand!: Brand;
  constructor() {}
}
