import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';




const Modules = [
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  ReactiveFormsModule,
  FormsModule,
  MatCheckboxModule,
  MatMenuModule,
  MatSnackBarModule
  
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
