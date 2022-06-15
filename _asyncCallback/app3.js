// solve app3 problem with anotherr callback


console.log("Start"); 

//return rocket
function myRocket(rkt, callback) {
    
    setTimeout(
        function () {
            console.log("🕐"); 
             callback(rkt); 
        }, 3000);
}

myRocket("🚀 🚀 🚀", (rkt)=> console.log(rkt)); 


console.log("end"); 