import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DbService } from 'src/app/db.service';

@Component({
  selector: 'app-student-add-popup',
  templateUrl: './student-add-popup.component.html',
  styleUrls: ['./student-add-popup.component.css']
})
export class StudentAddPopupComponent {


itemForm!:FormGroup;


constructor(
public dialogRef:MatDialogRef<StudentAddPopupComponent>,
private dbservice:DbService,
private fb:FormBuilder
){}

buildform(){
  this.itemForm = this.fb.group({
     Name:[""],
     Address:[""],
     Mobile:[""],
     Course:[""],
     Qualification:[""],
     CourseJoinDate:[""]

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
