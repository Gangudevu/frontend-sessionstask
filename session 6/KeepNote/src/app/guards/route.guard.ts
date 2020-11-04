import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { RouterService } from '../services/router.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate 
{
  constructor(private authservice:AuthService,private routerservice:RouterService)
  {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
    {

      const bearerToken = this.authservice.getToken();

      if(bearerToken != null)
      {
        const authStatus = this.authservice.isAuthenticated(bearerToken)
        .then((data)=>{return data},err=>{console.log(err)});

        authStatus.then(result => {console.log(result)});

        if(authStatus)
        {
          return true;
        }
      }
      else
      {
        this.routerservice.routeToLogin();
        return false
      }
    }
}
