import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DbService } from 'src/app/db.service';
import { StudentAddPopupComponent } from 'src/app/popups/student-add-popup/student-add-popup.component';
import { Config } from 'src/app/shared/config';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  searchList:any[] = [];
  resultList:any[] = [];
  date_format = Config.dateformat
constructor(
private dialog:MatDialog,
private dbservice:DbService
){}

ngOnInit(): void {
  this.getAllStudents();  
}


openAddStudent(list:any,tp=0){
  this.dialog.open(
    StudentAddPopupComponent,
    {
      disableClose:true,
      width:"600px",
      data:{
        tp,
        list
      }
    }
  )
}


getAllStudents(){
  this.dbservice.methodGet("/getAllStudents").subscribe((data:any)=>{
            this.searchList = data.data ;
            this.resultList = data.data ;

  })
}

}
