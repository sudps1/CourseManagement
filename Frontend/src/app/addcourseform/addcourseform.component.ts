import { Component, OnInit } from '@angular/core';
import { AddcourseService } from '../addcourse.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-addcourseform',
  templateUrl: './addcourseform.component.html',
  styleUrls: ['./addcourseform.component.css']
})
export class AddcourseformComponent implements OnInit {

  constructor(private AddcourseService: AddcourseService,private router: Router){  } 


  ngOnInit(): void {
  }
  CourseDetails = {
    title :'',
    fee:'',
    intended:'',
    description:'',
    url:'',
    email:''
  }
  Addcourse()
  {    
    let email = localStorage.getItem("email");
    this.CourseDetails.email= email;

    this.AddcourseService.newCourse(this.CourseDetails);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/profdesk/courses']);
  }
}
