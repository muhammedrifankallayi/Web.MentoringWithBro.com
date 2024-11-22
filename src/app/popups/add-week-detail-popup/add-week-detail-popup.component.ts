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
courseList:any[] = []
taskList:any[] = []
currTaskToAssign = ""
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
  this.getAllCourses()
  this.gettaskLists(this.data.courseId)
}

buildForm(){
 this.itemForm = this.fb.group({
  week:[0],
  remarks:[""],
  date_from:[new Date()],
  date_to:[new Date().setDate(new Date().getDate()+6)],
  courseId:[""], 
  taskId:[""],
  isCompleted:[false],
  studentId:[this.data.userId,Validators.required]
 })
 this.itemForm.get("courseId")?.disable()
 this.itemForm.get("taskId")?.disable()
}

getNextweek(){
this.dbservice.methodGet("/getNextWeekByStudent?id="+this.data.userId).subscribe((res:any)=>{
  this.itemForm.get("week")?.setValue(res.data);
})
}

getAllCourses(){
  this.dbservice.methodGet("/getAllCourseList").subscribe((data:any)=>{
       this.courseList = data.data
  })
}


gettaskLists(id:string){

this.dbservice.methodGet("/getCourseWiseTask?course_id="+id)
.subscribe((data:any)=>{
this.taskList = data.data


this.taskList.forEach((x:any)=>{
  if(x.week==this.itemForm.get("week")?.value){
    this.currTaskToAssign = x._id
    this.itemForm.get("taskId")?.setValue(x._id);
    this.itemForm.get("courseId")?.setValue(id);
  }
})
})

}


//submitt

saveTask(){
  if(this.itemForm.invalid){
    alert("invalid form data")
    return
  }




  this.dbservice.methodPost("/saveTask",this.itemForm.getRawValue()).subscribe((res:any)=>{
    if(res.success){
     this.snack.open("Saved Successfull","OK",{duration:3000});
    }else{
      this.snack.open("something went wrong")
    }
  })
}



}
