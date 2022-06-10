var   mysql   =   require('mysql'); 
var   con   =   mysql.createConnection({ 
host:   "localhost", 
user:   "root", 
password:   "1234", 
database:   "pk" 
}); 
con.connect(function(err)   { 
if   (err)   throw   err; 
console.log("Connected!"); 
var   sql   =   "INSERT   INTO   employees   (id,   name,   age,   city)   VALUES   ('1',   'Ajeet   Kumar',   '27',   'Allahabad')"; 
 var sql2="select * FROM employees";
con.query(sql2,   function   (err, result)   
{ 
if   (err)   throw   err; 
//console.log("1   record   inserted"+ result.affectedRows); 
console.log(result); 
console.log(result[0].name); 

}); 
})
