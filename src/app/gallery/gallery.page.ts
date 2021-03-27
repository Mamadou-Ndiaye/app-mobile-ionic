import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../sevices/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

   
    public dataImages:any=[];
     public keyword:string;
    
     size: number=10;
    currentPage: number=1;
    totalPages: number;
    



  constructor(private http:HttpClient , private galleryService:GalleryService) { }

  ngOnInit() {
  }
  onLoadImages()
  {   
      this.currentPage=1;
      this.dataImages=[];
      this.totalPages=0
      this.dosearch();
  }
  dosearch()
  {
    this.http.get("https://pixabay.com/api/?key=20889922-6948db0e6ae54bcda0a02da77&q="+this.keyword+"&per_page="+this.size+"&page="+this.currentPage).
    subscribe(
      data=>{
       console.log(data);
       
        data["hits"].forEach(image=> {
            this.dataImages.push(image);
         });
         this.totalPages=data["totalHits"]/this.size;
      },err=>{
        console.log(err);
      }
    )
  }

  loadData(evt)
  {
      if(this.currentPage<this.totalPages)
      {
        console.log(this.currentPage+"/"+this.totalPages);
        ++this.currentPage;
         this.dosearch();
         evt.target.complete();
      }
      if(this.currentPage>=this.totalPages)
          evt.target.disabled=true;
  }

}
