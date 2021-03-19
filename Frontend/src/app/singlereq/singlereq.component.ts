import { Component, OnInit } from '@angular/core';
import { AddcourseService } from '../addcourse.service'
import {Router} from '@angular/router'
import {UserService} from '../user.service';

@Component({
  selector: 'app-singlereq',
  templateUrl: './singlereq.component.html',
  styleUrls: ['./singlereq.component.css']
})
export class SinglereqComponent implements OnInit {

  constructor(private _router:Router,private AddcourseService: AddcourseService,
    public _auth:UserService) { }

  ngOnInit(): void {
    let reqId = localStorage.getItem("reqId");
    this.AddcourseService.getsinglereq(reqId).subscribe((data)=>{
      this.studreq=JSON.parse(JSON.stringify(data));
  })
  // let isHidden = false;
  this.AddcourseService.getCount(this.studreq.title).subscribe((data)=>{
    let counts=JSON.parse(JSON.stringify(data));
   
})

  }
  studreq = {
    title :'',
    studemail:'',
    profemail:'',
    status: ''
    
  }
  apr = {
    reqId :'',
    title:'',
   
  }
  


  Approve()
  {
    this.apr.reqId = localStorage.getItem("reqId");
    this.apr.title = localStorage.getItem("title");

    this.AddcourseService.Approve(this.apr);   
    alert("Success");
    this._router.navigate(['/profdesk/applications']);

  }
  Reject()
  {
    let reqId = localStorage.getItem("reqId");
    
    this.AddcourseService.Reject(reqId);   
    alert("Success");
    this._router.navigate(['/profdesk/applications']);

  }
  num: number ;
  rem: number ;

  Num(){
    // let isHidden = false;
    
    this.AddcourseService.getCount(this.studreq.title).subscribe((data)=>{
      this.num=JSON.parse(JSON.stringify(data));
      this.rem= 40 - this.num;
      // if(num>40){
      //   isHidden=true;
      //   return(isHidden)
      // }
  })
  
  }

}
