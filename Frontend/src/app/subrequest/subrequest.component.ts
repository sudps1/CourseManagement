import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {UserService} from '../user.service';
import { AddcourseService } from '../addcourse.service'

@Component({
  selector: 'app-subrequest',
  templateUrl: './subrequest.component.html',
  styleUrls: ['./subrequest.component.css']
})
export class SubrequestComponent implements OnInit {

  constructor(private _router:Router,private AddcourseService: AddcourseService,
    public _auth:UserService) { }

  ngOnInit(): void {
    let user = localStorage.getItem("email");
    this.AddcourseService.getStudreqs(user).subscribe((data)=>{
      this.studreq=JSON.parse(JSON.stringify(data));
  })
   
  }
  studreq = {
    title :'',
    studemail:'',
    profemail:'',
    status: ''
    
  }


  



 
  singlereq(studre){
    localStorage.setItem("reqId", studre._id.toString());
    localStorage.setItem("title", studre.title.toString());

    this._router.navigate(['rejectorapprove']);
  }
}
