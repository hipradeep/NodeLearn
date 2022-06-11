
const express = require('express')

const app = express()

var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "test400"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("👌 Connected!");
})

var sql = "INSERT   INTO   students   (id,   name,   age,   city)   VALUES   (?,?,?,?)"

// npm i body-parser 
var bodyParser = require('body-parser');
// middleware 
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {
    //__dirname = global variable 
    res.sendFile(__dirname + "/" + "./src/student.html")

    //res.send("root page")
    //console.log("inside root function")
})

app.post('/register',urlencodedParser,  function (req, res)  {
    var a = req.body.id
    var b = req.body.name
    var c = req.body.age
    var d = req.body.city
    con.query(sql, [a, b, c, d], function(){console.log("data inserted")})
    // console.log([a, b, c, d]);
    // res.end("fhg");
}
)

app.get('/delete', (req, res) => {
    //__dirname = global variable 
    res.sendFile(__dirname + "/" + "./src/deleteStudent.html")

})

app.post('/delemp', urlencodedParser, (req, res) => {
    var id = req.body.id
    var sql = "delete from students where id=?"
    con.query(sql, [id], () => console.log("data deleted"))


})


app.listen(8080, () => console.log("server started"))
