
//NOTE: remove "Type":"Module", from package.json, it uses ES6 formate

const {var_p, function_apple} = require("./cal");


var  classfun = require('./classfun');
var MyClass = require("./classinnode");

console.log(var_p);
console.log(function_apple());

var s=new classfun();
s.print();

new MyClass("fooBar");
new MyClass("pikachu");

let cin=new MyClass("ji88");
cin.show();