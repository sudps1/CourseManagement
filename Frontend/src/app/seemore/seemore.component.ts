import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddcourseService } from '../addcourse.service'
import { UserService } from '../user.service'

@Component({
  selector: 'app-seemore',
  templateUrl: './seemore.component.html',
  styleUrls: ['./seemore.component.css']
})
export class SeemoreComponent implements OnInit {

  constructor(private router:Router,private AddcourseService:AddcourseService,
    private UserService:UserService) { }

  course = {
    title :'',
    fee:'',
    intended:'',
    description:'',
    url:'',
    email:''
  }
  profs = {
    fullname :'',
    qualifications:'',
    experiences:'',
    email:'',
    mobno:'',
    dob:'',
    password:''
  }

  ngOnInit(): void {
    let courseId = localStorage.getItem("courseId");
    this.AddcourseService.getsCourse(courseId).subscribe((data)=>{
      this.course=JSON.parse(JSON.stringify(data));
  })

  let profemail = localStorage.getItem("profemail");
    this.UserService.getProf(profemail).subscribe((data)=>{
      this.profs=JSON.parse(JSON.stringify(data));
  })
  

  }
  studreq = {
    title :'',
    studemail:'',
    profemail:'',
    status: 'Waiting for Approval'
    
  }
  studrequest()
  { 
       this.studreq.title=this.course.title;
       let studemail = localStorage.getItem("studemail");
       this.studreq.studemail= studemail;
       let profemail = localStorage.getItem("profemail");
       this.studreq.profemail= profemail;
     


    this.AddcourseService.newStudreq(this.studreq);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/studdesk/allcourses']);
  }

}
