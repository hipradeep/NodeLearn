var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

var conn = require('./connection');

app.get('/', (req, res) => {
  console.log(req.url);
  res.send("Home")
})


//show all students
app.get('/students', (req, res) => {
  var sql = "select * FROM students";
  conn.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
})

//show all students by name
app.get('/students/:id', (req, res) => {
  var sql = "select * FROM students where id=?";
  conn.query(sql, [req.params.id], function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
})

//show student by id and name
app.get('/students/:id/:name', (req, res) => {
  var sql = "select * FROM students where id=? and name=?";
  conn.query(sql, [req.params.id, req.params.name], function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
})

//insert data in student table (register)
app.post('/students/register', (req, res) => {
  var params = req.body;
  console.log(params);
  conn.query("insert into students set ?", params, (err, result) => {

    if (err) throw err
    else
      res.send(result)
  })
})

//insert data in student table (register) USING FORM
app.post('/students/register2', (req, res) => {
  var params = req.body;
  console.log(params);
  conn.query("insert into students values(?,?,?,?)", [req.params.id, req.params.name, req.params.age, req.params.city], (err, result) => {

    if (err) throw err
    else
      res.send(result)
  })
})

//delete data from form, delete using id
app.delete('/students/del/:id', (req, res) => {

  conn.query("delete from students where id=?", [req.params.id], (err, result) => {
    if (err) throw err
    else
      res.send(result)
  })
})

//update data in student tables, city using id
app.put('/students/update', (req, res) => {
  conn.query("update  students set ?  where id=?", [req.body.city, req.body.id], (err, result) => {
    if (err) throw err
    else
      res.send(result)
  })
})





var server = app.listen(8081, function () {
  console.log("Server runnng on http://localhost:8081");
})