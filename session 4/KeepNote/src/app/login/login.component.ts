import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterService } from '../services/router.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userobj:User;
  constructor(private routerservice:RouterService) 
  {
    this.userobj = new User();
  }

  ngOnInit(): void {
  }


  login(loginform:NgForm)
  {
    if(loginform.valid)
    {
      this.userobj = loginform.value;
     
      if((this.userobj.username=='admin')&&(this.userobj.userpass=='pass'))
      {
        console.log(this.userobj.username);
        console.log(this.userobj.userpass);
        this.routerservice.routeToNote();
      }
    }
  }


}
