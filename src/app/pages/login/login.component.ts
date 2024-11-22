import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DbService } from 'src/app/db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


itemForm!:FormGroup


constructor(
  private fb:FormBuilder,
  private dbservice:DbService,
  private router:Router,
  private snack:MatSnackBar
){}

 ngOnInit(): void {
   this.buildForm()
 }

buildForm(){
  this.itemForm = this.fb.group({
  username:["",Validators.required],
  password:["",Validators.required],
  date:[new Date]
  });
}

submit(){

if(this.itemForm.invalid){
  alert("Invalid data");
}

console.log(this.itemForm.value);

  this.dbservice.methodPost("/login",this.itemForm.value).subscribe((res:any)=>{
   if(res.success==true){
 
    this.snack.open("Welcome back!","close",{duration:3000})
    const token  = res?.data
    localStorage.setItem("adminToken",token);
    this.router.navigate(['/']) 

   }else{
    this.snack.open("username or password incorrect","OK",{duration:3000})
   }
  })
}






}
