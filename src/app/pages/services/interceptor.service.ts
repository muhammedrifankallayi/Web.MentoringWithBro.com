import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, finalize, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { DbService } from 'src/app/db.service';


@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(private route:Router , public service:DbService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

const token = localStorage.getItem("adminToken");

 if (token) {
const newReq = request.clone({
  headers:request.headers.set('Authorization','Bearer '+token )
})

return next.handle(newReq).
pipe(
  catchError((error: HttpErrorResponse) => {
    if (error.status === 401 || error.status === 403) { 
      this.route.navigate(['/login']);
    }
    return throwError(error); 
  })
);
}

return next.handle(request).pipe(
  catchError((error: HttpErrorResponse) => {
    if (error.status === 401 || error.status === 403) { 
      this.route.navigate(['/login']);
    }
    return throwError(error); 
  })
);


  }
}