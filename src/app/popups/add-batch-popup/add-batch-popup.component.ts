import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DbService } from 'src/app/db.service';

@Component({
  selector: 'app-add-batch-popup',
  templateUrl: './add-batch-popup.component.html',
  styleUrls: ['./add-batch-popup.component.css']
})
export class AddBatchPopupComponent  implements OnInit {


itemForm!:FormGroup

constructor(
  private fb:FormBuilder,
  private dbservice:DbService,
  public dialogRef:MatDialogRef<AddBatchPopupComponent>,
  private snack:MatSnackBar
){}

ngOnInit(): void {
  this.buildForm()
  this.getNextBatchNo()
}


buildForm(){
  this.itemForm = this.fb.group({
    batch:[0],
    batchNo:[""],
    noOfStudents:[''],
    startDate:[new Date],
    currentStatus:['Pending'],
    duration:[0]
  })
}


getNextBatchNo(){
  this.dbservice.methodGet("/getNextBatchNo").subscribe((res:any)=>{
    if(res){
      this.itemForm.get("batch")?.setValue(res.data)
      this.itemForm.get("batchNo")?.setValue(res.data)
      this.itemForm.controls['batch'].disable()
    }
  })
}



submit(){
  if(this.itemForm.invalid){
    this.snack.open("Invalid form data","OK",{duration:3000})
    return ;
  }

  this.dbservice.methodPost("addBatch",this.itemForm.value)
.subscribe((res:any)=>{
  if(res.success==true){
   this.snack.open("saved successfull","OK",{duration:3000})
   this.dialogRef.close(1);
  }
})

}





}
