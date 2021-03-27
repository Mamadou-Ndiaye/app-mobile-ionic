import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../sevices/authentification.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

   menus=[
     {title:"Home",url:"/menu/home" ,icon:"share"},
     {title:"Meteo",url:"/menu/meteo" ,icon:"snow"},
     {title:"Gallery",url:"/menu/gallery" ,icon:"school"},
     {title:"Locations",url:"/menu/locations" ,icon:"sync"},
     {title:"Logout",url:"logout" ,icon:"log-out"}
  ];

  constructor(private router:Router,private authentificationService:AuthentificationService) { }

  ngOnInit() {
  
  }
  onMenuItem(menu)
  {
    if(menu.url == "logout")
    {
          this.authentificationService.logout();
          this.router.navigateByUrl("/login");
    }
    else{
      this.router.navigateByUrl(menu.url);
    }   
  }

}
