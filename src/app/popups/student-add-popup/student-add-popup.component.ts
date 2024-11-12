import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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

updateMode:Boolean = false ;


educationList = [
  {name:"High School"},
  {name:"Higher Secondary"},
  {name:"Graduation"},
  {name:"Post Graduation"},
  
]


constructor(
public dialogRef:MatDialogRef<StudentAddPopupComponent>,
private dbservice:DbService,
private fb:FormBuilder,
@Inject(MAT_DIALOG_DATA) public data:any
){
 
}

ngOnInit(): void {
  this.buildform()
  this.getAllBatch()
  this.getAllCourseList()
if(this.data.tp==1){
  this.itemForm.patchValue(this.data.list)
  this.updateMode = true ;
}

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
    alert("Invalid form");
  }
}

updateStudent(){
  if(this.itemForm.valid){
    this.dbservice.methodPost("/updateStudent",this.itemForm.value)
    .subscribe((res)=>{
      if(res==1){
        alert("Update Successfull ! ")
      }
    })
  }else{
    alert("Invalid form");
  }
}


}
