import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/db.service';
import { Config } from "src/app/shred/config"

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent  implements OnInit {


userList:any[] = []
searchList:any[] = []

date_format = Config.dateformat

constructor(
private dbservice:DbService
){}


ngOnInit(): void {
 this.getUserList() 
}


getUserList(){
  this.dbservice.methodGet("/getUserList").subscribe((data:any)=>{
    this.userList = data
    this.searchList = data
  })
}
  
}
