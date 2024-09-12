import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../auth.interceptor';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, RouterLink],
    providers: [
      { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true } // Configuration de l'interceptor
    ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'covoit';
}
