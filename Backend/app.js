const express = require('express');
// const BookData = require('./src/model/Bookdata');
const Studentdata = require('./src/model/Studentdata');
const Activitydata = require('./src/model/Activitydata');
const Coursedata = require('./src/model/Coursedata');
const Profdata = require('./src/model/Profdata');
const Subscriptiondata = require('./src/model/Subscriptiondata');

const port = process.env.PORT || 3000;
const cors = require('cors');
var bodyparser=require('body-parser');
const jwt = require('jsonwebtoken')
var app = new express();
app.use(cors());
app.use(bodyparser.json());
// username='admin';
// password='12345678';




function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  }



  app.post('/studlogin',function(req,res){
  
    let email =req.body.uname;
    let password =req.body.password;   

    Studentdata.findOne({email:email})
   .then(function(user){
         if(user.password == password)
         {
          console.log('Valid User!');
          let payload = {subject: email + password};
          let token = jwt.sign(payload,'secretKey');
          res.status(200).send({token});
           }

         else{
            res.status(401).send('Invalid Credentials');
            }
    })
    .catch( ()=> {

            res.status(401).send('User not found! Please SIGN UP!');
  });
})



app.post('/studentdetails',function(req,res){
   
  console.log(req.body);
 
  var student = {       
    fullname : req.body.student.firstname,
    qualification : req.body.student.username,
    email : req.body.student.email,
    mobno : req.body.student.mobno,
    dob : req.body.student.dob,
    password : req.body.student.password

 }       
 var student = new Studentdata(student);
 student.save();
});

app.post('/professordetails',function(req,res){
   
  console.log(req.body);
 
  var professor = {       
    fullname : req.body.professor.firstname,
    qualifications : req.body.professor.username,
    experiences : req.body.professor.experience,    
    email : req.body.professor.email,
    mobno : req.body.professor.mobno,
    dob : req.body.professor.dob,
    password : req.body.professor.password

 }       
 var professor = new Profdata(professor);
 professor.save();
});

app.post('/proflogin',function(req,res){
  
  let email =req.body.uname;
  let password =req.body.password;   

  Profdata.findOne({email:email})
 .then(function(user){
       if(user.password == password)
       {
        console.log('Valid User!');
        let payload = {subject: email + password};
        let token = jwt.sign(payload,'secretKey');
        res.status(200).send({token});
         }

       else{
          res.status(401).send('Invalid Credentials');
          }
  })
  .catch( ()=> {

          res.status(401).send('User not found! Please SIGN UP!');
});
})

app.post('/newcourse',verifyToken,function(req,res){
   
  console.log(req.body);
 
  var course = {       
    title : req.body.course.title,
    fee : req.body.course.fee,
    intended : req.body.course.intended,
    description : req.body.course.description,
    url : req.body.course.url,
    profemail : req.body.course.email,



 }       
 var course = new Coursedata(course);
 course.save();
});

app.get('/profcourse/:id',verifyToken,  (req, res) => {
  
  const profemail = req.params.id; 
  
  console.log(profemail);
  // Chefresdata.find({'roomnumber':roomnumber})
  //   .then((chefres)=>{
  //       res.send(chefres);
  //   });
  Coursedata.find({ profemail: profemail }, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
      
    }
  })
})

app.get('/allcourses',verifyToken,function(req,res){
    
  Coursedata.find()
                .then(function(courses){
                    res.send(courses);
                });
});


app.get('/singlecourse/:id', verifyToken, (req, res) => {
  
  const id = req.params.id;
  Coursedata.findOne({"_id":id})
    .then((course)=>{
        res.send(course);
    });
})

app.get('/singleprof/:id', verifyToken,  (req, res) => {
  
  const email = req.params.id; 
  
  console.log(email);
  // Chefresdata.find({'roomnumber':roomnumber})
  //   .then((chefres)=>{
  //       res.send(chefres);
  //   });
  Profdata.findOne({ email: email }, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
      
    }
  })
})

app.post('/studreq', verifyToken,function(req,res){
   
  console.log(req.body);
 
  var studrequst = {       
    title : req.body.studrequst.title,
    studemail : req.body.studrequst.studemail,
    profemail : req.body.studrequst.profemail,
    status : req.body.studrequst.status
  

 }       
 var studrequst = new Subscriptiondata(studrequst);
 studrequst.save();
});

app.get('/studentreqs/:id', verifyToken,  (req, res) => {
  
  const profemail = req.params.id; 
  
  console.log(profemail);
  // Chefresdata.find({'roomnumber':roomnumber})
  //   .then((chefres)=>{
  //       res.send(chefres);
  //   });
  Subscriptiondata.find({ profemail: profemail }, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
      
    }
  })
})
app.get('/studreqstatus/:id', verifyToken,  (req, res) => {
  
  const studemail = req.params.id; 
  
  console.log(studemail);
  // Chefresdata.find({'roomnumber':roomnumber})
  //   .then((chefres)=>{
  //       res.send(chefres);
  //   });
  Subscriptiondata.find({ studemail: studemail }, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
      
    }
  })
})

app.post('/updatestudre', verifyToken,(req,res)=>{
 
  let id = req.body.approvedata.reqId;
  let title = req.body.approvedata.title;



  console.log(id),
  Subscriptiondata.countDocuments( { title: title , status: "approved" },function(err, data) {
    if (data<40) {
      console.log(data),
      Subscriptiondata.findByIdAndUpdate({"_id":id},
                              {$set:{
                              "status":"approved",
                             }})
 .then(function(){
     res.send('Approved');
 })
    } else {
      
      res.send('Maximum 40 students can be approved');
      
    }
  } )

  
})

app.get('/rejectstudre/:id', verifyToken,(req,res)=>{
  const id = req.params.id; 

  console.log(id),


  Subscriptiondata.findByIdAndUpdate({"_id":id},
                              {$set:{
                              "status":"rejected",
                             }})
 .then(function(){
     res.send();
 })
})

app.post('/newactivity', verifyToken,function(req,res){
   
  console.log(req.body);
 
  var activity = {      
     
    activities : req.body.activity.activities,
    url1discrip : req.body.activity.url1discrip,
    url1 : req.body.activity.url1,
    url2discrip : req.body.activity.url2discrip,
    url2 : req.body.activity.url2,
    url3discrip : req.body.activity.url3discrip,
    url3 : req.body.activity.url3,
    title : req.body.activity.title,
    profemail : req.body.activity.profemail



 }       
 var activity = new Activitydata(activity);
 activity.save();
});

app.get('/courseactivity/:id', verifyToken,  (req, res) => {
  
  const title = req.params.id; 
  
  
  // Chefresdata.find({'roomnumber':roomnumber})
  //   .then((chefres)=>{
  //       res.send(chefres);
  //   });
  Activitydata.find({ title: title }, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
      
    }
  })
})

app.get('/approvedcount/:id',  verifyToken, (req, res) => {
  
  const title = req.params.id; 
  
 
  // Chefresdata.find({'roomnumber':roomnumber})
  //   .then((chefres)=>{
  //       res.send(chefres);
  //   });
  Subscriptiondata.countDocuments( { title: title , status: "approved" },function(err, data) {
    if (err) {
      console.log(err);
    } else {
      
      res.json(data);
      
    }
  } )
  // Coursedata.find({ title: title }, function(err, result) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     res.json(result);
      
  //   }
  // })
})

app.get('/singlereq/:id',  verifyToken, (req, res) => {
  
  const id = req.params.id;
  Subscriptiondata.findOne({"_id":id})
    .then((studreq)=>{
        res.send(studreq);
    });
})


app.listen(port, function(){
    console.log('listening to port 3000');
});

