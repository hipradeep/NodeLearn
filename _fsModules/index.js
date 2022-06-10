import http from 'http';
import fs from 'fs'


const server = http.createServer((req, res) => {

    if (req.url == '/' || req.url == '/home.html') {
        fs.readFile('./_fsModules/src/home.html', (err, data) => {
            if (err) throw err;
            res.write(data);
            res.end();
        });

    } else if (req.url == '/about' || req.url == '/about.html') {
        fs.readFile('./_fsModules/src/about.html', (err, data) => {
            if (err) throw err;
            res.write(data);
            res.end();
        });
    } else {
        fs.readFile('./_fsModules/src/pnf.html', (err, data) => {
            if (err) throw err;
            res.write(data);
            res.end();
        });
    }


})

const PORT = 8080;
const HOST = 'localhost';

server.listen(PORT, HOST, () => {
    console.log('Server Running at http://localhost:8080');
});