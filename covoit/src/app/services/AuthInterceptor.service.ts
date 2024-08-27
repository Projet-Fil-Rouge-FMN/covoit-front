import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authUser = localStorage.getItem('authUser');
    if (authUser) {
      const user = JSON.parse(authUser);
      // Assurez-vous que vous avez un token ou une autre information d'authentification
      const authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${user.token}`)
      });
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}
