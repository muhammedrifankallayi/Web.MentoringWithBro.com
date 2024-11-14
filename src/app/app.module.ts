import { NgModule,  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { ChartpageComponent } from './pages/chart/chart.component';
import { NgApexchartsModule } from "ng-apexcharts";
import {RouterModule} from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import  { BodyComponent } from './body/body.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoursesComponent } from './pages/courses/courses.component';
import { MeterialsModule } from '../app/pages/meterials/meterials.module';
import { PopupsModule } from './popups/popups.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FacultyComponent } from './pages/faculty/faculty.component';
import { StudentListComponent } from './pages/student-list/student-list.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { StudentWeeksComponent } from './pages/student-weeks/student-weeks.component';
import { LoginComponent } from './pages/login/login.component';
import { InterceptorInterceptor } from './pages/services/interceptor.service';
import { BatchListComponent } from './pages/batch-list/batch-list.component';
import { MatButtonModule } from '@angular/material/button';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ChartpageComponent,
    BodyComponent,
    CoursesComponent,
    FacultyComponent,
    StudentListComponent,
    UserListComponent,
    StudentWeeksComponent,
    LoginComponent,
    BatchListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    NgApexchartsModule,
    FontAwesomeModule,
    MeterialsModule,
    PopupsModule,
    HttpClientModule,
    MatButtonModule,


    



  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorInterceptor,
      multi: true  
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
