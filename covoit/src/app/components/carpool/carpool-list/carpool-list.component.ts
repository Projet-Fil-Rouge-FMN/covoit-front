import { Component} from '@angular/core';
import  { CarpoolItemComponent } from '../carpool-item/carpool-item.component';
import { Carpool } from '../../models/carpool.model';
import { CarpoolService } from '../../../services/carpool.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carpool-list',
  standalone: true,
  imports: [AsyncPipe, CarpoolItemComponent],
  templateUrl: './carpool-list.component.html',
  styleUrl: './carpool-list.component.css'
})
export class CarpoolListComponent {
	carpools$: Observable<Carpool[]>;
	
	constructor(private carpoolService: CarpoolService) {
		this.carpools$ = this.carpoolService.getCarpools();
	}

}
