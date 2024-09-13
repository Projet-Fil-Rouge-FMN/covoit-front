import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {  HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Component({
  selector: 'app-user-delete-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-delete-component.component.html',
  styleUrls: ['./user-delete-component.component.css']
})
export class UserDeleteComponent implements OnInit {
  private static readonly ERROR_ID_MISSING = 'ID parameter is missing';
  private static readonly ERROR_CANNOT_DELETE_USER = 'Cannot delete user: ID is null or visibility is toggled off';

  userId: number | null = null;


  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.pipe(
      tap(params => {
        const idParam = params.get('id');
        if (!idParam || isNaN(Number(idParam))) {
          console.error(UserDeleteComponent.ERROR_ID_MISSING);
          this.router.navigate(['/users']);
          return;
      }
        this.userId = Number(idParam);
      })
    ).subscribe();
  }


  deleteUser(): void {
    if (!this.userId) {
      console.error(UserDeleteComponent.ERROR_CANNOT_DELETE_USER);
      return;
    }

    const confirmation = confirm(`Are you sure you want to delete user ${this.userId}?`);

    if (confirmation) {
      const options = new HttpHeaders({
        'Content-Type': 'application/json'
      });

      this.userService.deleteUser(this.userId).pipe(
        tap(response => {
          console.log('Deletion successful:', response);
          this.router.navigate(['/user']);
        }),
        catchError(error => {
          console.error('Error deleting user:', error);
          console.error('Status:', error.status);
          console.error('Message:', error.message);
          console.error('Full error object:', JSON.stringify(error));

          let errorMessage = 'Failed to delete user';
          if (error.status === 404) {
            errorMessage += '. User not found.';
          } else if (error.status >= 400 && error.status < 500) {
            errorMessage += '. Please check your input and try again.';
          } else {
            errorMessage += '. An unexpected error occurred.';
          }

          alert(errorMessage);
          return throwError(() => new Error(errorMessage));
        })
      ).subscribe();
    }
  }
}
