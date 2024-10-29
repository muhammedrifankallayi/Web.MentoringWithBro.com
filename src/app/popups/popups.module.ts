import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseAddPopupComponent } from './course-add-popup/course-add-popup.component';
import { MeterialsModule } from '../pages/meterials/meterials.module';
import { FacultyAddPopupComponent } from './faculty-add-popup/faculty-add-popup.component';
import { StudentAddPopupComponent } from './student-add-popup/student-add-popup.component';
import { WeekDetailsPopupComponent } from './week-details-popup/week-details-popup.component';
import { AddWeekDetailPopupComponent } from './add-week-detail-popup/add-week-detail-popup.component';
import { StudentUpdatePopupComponent } from './student-update-popup/student-update-popup.component';
import { AddBatchPopupComponent } from './add-batch-popup/add-batch-popup.component';



@NgModule({
  declarations: [
    CourseAddPopupComponent,
    FacultyAddPopupComponent,
    StudentAddPopupComponent,
    WeekDetailsPopupComponent,
    AddWeekDetailPopupComponent,
    StudentUpdatePopupComponent,
    AddBatchPopupComponent
  ],
  imports: [
    CommonModule,
    MeterialsModule
  ]
})
export class PopupsModule { }
