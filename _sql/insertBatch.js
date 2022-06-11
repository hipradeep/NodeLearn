
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
    console.log("👌 Connected!");

    var sql = "INSERT   INTO   students   (id,   name,   age,   city)   VALUES   (?,?,?,?)";
    var id = 8
    var name = "umesh"
    var age = 45
    var city = "delhi"

    con.query(sql, [id, name, age, city], function (err, result) {
        if (err) throw err;
        console.log("1   record   inserted" + JSON.stringify(result));
        console.log("✔ Data inserted!");

    });
})
