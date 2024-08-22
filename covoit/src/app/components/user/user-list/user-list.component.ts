import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../models/user.model';
import { UserService } from '../../../services/user.service';
import { AsyncPipe } from '@angular/common';
import { UserItemComponent } from '../user-item/user-item.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [AsyncPipe, UserItemComponent, RouterLink],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users$: Observable<User[]>;

  constructor(private userService: UserService){
    this.users$ = this.userService.getUsers();
  }

}
