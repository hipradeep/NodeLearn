// NOTE: Using ES6

import express from 'express';
var app = express();
import path from 'path';
const __dirname = path.resolve(path.dirname(''));


app.get('/', (req, res) => {
  res.sendFile(__dirname + "/" + "./_formdata/src/form.html")
})

app.get('/home',  (req, res) => {
  res.send('Home');
})

app.get('/admin',  (req, res) => {
  res.send('Admin Page');
})
app.get('/regpage', (req, res) => {
  res.send("welcome " + req.query.user + "  " + req.query.pass)
})

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Server runnng on http://localhost:8081", host, port);
})