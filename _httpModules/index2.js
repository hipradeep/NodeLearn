import http from 'http';

//http.createServer(requestListener);

const server=http.createServer((req, res)=>{

    res.setHeader('Content_Type', 'text/plain');
    //res.end('Response From Server prdp');
    res.end(req.url) // send end url
})

const PORT=8080;
const HOST='localhost';

server.listen(PORT, HOST, ()=>{
    console.log('Server Running at http://localhost:8080')
})