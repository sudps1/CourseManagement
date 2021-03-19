import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder,Validators} from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-proflogin',
  templateUrl: './proflogin.component.html',
  styleUrls: ['./proflogin.component.css']
})
export class ProfloginComponent implements OnInit {
  user={uname:'',
  password:''}

  constructor(private _auth: UserService,
    private _router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  loginProf () {
    
    this._auth.loginProf(this.user)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token) 
        localStorage.setItem('email', this.user.uname) ;

        this._router.navigate(['/profdesk'])
      },
      err => {
        console.log(err);
        this._router.navigate(['proflogin'])
      }
    ) 
  }
}
