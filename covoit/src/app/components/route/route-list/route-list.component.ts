import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Route } from '../../../models/route.model';
import { RouteService } from '../../../services/route.service';
import { RouteItemComponent } from '../route-item/route-item.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-route-list',
  standalone: true,
  imports: [AsyncPipe, RouteItemComponent, RouterLink],
  templateUrl: './route-list.component.html',
  styleUrl: './route-list.component.css',
})
export class RouteListComponent {
  routes$: Observable<Route[]>;

  constructor(private routeService: RouteService) {
    this.routes$ = this.routeService.getRoutes();
  }
}
