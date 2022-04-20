import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(public http:HttpClient,private scroll:ViewportScroller) { }

  joke:any;
  jokeNotFound = true;
  gallery:any;
  page = 1;
  urlPicsum = '';
  urlChuck = 'https://api.chucknorris.io/jokes/random';

  getUrl(url:string){
    return this.http.get(url);
  }

  loadPics(way="",nb=this.page){
    switch(way){
      case 'next':
        this.page++;
        break;
      case 'prev':
        this.page>1 ? this.page-- : null;
        break;
      case '':
        this.page = nb;
        break;
    }
    this.urlPicsum = 'https://picsum.photos/v2/list?page='+this.page+'&limit=6';
    this.scroll.scrollToAnchor("top");
    this.getUrl(this.urlPicsum).subscribe(
      data => {
        this.gallery = data;
        console.log(data);
      }
    )
  }

  ngOnInit(): void {
    this.getUrl(this.urlChuck).subscribe(
      (data) => {
        this.joke = data;
        this.jokeNotFound = false;
        console.log(data);
      }
    )
    this.loadPics();
  }
}
