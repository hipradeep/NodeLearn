var express = require('express');
var app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))



/*
//without bodyParser, dont change anything just uncommet

app.use((req, res, next)=>{
  var data = "";
  req.on('data', (chunk)=>{ data += chunk})
  req.on('end', ()=>{
      req.rawBody = data;
      if ( data && data.indexOf( '{' ) > -1 ) {
        req.body = JSON.parse( data );
      }
      next();
  })
})

*/

app.get('/', (req, res) => {
  console.log(req.url);
  res.send("Home")
})

//GET

//getting single req params at root url

// app.get('/:username', (req, res) => {
//   console.log(req.params.username);
//   res.send("username : " + req.params.username)
// })

//getting single req params at end user url
app.get('/user/:id', (req, res) => {
  console.log(req.params.id);
  console.log(req.url);
  res.send("Id : " + req.params.id)
})

//getting multiple req params at end user url
app.get('/user/:id/:name', (req, res) => {
  console.log(req.params.id);
  console.log(req.params.name);
  console.log(req.url);
  res.send("Id : "+req.params.id + " name : "+ req.params.name)
})


//getting single req query at end like url
////http://localhost:8081/likes?userId=45
app.get('/likes', (req, res) => {
  console.log(req.query.userId);
  console.log(req.url);
  res.send("UserId : "+req.query.userId)
})

//getting multiple req query at end photos url
app.get('/photos', (req, res) => {
  console.log(req.query.userId);
  console.log(req.query.date);
  console.log(req.url);
  res.send("UserId : "+req.query.userId + " date : "+ req.query.date)
})

//getting mix of req-params and req-query at end posts url
app.get('/posts/:userId', (req, res) => {
  console.log(req.params.userId);
  console.log(req.query.category);
  console.log(req.url);
  res.send("UserId : "+req.params.userId + " category : "+ req.query.category)
})

//getting mix of req-params and req-query at end photos url
app.get('/reposts/:userId/:parentId', (req, res) => {
  console.log(req.params.userId);
  console.log(req.params.parentId);
  console.log(req.query.date);
  console.log(req.query.photo);
  console.log(req.url);
  res.send("UserId : "+req.params.userId + ", parentId : "+req.params.parentId  +", category : "+ req.query.category+ ", photo : "+ (req.query.photo))
})

//POST requests

app.post('/register', (req, res) => {
    console.log(req.body);
    console.log(req.body.mobile);
    console.log(req.body.name);
    console.log(req.body.dob);
  res.send(req.body)
})

app.listen(8081, function () {
  console.log("Server runnng on http://localhost:8081");
})