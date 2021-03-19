import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {UserService} from './user.service';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {A11yModule} from '@angular/cdk/a11y';
import {UserauthGuard} from './userauth.guard';
import { TokenInterceptorService } from './token-interceptor.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomebodyComponent } from './homebody/homebody.component';
import { StudsignupComponent } from './studsignup/studsignup.component';
import { StudloginComponent } from './studlogin/studlogin.component';
import { StuddeskComponent } from './studdesk/studdesk.component';
import { ProfloginComponent } from './proflogin/proflogin.component';
import { ProfsignupComponent } from './profsignup/profsignup.component';
import { ProfdeskComponent } from './profdesk/profdesk.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { SubrequestComponent } from './subrequest/subrequest.component';
import { AllcoursesComponent } from './allcourses/allcourses.component';
import { ApprovedComponent } from './approved/approved.component';
import { AddcourseformComponent } from './addcourseform/addcourseform.component';
import { SeemoreComponent } from './seemore/seemore.component';
import { CourseupdateComponent } from './courseupdate/courseupdate.component';
import { CoursenotificationsComponent } from './coursenotifications/coursenotifications.component';
import { SinglereqComponent } from './singlereq/singlereq.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomebodyComponent,
    StudsignupComponent,
    StudloginComponent,
    StuddeskComponent,
    ProfloginComponent,
    ProfsignupComponent,
    ProfdeskComponent,
    AddcourseComponent,
    SubrequestComponent,
    AllcoursesComponent,
    ApprovedComponent,
    AddcourseformComponent,
    SeemoreComponent,
    CourseupdateComponent,
    CoursenotificationsComponent,
    SinglereqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    A11yModule
  ],
  providers: [UserService,UserauthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
