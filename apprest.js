var express = require('express');
var app = express();
var bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

var conn= require('./connection');

app.get('/', (req, res) => {
    var sql = "select * FROM students";
    conn.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result); 
        res.send(result);
    });
  })

  app.get('/user/:id', (req, res) => {
    var sql = "select * FROM students where id=?";
    conn.query(sql,[req.params.id], function (err, result) {
        if (err) throw err;
        console.log(result); 
        res.send(result);
    });
  })
  app.get('/user/:name/:id', (req, res) => {
    var sql = "select * FROM students where name=? and id=?";
    conn.query(sql,[req.params.name, req.params.id], function (err, result) {
        if (err) throw err;
        console.log(result); 
        res.send(result);
    });
  })
app.get('/user', (req, res) => {
   // console.log(req.params.id);
   // console.log(req.params.name);
    //res.send("Id : "+req.params.id + " name : "+ req.params.name)
    res.send(req.body)
  })

var server = app.listen(8081, function () {
    console.log("Server runnng on http://localhost:8081");
  })