import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AppGuardService implements CanActivate {
  
  constructor(private svc:AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
    if(this.svc.isAuthenticate()){
      return true
    }
    else {
      this.router.navigate(['home']); 
      alert('you are not authorized')
      return false
    }
  }
 

}
