import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomebodyComponent } from './homebody/homebody.component';
import { ProfdeskComponent } from './profdesk/profdesk.component';
import { ProfloginComponent } from './proflogin/proflogin.component';
import { ProfsignupComponent } from './profsignup/profsignup.component';
import { StuddeskComponent } from './studdesk/studdesk.component';
import { StudloginComponent } from './studlogin/studlogin.component';
import { StudsignupComponent } from './studsignup/studsignup.component';
import { UserauthGuard } from './userauth.guard';
import { ProfauthGuard } from './profauth.guard';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { SubrequestComponent } from './subrequest/subrequest.component';
import { AddcourseformComponent } from './addcourseform/addcourseform.component';
import { AllcoursesComponent } from './allcourses/allcourses.component';
import { ApprovedComponent } from './approved/approved.component';
import { SeemoreComponent } from './seemore/seemore.component';
import { CourseupdateComponent } from './courseupdate/courseupdate.component';
import { CoursenotificationsComponent } from './coursenotifications/coursenotifications.component';
import { SinglereqComponent } from './singlereq/singlereq.component';


const routes: Routes = [
  {
    path:'',component: HomebodyComponent

  },
  {
    path:'signup',component: StudsignupComponent

  },
  {
    path:'studdesk',
    canActivate: [UserauthGuard],
    component: StuddeskComponent,
    children:[
      {path:'allcourses',component: AllcoursesComponent },
      {path:'enrolled',component: ApprovedComponent}

    ]
    

  },
  {
    path:'seemore',
    canActivate: [UserauthGuard],

    component: SeemoreComponent

  },
  {
    path:'studlogin',
    component: StudloginComponent

  },
  {
    path:'proflogin',component: ProfloginComponent

  },
  {
    path:'profsignup',component: ProfsignupComponent

  },
  
  {
    path:'addcourseform',
    canActivate: [UserauthGuard],
    component: AddcourseformComponent 

  },
  {
    path:'courseactivity',
    canActivate: [UserauthGuard],
    component: CoursenotificationsComponent

  },
  {
    path:'coursematerial',
    canActivate: [UserauthGuard],
    component: CourseupdateComponent 

  },
  {
    path:'rejectorapprove',
    canActivate: [UserauthGuard],
    component: SinglereqComponent

  },
  
  {
    path:'profdesk',
    canActivate: [ProfauthGuard],
    component: ProfdeskComponent,
    children:[
      {path:'courses',component: AddcourseComponent },
      {path:'applications',component: SubrequestComponent}

    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
