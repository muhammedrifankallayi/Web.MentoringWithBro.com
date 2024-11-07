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


educationList = [
  {name:"High School"},
  {name:"Higher Secondary"},
  {name:"Graduation"},
  {name:"Post Graduation"},
  
]


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
     name:[""],
     username:[''],
     password:[''],
     address:[""],
     mobile:[""],
     courseId:[""],
     joinDate:[""],
     batchId:[""],
     education:['']

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
    this.dbservice.methodPost("/saveStudent",this.itemForm.value)
    .subscribe((res)=>{
      if(res==1){
        alert("Saved Successfull ! ")
      }
    })
  }else{
    alert("Invali from");
  }
}


}
