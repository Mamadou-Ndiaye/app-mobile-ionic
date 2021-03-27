import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {


  //key:string="20889922-6948db0e6ae54bcda0a02da77";
  url:string="https://pixabay.com/api/?key=20889922-6948db0e6ae54bcda0a02da77&q=";
  
  size: number=10;
  currentPage: number=1;

  constructor(private http:HttpClient) { }

  getImagesData(keyword:string)
  {
    //https://pixabay.com/api/?key=20889922-6948db0e6ae54bcda0a02da77&q=dakar&per_page=10&page=1
   // console.log("https://pixabay.com/api/?key=20889922-6948db0e6ae54bcda0a02da77&q="+keyword+"&per_page="+this.size+"&page="+this.currentPage)
    return this.http.get("https://pixabay.com/api/?key=20889922-6948db0e6ae54bcda0a02da77&q="+keyword+"&per_page="+this.size+"&page="+this.currentPage);
  }
}
