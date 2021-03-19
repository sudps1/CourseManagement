import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AddcourseService {
  item= {
    title :'',
    fee:'',
    intended:'',
    description:'',
    url:'',
    email:''
  }
  item1 = {
    title :'',
    studemail:'',
    profemail:'',
    status: ''
    
  }
  item2= {
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
  item3 = {
    reqId :'',
    title:'',
   
  }
    constructor(private http:HttpClient) { }
    newCourse(item:any)
    {   
      return this.http.post("http://localhost:3000/newcourse",{"course":item})
      .subscribe(data =>{console.log(data)})
    }
    getCourse(id:any){
      return this.http.get("http://localhost:3000/profcourse/"+id);
    }
    getAllcourses(){
      return this.http.get("http://localhost:3000/allcourses");
    }
    
    getsCourse(id:any){
      return this.http.get("http://localhost:3000/singlecourse/"+id);
    }

    newStudreq(item1:any)
  {   
    return this.http.post("http://localhost:3000/studreq",{"studrequst":item1})
    .subscribe(data =>{console.log(data)})
  }
  getStudreqs(id:any){
    return this.http.get("http://localhost:3000/studentreqs/"+id);
  }
  
  getStudreqstatus(id:any){
    return this.http.get("http://localhost:3000/studreqstatus/"+id);
  }
  
  Approve(item3:any)
  {   
    return this.http.post("http://localhost:3000/updatestudre",{"approvedata":item3})
    .subscribe(data =>{console.log(data)})
  }
  Reject(id:any)
  {
    console.log('client update')
    return this.http.get("http://localhost:3000/rejectstudre/"+id)
    .subscribe(data =>{console.log(data)})
  }
  newActivity(item2:any)
    {   
      return this.http.post("http://localhost:3000/newactivity",{"activity":item2})
      .subscribe(data =>{console.log(data)})
    }
    getActivities(id:any){
      return this.http.get("http://localhost:3000/courseactivity/"+id);
    }
    getCount(id:any){
      return this.http.get("http://localhost:3000/approvedcount/"+id);
    }
    getsinglereq(id:any){
      return this.http.get("http://localhost:3000/singlereq/"+id);
    }
}
