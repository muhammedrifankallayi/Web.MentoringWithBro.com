import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
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

return next.handle(newReq)
}

return next.handle(request);



  }
}