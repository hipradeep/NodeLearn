var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World HTTP Modules!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080



/* ---------
import http from 'http';

const server = http.createServer((req, res) => {

});

const PORT = 8080;
const HOST = 'localhost';

server.listen(PORT, HOST, () => {
    console.log('Server Running at http://localhost:8080');
});

--------------*/