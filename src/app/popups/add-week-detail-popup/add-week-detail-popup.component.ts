import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DbService } from 'src/app/db.service';

@Component({
  selector: 'app-add-week-detail-popup',
  templateUrl: './add-week-detail-popup.component.html',
  styleUrls: ['./add-week-detail-popup.component.css']
})
export class AddWeekDetailPopupComponent implements OnInit {

itemForm!:FormGroup

constructor(
  public dialogRef:MatDialogRef<AddWeekDetailPopupComponent>,
  private fb:FormBuilder,
  private dbservice:DbService
){}


ngOnInit(): void {
  this.buildForm()
}

buildForm(){
 this.itemForm = this.fb.group({
  week:[0],
  taskName:[""],
  remarks:[""],
  date_from:[new Date()],
  date_to:[new Date().setDate(new Date().getDate()+6)],
  isCompleted:[false]
 })
}

getNextweek(){
this.dbservice.methodGet("/")
}



}
