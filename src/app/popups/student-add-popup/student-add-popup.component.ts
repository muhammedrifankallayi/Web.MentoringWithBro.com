import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DbService } from 'src/app/db.service';

@Component({
  selector: 'app-student-add-popup',
  templateUrl: './student-add-popup.component.html',
  styleUrls: ['./student-add-popup.component.css']
})
export class StudentAddPopupComponent  implements OnInit{


itemForm!:FormGroup;

batchList:any[] = []
courseList:any[] = []

constructor(
public dialogRef:MatDialogRef<StudentAddPopupComponent>,
private dbservice:DbService,
private fb:FormBuilder
){
 
}

ngOnInit(): void {
  this.buildform()
  this.getAllBatch()
  this.getAllCourseList()
}

buildform(){
  this.itemForm = this.fb.group({
     Name:[""],
     UserName:[''],
     Address:[""],
     Mobile:[""],
     Course:[""],
     Qualification:[""],
     CourseJoinDate:[""],
     batch:[""]

  })
}

getAllBatch(){
  this.dbservice.methodGet("/getAllBatch").subscribe((data:any)=>{
this.batchList = data.data


  })
}

getAllCourseList(){
  this.dbservice.methodGet("/getAllCourseList").subscribe((data:any)=>{
this.courseList = data.data
  })
}


submit(){
  if(this.itemForm.valid){
    this.dbservice.methodPost("admin/saveStudent",this.itemForm.value)
    .subscribe((res)=>{
      if(res==1){
        alert("Saved Successfull ! ")
      }
    })
  }
}


}
