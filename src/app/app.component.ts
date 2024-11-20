import { Component, OnInit } from '@angular/core';
import { DbService } from './db.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Mentor';

 constructor(
  private dbservice:DbService,
  private router:Router
 ){}
  

  ngOnInit(): void {
    this.tokenCheck()
  }



  tokenCheck(){
  const token = localStorage.getItem("adminToken");
  if(token){
    this.dbservice.methodPost("/checkToken",{token}).subscribe((res:any)=>{
      if(res.success){
        if(this.router.url.includes("login")){
          this.router.navigate(['/dashboard'])
        }
      }else{
        this.router.navigate(['/login'])
      }
    })
  }else{
    this.router.navigate(['/login'])
  }
  }


}
