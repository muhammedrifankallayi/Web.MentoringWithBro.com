import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DbService } from 'src/app/db.service';
import Swal from "sweetalert2"
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
private dialog:MatDialog,
private snack:MatSnackBar
){}


ngOnInit(): void {
 this.getUserList() 
}


getUserList(){
  this.dbservice.methodGet("/getAllEnquiries").subscribe((data:any)=>{
    this.userList = data.data
    this.searchList = data.data
  })
}


openUpdate(data:any){
  Swal.fire({
    title: 'Are you gonna close?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.closeEnquiry(data)
    }
  });
  
}


closeEnquiry(data:any){
  this.dbservice.methodPost("/closeEnquiry",data).subscribe((res:any)=>{
    if(res.success==true){
      Swal.fire(
        'Updated!',
        'user enquiry closed',
        'success'
      );
      this.getUserList()
    }
  })
}

  
}
