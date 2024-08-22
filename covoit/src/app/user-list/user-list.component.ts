import { Component, OnInit } from '@angular/core';
import { UserAccountService } from '../services/user-account.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users$: Observable<any[]>; // Utilisez un Observable pour utiliser async dans le template
 
  constructor(private userService: UserAccountService) { }

  ngOnInit(): void {
    this.users$ = this.userService.getAllUsers(); // Assignez directement l'Observable
  }
}
