import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _loginUrl = "http://localhost:3000/studlogin";
  private _profloginUrl = "http://localhost:3000/proflogin";

  item= {
    firstname :'',
    username:'',
    email:'',
    mobno:'',
    dob:'',
    password:'',
    confirmpassword:''
  }
  profitem= {
    firstname :'',
    username:'',
    experience:'',
    email:'',
    mobno:'',
    dob:'',
    password:'',
    confirmpassword:''

  }
  loginUser(user:any)
  {
    return this.http.post<any>(this._loginUrl, user)
  }
  loginProf(user:any)
  {
    return this.http.post<any>(this._profloginUrl, user)
  }

  loggedIn()
  {
    return !!localStorage.getItem('token')
  }
  getToken()
  {
    return localStorage.getItem('token')
  }
  
  
  constructor(private http:HttpClient) { }

  newUser(item:any)
  {   
    return this.http.post("http://localhost:3000/studentdetails",{"student":item})
    .subscribe(data =>{console.log(data)})
  }
  newProf(profitem:any)
  {   
    return this.http.post("http://localhost:3000/professordetails",{"professor":profitem})
    .subscribe(data =>{console.log(data)})
  }
  getProf(id:any){
    return this.http.get("http://localhost:3000/singleprof/"+id);
  }
  
}
