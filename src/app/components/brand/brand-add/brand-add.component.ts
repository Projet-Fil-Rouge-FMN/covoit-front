import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrandFormComponent } from '../brand-form/brand-form.component';
import { Subscription } from 'rxjs';
import { BrandService } from '../../../services/brand.service';
import { Router } from '@angular/router';
import { Brand } from '../../../models/brand.model';

@Component({
  selector: 'app-brand-add',
  standalone: true,
  imports: [ReactiveFormsModule, BrandFormComponent],
  templateUrl: './brand-add.component.html',
  styleUrl: './brand-add.component.css',
})
export class BrandAddComponent {
  private sub: Subscription[] = [];
  constructor(private brandService: BrandService, private router: Router) {}

  ngOnDestroy() {
    this.sub.forEach((subscription) => subscription.unsubscribe);
  }

  addBrand(newBrand: Brand) {
    if (newBrand) {
      this.sub.push(
        this.brandService
          .addBrand(newBrand)
          .subscribe(() => this.router.navigate(['brands']))
      );
    }
  }
}
