import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-week-detail-popup',
  templateUrl: './add-week-detail-popup.component.html',
  styleUrls: ['./add-week-detail-popup.component.css']
})
export class AddWeekDetailPopupComponent {

constructor(
  public dialogRef:MatDialogRef<AddWeekDetailPopupComponent>
){}




buildForm(){
  
}

}
