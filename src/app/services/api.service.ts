import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }

  urlChuck = 'https://api.chucknorris.io/jokes/random';
  urlPicsum ='http://127.0.0.1:8000/api/picture';
  urlPodek = 'https://dekpo.com/api/public/pictures/list?page=7&limit=3';


  getUrl(url:string){
    return this.http.get(url);
  }

  listPicsum(num:number){
    return this.urlPicsum+'?page='+num+'&limit=6';
  }

  imgPicsum(id:number){
    return this.urlPicsum+'/id/'+id+'/640/480';
  }

  bigImgPicsum(id:number){
    return this.urlPicsum+'/id/'+id+'/1280/960?'
  }

  imgInfo(id:number){
    return this.urlPicsum+'/'+id;
  }
  
}