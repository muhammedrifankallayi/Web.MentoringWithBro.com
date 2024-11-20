import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const jwtToken = localStorage.getItem('adminToken');
    const loginRoute = '';

    if (state.url !== loginRoute && jwtToken === null) {
      this.router.navigate(['']);
      return false; // Prevent access to the route
    } else if (state.url === loginRoute && jwtToken !== null) {
      this.router.navigate(['/dashboard']);
      return false; // Prevent access to the route
    }

    return true; // Allow access to the route
  }
  
}
