import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

   public contact={
     name:"UCAD",
     email:"ndiamamadou@gmail.com",
     tel:"774016666",
     logo:"assets/images/logoUcad2.jpg",
     location:"assets/images/logoPTR .jpg"
   }
  constructor() {}

}
