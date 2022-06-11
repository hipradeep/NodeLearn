
//NOTE: Without ES6

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "test400" //first create database in workbench 
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    // first create tables, in which you want to insert data
    var sql = "INSERT   INTO   students   (id,   name,   age,   city)   VALUES   ('2',   'Kapil Maurya',   '30',   'Lucknow')";

    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1   record   inserted" + result.affectedRows);
        console.log("Data inserted!");

    });
})
