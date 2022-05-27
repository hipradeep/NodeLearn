
import http from 'http';

const server = http.createServer((req, res) => {
    //request
    // if(req.url != '/favicon.ico'){
    //     console.log(req.url)
    //     console.log(req.method)
    // }


    //response
    // res.statusCode = 200;
    // res.statusMessage = "pradeep";
    //res.setHeader('Content-Type', 'text/plan');

    //writeHead - it done all avobe in one go
    res.writeHead(200, "Status Message - Pradeep", { 'Conatent-Type': "text/plan" })


    res.end("Response from server fu");

})

server.listen(8000, 'localhost', () => {
    console.log("Server runnng on http://localhost:8000");
})