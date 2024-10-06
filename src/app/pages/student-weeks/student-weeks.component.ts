import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WeekDetailsPopupComponent } from 'src/app/popups/week-details-popup/week-details-popup.component';

@Component({
  selector: 'app-student-weeks',
  templateUrl: './student-weeks.component.html',
  styleUrls: ['./student-weeks.component.css']
})
export class StudentWeeksComponent {

  constructor(private dialog:MatDialog){}

  openWeekDetails(){
this.dialog.open(
  WeekDetailsPopupComponent,
  {
    disableClose:true
  }
)
  }
}
