import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DbService } from 'src/app/db.service';
import { AddWeekDetailPopupComponent } from 'src/app/popups/add-week-detail-popup/add-week-detail-popup.component';
import { WeekDetailsPopupComponent } from 'src/app/popups/week-details-popup/week-details-popup.component';

@Component({
  selector: 'app-student-weeks',
  templateUrl: './student-weeks.component.html',
  styleUrls: ['./student-weeks.component.css']
})
export class StudentWeeksComponent implements OnInit {


searchList:any[] = []
resultList:any[] = []

totalWeekList = new Array(24)

  constructor(
    private dialog:MatDialog,
    private dbservice:DbService
  ){}

  ngOnInit(): void {
    this.getAllStudentList()
    console.log(this.totalWeekList.length,"PP");
    
  }

  openWeekDetails(data:any){
this.dialog.open(
  WeekDetailsPopupComponent,
  {
    disableClose:true,
    data:data
  }
)
  }



getStudentTaskPerfList(userId:any){

this.dbservice.methodGet("/getTaskPerformanceListByUser")
.subscribe((res:any)=>{
  if(res.success&&res.data.length>0){
   this.openWeekDetails(res.data);
  }else{
    this.dialog.open(AddWeekDetailPopupComponent,{
      disableClose:true,
      width:"400px"
    })
  }
})

}


getAllStudentList(){
  this.dbservice.methodGet("/getAllStudents").subscribe((res:any)=>{
this.searchList = res.data ;
this.resultList = res.data ;
  })
}


}
