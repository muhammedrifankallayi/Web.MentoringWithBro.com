import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DbService } from 'src/app/db.service';
import { CourseAddPopupComponent } from 'src/app/popups/course-add-popup/course-add-popup.component';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent  implements OnInit{

searchList:any[] = []
resultList:any[]= []

constructor(
  private dialog:MatDialog,
  private snack:MatSnackBar,
  private dbservice:DbService
){}

ngOnInit(): void {
  this.getAllCourses()
}


getAllCourses(){
  this.dbservice.methodGet("/getAllCourseList").subscribe((data:any)=>{
this.searchList = data.data
this.resultList = data.data
  })
}

openCourseAddPopup(){
  this.dialog.open(
    CourseAddPopupComponent,
    {
      disableClose:true,
      width:"600px"
    }
  ).afterClosed().subscribe((res)=>{
    if(res==1){

    }
  })
}


}
