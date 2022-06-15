
console.log("Start"); //e1

//return rocket
function myRocket(rkt){
    
    setTimeout(
        function () {
            console.log("🕐"); //e5
            return rkt; //e6
        }, 3000);
}

let rkt= myRocket("🚀 🚀 🚀"); //e2
console.log(rkt);  //undefined //e3

console.log("end"); //e4