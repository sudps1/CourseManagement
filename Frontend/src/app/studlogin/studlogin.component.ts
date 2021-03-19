import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder,Validators} from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-studlogin',
  templateUrl: './studlogin.component.html',
  styleUrls: ['./studlogin.component.css']
})
export class StudloginComponent implements OnInit {
  user={uname:'',
  password:''}

  constructor(private _auth: UserService,
    private _router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  loginUser () {
    
    this._auth.loginUser(this.user)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token) ;
        localStorage.setItem('studemail', this.user.uname) ;
        this._router.navigate(['/studdesk'])
      },
      err => {
        console.log(err);
        this._router.navigate(['studlogin'])
      }
    ) 
  }

}
