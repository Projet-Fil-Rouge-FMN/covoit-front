import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../../../models/brand.model';
import { BrandService } from '../../../services/brand.service';
import { BrandItemComponent } from '../brand-item/brand-item.component';

@Component({
  selector: 'app-brand-list',
  standalone: true,
  imports: [AsyncPipe, BrandItemComponent],
  templateUrl: './brand-list.component.html',
  styleUrl: './brand-list.component.css',
})
export class BrandListComponent {
  brands$: Observable<Brand[]>;

  constructor(private brandService: BrandService) {
    this.brands$ = this.brandService.getBrands();
  }
}
