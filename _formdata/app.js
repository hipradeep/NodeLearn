// NOTE: Using *WITHOUT* ES6
// Remove :  "type":"module", from package.json

const express = require('express')
var app = express();


app.get('/', function (req, res) {
  console.log(__dirname);
  res.sendFile(__dirname + "/" + "./src/form.html")
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