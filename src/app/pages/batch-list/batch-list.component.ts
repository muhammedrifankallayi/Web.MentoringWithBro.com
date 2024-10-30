import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DbService } from 'src/app/db.service';
import { AddBatchPopupComponent } from 'src/app/popups/add-batch-popup/add-batch-popup.component';
import { Config } from 'src/app/shared/config';

@Component({
  selector: 'app-batch-list',
  templateUrl: './batch-list.component.html',
  styleUrls: ['./batch-list.component.css']
})
export class BatchListComponent implements OnInit {


searchList:any[] = []
resultList :any[] = []

date_format = Config.dateformat

ngOnInit(): void {
  this.getAllBatches()
}


constructor(
  private dialog:MatDialog,
  private dbservice:DbService
){}




  addBatch(){
         this.dialog.open(
          AddBatchPopupComponent,
          {
            disableClose:true
          }
         ).afterClosed().subscribe(res=>{
          if(res==1){
            this.getAllBatches()
          }
         })
  }



getAllBatches(){
  this.dbservice.methodGet("/getAllBatch").subscribe((data:any)=>{
    this.resultList = data.data;
    this.searchList = data.data ;
  })
}

}
