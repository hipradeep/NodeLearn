
//NOTE: Without ES6

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "test400" 
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    var sql = "select * FROM students";

    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result); 
    });
})
