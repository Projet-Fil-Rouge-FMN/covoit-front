import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../models/user.model';
import { UserService } from '../../../services/user.service';
import { AsyncPipe } from '@angular/common';
import { UserItemComponent } from '../user-item/user-item.component';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [AsyncPipe, UserItemComponent, RouterLink],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users$: Observable<User[]>;
  @Input() user!: User;

  constructor(private userService: UserService, private router: Router){
    this.users$ = this.userService.getUsers();
  }
  goToDeletePage(id: number): void {
    this.router.navigate(['/user/delete', id]);
  }
}
