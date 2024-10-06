import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentAddPopupComponent } from 'src/app/popups/student-add-popup/student-add-popup.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {


constructor(
private dialog:MatDialog,
){}



openAddStudent(){
  this.dialog.open(
    StudentAddPopupComponent,
    {
      disableClose:true
    }
  )
}


}
