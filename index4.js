import http from 'http';
import fs from 'fs'

const server = http.createServer((req, res) => {

    res.writeHead(200, "Status Message - Pradeep", { 'Conatent-Type': "text/plan" })

    //request
    if (req.url == '/') {
        fs.readFile('./public4/home.html', (error, data) =>{
            if(error) throw error;
            res.end(data);
        })
       
    } else if (req.url == '/about') {
        fs.readFile('./public4/about.html', (error, data) =>{
            if(error) throw error;
            res.end(data);
        })
       
    } else if (req.url == '/login') {
        fs.readFile('./public4/login.html', (error, data) =>{
            if(error) throw error;
            res.end(data);
        })
       
    }else{
        fs.readFile('./public4/pnf.html', (error, data) =>{
            if(error) throw error;
            res.end(data);
        })
       
    }

})

server.listen(8000, 'localhost', () => {
    console.log("Server runnng on http://localhost:8000");
})