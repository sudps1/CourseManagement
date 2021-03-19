import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {UserService} from '../user.service';
import {AddcourseService} from '../addcourse.service';


@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {

  constructor(private _router:Router,public _auth:UserService,private AddcourseService: AddcourseService,) { }

  ngOnInit(): void {
    let user = localStorage.getItem("email");
    this.AddcourseService.getCourse(user).subscribe((data)=>{
      this.coursedetails =JSON.parse(JSON.stringify(data));
  })
  }
  coursedetails = {
    title :'',
    fee:'',
    intended:'',
    description:'',
    url:'',
    profemail:''

  }
  loggedUser()
  {
    this._router.navigate(['/addcourseform'])
  }
  addmaterial(coursedetail:any)
  {
    localStorage.setItem("title", coursedetail.title.toString());
    localStorage.setItem("profemail", coursedetail.profemail.toString());
    this._router.navigate(['coursematerial']);

  }
}
