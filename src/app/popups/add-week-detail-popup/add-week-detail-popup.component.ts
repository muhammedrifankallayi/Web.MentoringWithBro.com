import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-week-detail-popup',
  templateUrl: './add-week-detail-popup.component.html',
  styleUrls: ['./add-week-detail-popup.component.css']
})
export class AddWeekDetailPopupComponent implements OnInit {

itemForm!:FormGroup

constructor(
  public dialogRef:MatDialogRef<AddWeekDetailPopupComponent>,
  private fb:FormBuilder
){}


ngOnInit(): void {
  this.buildForm()
}

buildForm(){
 this.itemForm = this.fb.group({
  week:[0],
  taskName:[""],
  description:[""],
  isCompleted:[false]
 })
}

}
