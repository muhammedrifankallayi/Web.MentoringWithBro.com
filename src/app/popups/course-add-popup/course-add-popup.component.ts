import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-course-add-popup',
  templateUrl: './course-add-popup.component.html',
  styleUrls: ['./course-add-popup.component.css']
})
export class CourseAddPopupComponent {


  itemForm!:FormGroup


constructor(
  public dialogRef:MatDialogRef<CourseAddPopupComponent>,
  private fb:FormBuilder

){

}

builForm(){
  this.itemForm = this.fb.group({
   _Id:[""],
    courseName:["",Validators.required],
    duration:["",Validators.required],
    fees:["",Validators.required],
    description:[""],
    publish:[false],
    totalEntroll:[0]
  })





}


}
