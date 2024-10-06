import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { FoodListComponent } from './pages/food-list/food-list.component';
import { ChartpageComponent } from './pages/chart/chart.component';
import { TodayComponent } from './pages/today/today.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { FacultyComponent } from './pages/faculty/faculty.component';
import { StudentListComponent } from './pages/student-list/student-list.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { StudentWeeksComponent } from './pages/student-weeks/student-weeks.component';

const routes: Routes = [
  { path: 'chart', component: ChartpageComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'student-list', component: StudentListComponent },
  { path:"courses",component:CoursesComponent},
  { path:"faculty",component:FacultyComponent},
  { path:"student-week",component:StudentWeeksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
