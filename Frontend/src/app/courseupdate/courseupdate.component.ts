import { Component, OnInit } from '@angular/core';
import { AddcourseService } from '../addcourse.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-courseupdate',
  templateUrl: './courseupdate.component.html',
  styleUrls: ['./courseupdate.component.css']
})
export class CourseupdateComponent implements OnInit {

  constructor(private AddcourseService: AddcourseService,private router: Router){  } 


  ngOnInit(): void {
  }

  coursework= {
    activities :'',
    url1discrip:'',
    url1:'',
    url2discrip:'',
    url2:'',
    url3discrip:'',
    url3:'',
    title:'',
    profemail:''

  }
  Activities(){
    let title = localStorage.getItem("title");
    let profemail = localStorage.getItem("profemail");
    this.coursework.title=title;
    this.coursework.profemail=profemail;

    this.AddcourseService.newActivity(this.coursework);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/profdesk/courses']);
  }
}
