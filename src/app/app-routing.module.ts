import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartpageComponent } from './pages/chart/chart.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { FacultyComponent } from './pages/faculty/faculty.component';
import { StudentListComponent } from './pages/student-list/student-list.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { StudentWeeksComponent } from './pages/student-weeks/student-weeks.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BatchListComponent } from './pages/batch-list/batch-list.component';

const routes: Routes = [

{path:"",component:DashboardComponent,
  children:[
    { path: 'chart', component: ChartpageComponent },
    { path: 'user-list', component: UserListComponent },
    { path: 'student-list', component: StudentListComponent },
    { path:"courses",component:CoursesComponent},
    { path:"faculty",component:FacultyComponent},
    { path:"student-week",component:StudentWeeksComponent},
    { path:"batch-list",component:BatchListComponent}
  ]
},

  
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
