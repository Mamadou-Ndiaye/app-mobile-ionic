import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MeteoService } from '../sevices/meteo.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.page.html',
  styleUrls: ['./meteo.page.scss'],
})
export class MeteoPage implements OnInit {

   public city:string
  dataMeteo: Object;
  constructor(private meteoService:MeteoService) { }

  ngOnInit() {
  }
  onLoadMeteo(){
    console.log("requete envoye");
       this.meteoService.getMeteoData(this.city).subscribe(data=>{
           this.dataMeteo=data;
       }, err=>{
          console.log(err);
       });

      }
       

}
