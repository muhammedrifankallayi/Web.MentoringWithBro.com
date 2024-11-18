import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DbService } from 'src/app/db.service';

@Component({
  selector: 'app-course-add-for-task',
  templateUrl: './course-add-for-task.component.html',
  styleUrls: ['./course-add-for-task.component.css']
})
export class CourseAddForTaskComponent implements OnInit {


  itemForm!:FormGroup
   file!:File
   courseList:any[] = []

  constructor(
    public dialogRef:MatDialogRef<CourseAddForTaskComponent>,
    private fb:FormBuilder,
    private dbservice:DbService,
    private snack:MatSnackBar
    
  ){
    this.buildForm()
  }

  ngOnInit(): void {

    this.getAllCourseList() ;

  }
  
  buildForm(){
  this.itemForm = this.fb.group({
    week:[0,Validators.required],
    task_name:[''],
    course_id:["",Validators.required],
    task_file_path:[""],
    active:[false],

  })
  }
  


  fileChange(event:any){

   this.file = event.target.files[0]

  }

  getAllCourseList(){
  this.dbservice.methodGet("/getAllCourseList").subscribe((res:any)=>{
    this.courseList = res.data
  })
  }

  GetWeek(e:any){
    const course_id = e.target.value
if(course_id){
  this.dbservice.methodGet("/getNextWeekCourseTask/"+course_id).subscribe((res:any)=>{
    if(res.success){
      this.itemForm.controls['week'].setValue(res.data) ;
    }
  })
}
  
  }
  
  
  submit(){
  if(!this.file){
    this.snack.open("Please Select Course Details File !","OK",{duration:3000})
    return
  }

    if(this.itemForm.valid){
      

      const formData = new FormData()

      formData.append('file',this.file)
      formData.append('data',this.itemForm.value);

     this.dbservice.methodPost("/saveCourseTask",formData).subscribe((res:any)=>{
      if(res.success){
       this.snack.open("saved successfull","OK",{duration:3000});
       this.dialogRef.close(1)
      }
     })
    }else{
       this.snack.open("Invalid input data.., please check it ","OK",{duration:3000});
    }
  }

}
