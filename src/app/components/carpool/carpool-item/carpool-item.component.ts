import { Component, Input } from '@angular/core';
import { Carpool } from '../../../models/carpool.model';

@Component({
  selector: 'app-carpool-item',
  standalone: true,
  imports: [],
  templateUrl: './carpool-item.component.html',
  styleUrl: './carpool-item.component.css'
})
export class CarpoolItemComponent {
	@Input() carpool!: Carpool;
	constructor() {}
}
