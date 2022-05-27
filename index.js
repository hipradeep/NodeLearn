//import /export using common JS

// const nm=require("./src5/std.js");

//remove "type": "module", from package.json to use common js exprt import module 

// console.log(nm);

//import multiple module
// const {name, marks}=require("./src5/std.js");

// console.log(name);

// marks(30, 40);

//-----------------------------
//importing using ES6

//importing single module
// import name from "./src5/std.js";

// console.log(name);

//importing multiple module
import {name, marks} from "./src5/std.js"

console.log(name);

marks(20, 30);