import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {UserService} from '../user.service';
import { AddcourseService } from '../addcourse.service'

@Component({
  selector: 'app-coursenotifications',
  templateUrl: './coursenotifications.component.html',
  styleUrls: ['./coursenotifications.component.css']
})
export class CoursenotificationsComponent implements OnInit {

  constructor(private _router:Router,private AddcourseService: AddcourseService,
    public _auth:UserService) { }

  ngOnInit(): void {
    let title = localStorage.getItem("title");
    this.AddcourseService.getActivities(title).subscribe((data)=>{
      this.courseactivities=JSON.parse(JSON.stringify(data));
  })
   
  }
  courseactivities= {
    activities :'',
    url1discrip:'',
    url1:'',
    url2discrip:'',
    url2:'',
    url3discrip:'',
    url3:'',
    title:'',
    profemail:'',
    date:''
  }

}
