// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      user => {
        // Authentification réussie, rediriger vers une autre page
        this.router.navigate(['/users']); // Ou la page souhaitée après la connexion
      },
      error => {
        // Gérer les erreurs de connexion
        this.errorMessage = error.error; // Le message d'erreur est retourné par le backend
      }
    );
  }
}
