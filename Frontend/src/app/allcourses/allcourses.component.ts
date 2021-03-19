import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import { AddcourseService } from '../addcourse.service';
@Component({
  selector: 'app-allcourses',
  templateUrl: './allcourses.component.html',
  styleUrls: ['./allcourses.component.css']
})
export class AllcoursesComponent implements OnInit {

  constructor(private _router:Router,private AddcourseService: AddcourseService,public _auth:UserService
    ) { }
    // public _auth:AuthTwoService

  ngOnInit(): void {
    this.AddcourseService.getAllcourses().subscribe((data)=>{
      this.courses=JSON.parse(JSON.stringify(data));
    })
  }
  subs(course:any)
  {
    localStorage.setItem("courseId", course._id.toString());
    localStorage.setItem("profemail", course.profemail.toString());

    this._router.navigate(['seemore']);

  }
  courses= [{
    title :'',
    fee:'',
    intended:'',
    description:'',
    url:'',
    profemail:''
  }]

}
