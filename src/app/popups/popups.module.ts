import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseAddPopupComponent } from './course-add-popup/course-add-popup.component';
import { MeterialsModule } from '../pages/meterials/meterials.module';



@NgModule({
  declarations: [
    CourseAddPopupComponent
  ],
  imports: [
    CommonModule,
    MeterialsModule
  ]
})
export class PopupsModule { }
