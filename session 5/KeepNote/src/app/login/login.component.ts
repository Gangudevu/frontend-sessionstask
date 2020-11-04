import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { RouterService } from '../services/router.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userobj: User;

  constructor(private routerservice: RouterService, private authservice: AuthService) 
  {
    this.userobj = new User();
  }

  ngOnInit(): void {
  }

  login() 
  {
    console.log(this.userobj.username);
    console.log(this.userobj.password);
    this.authservice.authUser(this.userobj).subscribe((result)=>{
      console.log(result['token']);

      this.authservice.setToken(result['token']);
      this.routerservice.routeToNote();
    },
    (err)=>{
      console.log(err);
    })
    }
}
