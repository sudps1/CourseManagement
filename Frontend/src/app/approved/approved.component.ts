import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {UserService} from '../user.service';
import {AddcourseService} from '../addcourse.service';

@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.css']
})
export class ApprovedComponent implements OnInit {
 

 

  constructor(private _router:Router,public _auth:UserService,private AddcourseService: AddcourseService,) { }
  studreqs = {
    title :'',
    studemail:'',
    profemail:'',
    status: ''
    
  }

  ngOnInit(): void {
  

    
    let user = localStorage.getItem("studemail");
    this.AddcourseService.getStudreqstatus(user).subscribe((data)=>{
      this.studreqs =JSON.parse(JSON.stringify(data));
      
  })
  
  }
  loggedUser()
  {
    this._router.navigate(['/studlogin'])
  }
  find(studreq:any)
  {
    let isHidden = false;
    let status = studreq.status.toString()
    if(status=="approved"){
      isHidden=true;
      return(isHidden);
    }
  }
  CourseActivity(studreq:any){
    localStorage.setItem("title", studreq.title.toString());
    this._router.navigate(['courseactivity']);
  }
}
