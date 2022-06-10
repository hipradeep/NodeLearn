import http from 'http';

const server = http.createServer((req, res) => {

    res.writeHead(202, "I am fine", {'Content_Type':  'text/plain'} )
    
    //res.write("Pradeep Maurya");
    //Can be called multiple times to provide successive parts of the body.
    res.write('<html>');
    res.write('<body>');
    res.write('<h1>Hello, World!</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();


})

const PORT = 8080;
const HOST = 'localhost';

server.listen(PORT, HOST, () => {
    console.log('Server Running at http://localhost:8080')
})