import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from '../login/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService 
{

  authUrl:string;

  constructor(private httpclient:HttpClient) 
  { 
    this.authUrl='http://localhost:3000/auth/v1';
  }

  authUser(userDetails:User)
  {
    return this.httpclient.post(this.authUrl,userDetails);
  }

  getToken()
  {
    return localStorage.getItem('bearertoken')
  }
  setToken(token)
  {
    localStorage.setItem('bearertoken',token);
  }

  isAuthenticated(token):Promise<boolean>
  {
    return this.httpclient.post(`${this.authUrl}/isAuthenticated`,{},{
    headers:new HttpHeaders().set('Authorization',`Bearer ${token}`)
    }).pipe(map((res)=>res['isAuthenticated'])).toPromise();
  }

}
