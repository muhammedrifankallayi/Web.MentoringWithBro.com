import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CourseAddPopupComponent } from 'src/app/popups/course-add-popup/course-add-popup.component';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

constructor(
  private dialog:MatDialog
){}


getAllCourses(){
  
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
