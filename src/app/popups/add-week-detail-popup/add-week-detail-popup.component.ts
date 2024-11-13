import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DbService } from 'src/app/db.service';

@Component({
  selector: 'app-add-week-detail-popup',
  templateUrl: './add-week-detail-popup.component.html',
  styleUrls: ['./add-week-detail-popup.component.css']
})
export class AddWeekDetailPopupComponent implements OnInit {

itemForm!:FormGroup;
selectedFile: File | null = null;

constructor(
  public dialogRef:MatDialogRef<AddWeekDetailPopupComponent>,
  private fb:FormBuilder,
  private dbservice:DbService,
  @Inject(MAT_DIALOG_DATA) public data:any,
  private snack:MatSnackBar
){}


ngOnInit(): void {
  this.buildForm()
  this.getNextweek()
}

buildForm(){
 this.itemForm = this.fb.group({
  week:[0],
  taskName:[""],
  remarks:[""],
  date_from:[new Date()],
  date_to:[new Date().setDate(new Date().getDate()+6)],
  isCompleted:[false],
  studentId:[this.data.userId,Validators.required]
 })
}

getNextweek(){
this.dbservice.methodGet("/getNextWeekByStudent?id="+this.data.userId).subscribe((res:any)=>{
  this.itemForm.get("week")?.setValue(res.data);
})
}


onFileSelected(event: Event): void {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    this.selectedFile = input.files[0];
  }
}



//submitt

saveTask(){
  if(this.itemForm.invalid){
    alert("invalid form data")
    return
  }

  if (!this.selectedFile) {
    alert('Please select a PDF file.');
    return;
  }

  const formData = new FormData();
  formData.append('file', this.selectedFile);
  formData.append('data', JSON.stringify(this.itemForm.value));

  this.dbservice.methodPost("/saveTask",formData).subscribe((res:any)=>{
    if(res.success){
     this.snack.open("Saved Successfull","OK",{duration:3000});
    }else{
      this.snack.open("something went wrong")
    }
  })
}



}
