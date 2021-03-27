import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../sevices/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authenticationService:AuthentificationService,private router:Router) { }

  ngOnInit() {
  }
  onLogin(user:any)
  {
    //console.log(user);
    let res= this.authenticationService.login(user.username,user.password);
    if(res)
    {
        this.router.navigateByUrl("/menu/home");
    }
    else
    {
        this.router.navigateByUrl("/login");
    }
  }

}
