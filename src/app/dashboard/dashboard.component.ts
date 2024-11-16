
import { Component, OnInit ,} from '@angular/core';

import  {navbarData}  from './sidebar/nav-data'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'], 
})
export class DashboardComponent  implements OnInit{

  navItems:any[] = []

ngOnInit(): void {
  this.navItems = navbarData
}


currentMenu:number | null = null

i=1
  
openMenu(i:number){

  if(i==this.currentMenu){
    this.currentMenu = null
    return
  }

this.currentMenu = i
}



}
