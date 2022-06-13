var express = require('express');
var app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req, res) => {
  res.send("Home")
})

//getting single req params at root url

app.get('/:username', (req, res) => {
  console.log(req.params.username);
  res.send("username : " + req.params.username)
})

//getting single req params at end user url
app.get('/user/:id', (req, res) => {
  console.log(req.params.id);
  res.send("Id : " + req.params.id)
})

//getting multiple req params at end user url
app.get('/user/:id/:name', (req, res) => {
  console.log(req.params.id);
  console.log(req.params.name);
  res.send("Id : "+req.params.id + " name : "+ req.params.name)
})


app.get('/useer/:id/', (req, res) => {
  // console.log(req.params.id);

  //res.send("Id : "+req.params.id + " name : "+ req.params.name)
  res.send(req.body)
})



app.listen(8081, function () {
  console.log("Server runnng on http://localhost:8081");
})