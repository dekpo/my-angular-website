import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(public http:HttpClient, private route:ActivatedRoute) { }

  itemId = '';
  itemInfo:any;
  imgSrc = '';
  gray = false;

  generateSrc(id=this.itemId,gray=false,blur=0){
    this.imgSrc = 'https://picsum.photos/id/'+this.itemId+'/1280/960';
    this.gray? this.imgSrc +='?grayscale' : null;
    /* if (this.gray) {
      this.imgSrc +='?grayscale';
    } else {
      null;
    } */
  }

  grayscale(){
    this.gray=!this.gray;
    this.generateSrc();
    console.log(this.gray);
  }

  ngOnInit(): void {
    // on récup. l'id dans la route active
    this.itemId = this.route.snapshot.params['itemId'];
    console.log('itemId:',this.itemId);
    // on charge les données correspondantes de l'image
    this.http.get('https://picsum.photos/id/'+this.itemId+'/info').subscribe(
      data => {
        this.itemInfo = data;
        this.generateSrc(this.itemId);
        console.log(data); 
      }
    )
  }
}
