import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from './sevices/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router:Router,private authentificationService:AuthentificationService) {
    this.initializeApp();
  }
  initializeApp() {
    this.login();
  }
  login() {
    let authenticated= this.authentificationService.loadToken();
    if(authenticated) // si le le local Storage est charge on passe directement dans le menu sanspasser dan sle mode authentification
    {
      this.router.navigateByUrl("/menu/home");
    }
    else
    {
      this.router.navigateByUrl("/login");
    }
    
  }
}
