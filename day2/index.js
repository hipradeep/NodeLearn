const {p, pp} = require("./cal");
var  classfun = require('./classfun');
var MyClass = require("./classinnode");

console.log("HI");
console.log(pp());

var s=new classfun();
s.print();

new MyClass("fooBar");
new MyClass("pikachu");

let cin=new MyClass("ji88");
cin.show();