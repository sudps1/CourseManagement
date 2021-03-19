import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-profsignup',
  templateUrl: './profsignup.component.html',
  styleUrls: ['./profsignup.component.css']
})
export class ProfsignupComponent implements OnInit {

  constructor(private UserService: UserService,private router: Router) { }
  UserDetail= {
    firstname :'',
    username:'',
    experience:'',
    email:'',
    mobno:'',
    dob:'',
    password:'',
    confirmpassword:''

  }
  AddProf()
  {
    this.UserService.newProf(this.UserDetail);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/proflogin']);
  }

  ngOnInit(): void {
  }

}
