//callback function myFunction will be executed on time-out

// setTimeout(myFunction, 3000);

// function myFunction() {
//   console.log("💪");
// }

//or
console.log("Start");

setTimeout(() => { myFunction("💸💸💸"); }, 3000);

console.log("end");

function myFunction(value) {
    console.log(value);
}