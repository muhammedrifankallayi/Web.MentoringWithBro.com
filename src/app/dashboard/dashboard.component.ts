import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit ,} from '@angular/core';
import { Router } from '@angular/router';


interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'], 
})
export class DashboardComponent {

  // dashoboarshow= false;



  // isSideNavCollapsed = false;
  // screenWidth = 0;

  // onToggleSideNav(data: SideNavToggle): void {
  //   this.screenWidth = data.screenWidth;
  //   this.isSideNavCollapsed = data.collapsed;
  //   this.dashoboarshow= false
  // }

  // activeDropdown: string | null = null;

  // toggleDropdown(menu: string) {
  //   this.activeDropdown = this.activeDropdown === menu ? null : menu;
  // }

  usersDropdown: boolean = false;
  configDropdown: boolean = false;

  toggleDropdown(menu: string): void {
    if (menu === 'usersDropdown') {
      this.usersDropdown = !this.usersDropdown;
    } else if (menu === 'configDropdown') {
      this.configDropdown = !this.configDropdown;
    }
  }
}
