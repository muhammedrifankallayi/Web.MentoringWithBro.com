import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DbService } from 'src/app/db.service';
import { FacultyAddPopupComponent } from 'src/app/popups/faculty-add-popup/faculty-add-popup.component';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit{

resultList:any[] = []
searchList:any[] = []


constructor(private dialog:MatDialog,private dbservice:DbService){}

ngOnInit(): void {
  this.getAllFaculty();
}

openFacultyAdd(){
  this.dialog.open(FacultyAddPopupComponent,{
    disableClose:true
  })
}

getAllFaculty(){
  this.dbservice.methodGet("/getAllFaculties").subscribe((data:any)=>{
        this.resultList = data.data ;
        this.searchList = data.data ;
  })
}


}
