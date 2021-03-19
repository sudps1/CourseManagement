import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-studsignup',
  templateUrl: './studsignup.component.html',
  styleUrls: ['./studsignup.component.css']
})
export class StudsignupComponent implements OnInit {

  constructor(private UserService: UserService,private router: Router) { }
 
  UserDetail= {
    firstname :'',
    username:'',
    email:'',
    mobno:'',
    dob:'',
    password:'',
    confirmpassword:''

  }
  AddUser()
  {
    this.UserService.newUser(this.UserDetail);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
  }

}
