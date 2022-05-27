
import http from 'http';

const server = http.createServer((req, res) => {

    res.writeHead(200, "Status Message - Pradeep", { 'Conatent-Type': "text/plan" })

    //request
    if (req.url == '/') {
        res.end("Home Page");
    } else if (req.url == '/about') {
        res.end("About Page");
    } else if (req.url == '/login') {
        res.end("Login Page");
    }
    console.log('------------');
    console.log(req.url);

})

server.listen(8000, 'localhost', () => {
    console.log("Server runnng on http://localhost:8000");
})