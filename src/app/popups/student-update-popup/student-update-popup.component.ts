import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DbService } from 'src/app/db.service';

@Component({
  selector: 'app-student-update-popup',
  templateUrl: './student-update-popup.component.html',
  styleUrls: ['./student-update-popup.component.css']
})
export class StudentUpdatePopupComponent  implements OnInit {


itemForm!:FormGroup

constructor(
  private fb:FormBuilder,
  private snack:MatSnackBar,
  private dbservice:DbService,
  @Inject(MAT_DIALOG_DATA) public data:any,
  public dialogRef:MatDialogRef<StudentUpdatePopupComponent>
){}

ngOnInit(): void {
  
}

buildForm(){
  this.itemForm = this.fb.group({
    batchNo:[""],
    course:[''],
    _id:[this.data?._id]
  })
}


submit(){
  this.dbservice.methodPost("updateStudent",this.itemForm.value)
  .subscribe((data:any)=>{
    if(data.success==true){
      this.snack.open("student updated successfull","OK",{duration:3000});
      this.dialogRef.close(1)
    }
  })
}


}
