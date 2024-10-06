import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';




const Modules = [
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  ReactiveFormsModule,
  MatCheckboxModule
  
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ...Modules
    
  ],
  exports:[
   ...Modules
  ]
})
export class MeterialsModule { }
