//import express from 'express';
const express = require('express')
var app = express();
// import path from 'path';
// const __dirname = path.resolve(path.dirname('')); 

// app.get('/a', function (req, res) {
//    res.send('Hello World qqqq');
// })

app.get('/', (req, res) => {
  console.log(__dirname);
  //  res.sendFile(path.join(__dirname ,'/','form.html'))
  res.sendFile(__dirname + "/" + "form.html")

  //res.send("root page"+ __dirname)
  //console.log("inside root function")
})
app.get('/admin', function (req, res) {
  res.send('Hello World Admin');
})
app.get('/regpage', (req, res) => {
  res.send("welcome " + req.query.user + "  " + req.query.pass)
})


var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Server runnng on http://localhost:8081", host, port);
})