import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

   public authenticated:boolean;
    public token:string;

    admins:any[]=
    [
      {nom:"sow", prenom:"maodo",adress:"77500 Chelles",username:"maodo@gmail.com",pass:"passer1234"},
      {nom:"ndiaye",prenom:"mouhamed",adress:"Guediawaye",  username:"modoumouhamedndiaye@gmail.com", pass:"passer1234"},
      {nom:"ndiaye",prenom:"mamadou",adress:"Dakar",  username:"admin", pass:"1234"}
   ];

  constructor() { }
   
  login(username:string,password:string)
  {
    this.admins.forEach(admin => {
        if(username===admin.username && password===admin.pass)
        { 
            this.authenticated=true;
            this.saveToken();
            alert("authentification reussie");
        }
        else{
          this.authenticated=false;
          console.log("erreur authentification");
          alert("erreur d'authentification");
        }
    });
   
    return this.authenticated;
  }

  // sauvegarder le Token 
  saveToken() {
   this.token="azerty";
   localStorage.setItem("myToken",this.token);
  }
  // charhger le token 
  loadToken()
  {
      this.token=localStorage.getItem("myToken");
      if(this.token=="azerty")
      {
        console.log("token loaded");
        this.authenticated=true;
      }

      else{
         this.authenticated=false;
      }
      return this.authenticated;
  }
  
  logout()
  {
    localStorage.removeItem("my Token");
  }


}
