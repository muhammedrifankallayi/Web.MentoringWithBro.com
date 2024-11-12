import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DbService } from 'src/app/db.service';

@Component({
  selector: 'app-faculty-add-popup',
  templateUrl: './faculty-add-popup.component.html',
  styleUrls: ['./faculty-add-popup.component.css']
})
export class FacultyAddPopupComponent {


itemForm!:FormGroup


constructor(
  public dialogRef:MatDialogRef<FacultyAddPopupComponent>,
  private fb:FormBuilder,
  private dbservice:DbService
){
  this.buildForm()
}

buildForm(){
this.itemForm = this.fb.group({
  name:[''],
  domain:[''],
  qualification:[""],
  salary:[""],
  join_date:[""],


})
}



submit(){
  if(this.itemForm.valid){
   this.dbservice.methodPost("/saveFaculty",this.itemForm.value).subscribe((res:any)=>{
    if(res==1){
      alert("Data saved Successfull")
    }
   })
  }else{
    alert("Invalid Form")
  }
}


}
