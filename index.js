import express from 'express';
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World qqqq');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Server runnng on http://localhost:8081",host, port );
})

//$ node server.js