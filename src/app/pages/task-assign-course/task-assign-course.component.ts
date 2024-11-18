import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DbService } from 'src/app/db.service';
import { CourseAddForTaskComponent } from 'src/app/popups/course-add-for-task/course-add-for-task.component';
import { Config } from 'src/app/shared/config';

@Component({
  selector: 'app-task-assign-course',
  templateUrl: './task-assign-course.component.html',
  styleUrls: ['./task-assign-course.component.css']
})
export class TaskAssignCourseComponent {


  searchList:any[] = [];
  resultList:any[] = [];
  date_format = Config.dateformat
constructor(
private dialog:MatDialog,
private dbservice:DbService
){}

ngOnInit(): void {
  this.GetAllTaskCourse();  
}


openAddTaskForCourse(list:any,tp=0){
  this.dialog.open(
  CourseAddForTaskComponent,
    {
      disableClose:true,
      width:"600px",
      data:{
        tp,
        list
      }
    }
  ).afterClosed().subscribe((result:any)=>{
    if(result==1){
  this.GetAllTaskCourse()
    }
  })
}


GetAllTaskCourse(){
  this.dbservice.methodGet("/getCourseWiseTask").subscribe((data:any)=>{
            this.searchList = data.data ;
            this.resultList = data.data ;

  })
}


}
