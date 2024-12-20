import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



const rootURL = "http://localhost:3000/api/Admin";


@Injectable({
  providedIn: 'root'
})



export class DbService {

  constructor(private http:HttpClient) { }


methodGet(url:string){
return this.http.get(rootURL+url);
}

methodPost(url:string,data:any){
  return this.http.post(`${rootURL}${url}`,data);
}



}
