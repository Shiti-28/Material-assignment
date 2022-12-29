import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Students } from './model/students';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  
  constructor(public http:HttpClient) { }
  url:string="http://localhost:3000";

  postData(st:Students) {
    return this.http.post<Students>(this.url+"/posts",st);
  }

  
}
