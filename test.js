

//console.log(global)

// setTimeout(() => {
//     console.log(' in the timeout ');
//     clearInterval(int);
// }, 3000);

// const int = setInterval(() => {
//     console.log(' in the interval ');
// }, 1000);


// console.log(__dirname);
// console.log(__filename);


const os = require('os');
console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());
console.log("Home Directory: " + os.homedir());