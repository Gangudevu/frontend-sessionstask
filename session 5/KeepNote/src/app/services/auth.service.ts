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

  constructor(private httpClient:HttpClient) 
  { 
    this.authUrl = "http://localhost:3000/auth/v1";
  }

  authUser(userDetails:User)
  {
    return this.httpClient.post(this.authUrl,userDetails);
  }

  getToken()
  {
    return localStorage.getItem('bearerToken');
  }

  setToken(token)
  {
    localStorage.setItem('bearerToken',token);
  }


  isAuthenticated(token):Promise<boolean>
  {
    return this.httpClient.post(`${this.authUrl}/isAuthenticated`,{},{
    headers:new HttpHeaders().set('Authorization',`Bearer ${token}`)
    }).pipe(map((res)=>res['isAuthenticated'])).toPromise();
  }
}
