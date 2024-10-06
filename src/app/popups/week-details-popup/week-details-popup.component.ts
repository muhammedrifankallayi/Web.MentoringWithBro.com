import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddWeekDetailPopupComponent } from '../add-week-detail-popup/add-week-detail-popup.component';

@Component({
  selector: 'app-week-details-popup',
  templateUrl: './week-details-popup.component.html',
  styleUrls: ['./week-details-popup.component.css']
})
export class WeekDetailsPopupComponent {

constructor(
public dialogRef:MatDialogRef<WeekDetailsPopupComponent>,
private dialog:MatDialog
){}


openAddWeekDetail(){
  this.dialog.open(
    AddWeekDetailPopupComponent,
    {
      disableClose:true
    }
  )
}


}
