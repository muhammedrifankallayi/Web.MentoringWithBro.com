import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DbService } from 'src/app/db.service';

@Component({
  selector: 'app-course-add-popup',
  templateUrl: './course-add-popup.component.html',
  styleUrls: ['./course-add-popup.component.css']
})
export class CourseAddPopupComponent {


  itemForm!:FormGroup
  payTypeList = [
    {value:0,name:"Weekly"},
    {value:1,name:"Monthly"},
    {value:2,name:"quarterly"},
    {value:3,name:"6 Month"},
    {value:4,name:"Yearly"},
  ]


constructor(
  public dialogRef:MatDialogRef<CourseAddPopupComponent>,
  private fb:FormBuilder,
  private dbservice:DbService,
  private snack:MatSnackBar

){

}

builForm(){
  this.itemForm = this.fb.group({
   _Id:[""],
    course:["",Validators.required],
    duration:["",Validators.required],
    fees:["",Validators.required],
    description:[""],
    payType:[0],
    isPublished:[false]
  })
}



submit(){
if(this.itemForm.invalid){
  this.snack.open("Invalid form data","OK",{duration:3000})
}

this.dbservice.methodPost("/saveCourse",this.itemForm.value).subscribe((res:any)=>{
  if(res.success==true){
    this.snack.open("Added successfull !","OK",{duration:3000});
    this.dialogRef.close(1)
  }
})
}




}
