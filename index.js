// var express = require('express');
// var path=require('path');
// var router = express.Router();

// const { Router } = require("express");

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   //res.render('index', { title: 'Express' });
//   //res.send("<h2>Hello This is express developed by sweety")
//   res.sendFile(path.resolve("public/demo.html"));
// });

// module.exports = router;
// router.get('/login', function(req, res, next) {
//   //res.render('index', { title: 'Express' });
//   //res.send("<h2>Hello This is express developed by sweety")
//   res.sendFile(path.resolve("public/demo.html"));
// });
// router.get('/', function(req, res, next) {
//   //res.render('index', { title: 'Express' });
//   //res.send("<h2>Hello This is express developed by sweety")
//   res.sendFile(path.resolve("public/index2.html"));
// });
// router.post('/textboxdata', function(req, res, next) {
//   //res.render('index', { title: 'Express' });
//  //res.send("<h2>Hello This Is Express Developed By sweety</h2>");
//  var username=req.body.username
//  var female=req.body.female
//   var output="<table border=1><tr><td>Username<td>"+username+"<tr><td>Gender<td>"+female;
//   res.send(output)
//  });
// router.get('/stud', function(req, res, next) {
//   res.render('index', { title: 'Embedded Java Script template' });
   
//   });

 
// router.get('/posts',(req, res,)=> {
//   res.render('index', { title: 'Embedded Java Script template' });
//  // res.sendFile(path.resolve("public/textbox.html"));
//  var posts=[
//    {title:"casual",message:"Hello"},
//    {title:"announcement",message:"RRR is releasing on"},
//    {title:"greetings",message:"Happy Anniversary"},
//   ]
 
//   });
router.get("/selectqry",(req,res)=>{
  var regno=req.body.regno;
  mysql.getConnection((err, connection) => {

   if(err) throw err
     connection.query('SELECT * from student1 WHERE regno='+regno, (err, result) => {
    connection.release()
    if(err) throw err
    res.send('datadisplay',{rows:rows});
    
    })
    
    });
})
module.exports='router';
  