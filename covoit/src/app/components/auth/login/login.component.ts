import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterModule,

  ],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(): void {
    if (this.form.valid) {
      const { username, password } = this.form.value;
      this.authService.login(username, password).subscribe({
        next: (response) => {
          // Stocker les informations utilisateur dans le localStorage 
          localStorage.setItem('user', JSON.stringify(response));
          // Redirection vers la page d'accueil après une connexion réussie
          this.router.navigate(['/']);
        },
        error: (error) => {
          // Gestion des erreurs de connexion
          console.error('Erreur de connexion', error);
        }
      });
    }
  }
}
