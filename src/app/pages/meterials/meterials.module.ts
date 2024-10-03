import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';




const Modules = [
  MatButtonModule,
  MatIconModule,
  MatDialogModule
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
