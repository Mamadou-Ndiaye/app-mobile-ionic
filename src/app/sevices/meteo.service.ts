import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

     domaine:string ="http://api.openweathermap.org/data/2.5/weather?q=";
     key:string="&APPID=636d623eeaf00917090f09610a591bf1";
  constructor(private http:HttpClient) { }
  public getMeteoData(city:string)
  {
    return this.http.get(this.domaine+city+this.key);
  }
}
