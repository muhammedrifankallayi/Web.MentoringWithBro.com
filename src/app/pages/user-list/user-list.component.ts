import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DbService } from 'src/app/db.service';
import { StudentUpdatePopupComponent } from 'src/app/popups/student-update-popup/student-update-popup.component';
import { Config } from "src/app/shared/config"

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
private dbservice:DbService,
private dialog:MatDialog
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


updateToStudentPopup(userId:string){
  this.dialog.open(StudentUpdatePopupComponent,{
    width:"400ppx",
    disableClose:true,
    data:{
      _id:userId
    }
  }).afterClosed().subscribe((res)=>{
    if(res==1){
      this.getUserList()
    }
  })
}

  
}
