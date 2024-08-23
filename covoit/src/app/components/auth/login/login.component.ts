
import { inject, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,

  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  private authService = inject(AuthService);
  private router = inject(Router);

  protected loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  onSubmit(){
    if(this.loginForm.valid){
      const loginData = {
        username: this.loginForm.get('username')?.value ?? '',
        password: this.loginForm.get('password')?.value ?? ''
      };

      console.log(loginData);
      this.authService.login(loginData)
        .subscribe((data: any) => {
          if(this.authService.isAuthenticated()){
            this.router.navigate(['/user']);
          }
          console.log(data);
        });
    }
  }
}
