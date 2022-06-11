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

    var sql = "INSERT   INTO   students   (id,   name,   age,   city)   VALUES   ?";
    //data in form of array 
    var data = [
               [id = 2, name = "himanshu", age = 45, city = "delhi"],
               [id = 4, name = "gagan", age = 43, city = "delhi"]
             ]

    con.query(sql, [data], function (err, result) {
        if (err) throw err;
        console.log("1   record   inserted");
    });
})
