import http from 'http';

//http.createServer(requestListener);

const server=http.createServer((req, res)=>{

    res.setHeader('Content_Type', 'text/plain');
    
    //res.end('Response From Server prdp');

    //res.end(req.url) // send end url

    //we can also handle the response accordind to url
    if(req.url=='/') res.end("Home");
    else if(req.url=='/about') res.end("About");
    else if(req.url=='/pradeep') res.end("Pradeep");
    else if(req.url=='/contact-us') res.end("Contact Us");
    else if(req.url=='/resume') res.end("Resume");
    else if(req.url=='/profile') res.end("Profile");
    else res.end('Wrong End Url');

})

const PORT=8080;
const HOST='localhost';

server.listen(PORT, HOST, ()=>{
    console.log('Server Running at http://localhost:8080')
})