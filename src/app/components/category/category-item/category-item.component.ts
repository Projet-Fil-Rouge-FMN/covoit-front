import { Component, Input } from '@angular/core';
import { Category } from '../../../models/category.model';

@Component({
  selector: 'app-category-item',
  standalone: true,
  imports: [],
  templateUrl: './category-item.component.html',
  styleUrl: './category-item.component.css',
})
export class CategoryItemComponent {
  @Input() category!: Category;
  constructor() {}
}
