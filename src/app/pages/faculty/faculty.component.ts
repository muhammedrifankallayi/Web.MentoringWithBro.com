import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FacultyAddPopupComponent } from 'src/app/popups/faculty-add-popup/faculty-add-popup.component';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent {



constructor(private dialog:MatDialog){}



openFacultyAdd(){
  this.dialog.open(FacultyAddPopupComponent,{
    disableClose:true
  })
}


}
