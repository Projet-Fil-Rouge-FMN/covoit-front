import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { inject } from '@angular/core';

@Injectable()
export class CsrfInterceptor implements HttpInterceptor {
  // Inject the HttpClient to use for getting the CSRF token
  private readonly csrfToken: string | null = document.cookie
    .split('; ')
    .find(row => row.startsWith('XSRF-TOKEN='))
    ?.split('=')[1] || null;

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Clone the request and add the XSRF-TOKEN header if the CSRF token exists
    const headers = this.csrfToken
      ? req.headers.set('X-XSRF-TOKEN', this.csrfToken)
      : req.headers;

    const clonedReq = req.clone({ headers });
    return next.handle(clonedReq);
  }
}
