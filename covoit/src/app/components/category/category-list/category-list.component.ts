import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { CategoryItemComponent } from '../category-item/category-item.component';
import { Category } from '../../../models/category.model';
import { Observable } from 'rxjs';
import { CategoryService } from '../../../services/category.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [AsyncPipe, CategoryItemComponent, RouterLink],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css',
})
export class CategoryListComponent {
  categories$: Observable<Category[]>;

  constructor(private categoryService: CategoryService) {
    this.categories$ = this.categoryService.getCategories();
  }
}
