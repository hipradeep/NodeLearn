// solve app4 problem with another callback :: CallBackHell


console.log("Start");

//return rocket
function myRocket(rkt, callback) {
    setTimeout(
        function () {
            console.log("🕐");
            callback(rkt);
        }, 3000);
}

function getCars(car, callback) {
    setTimeout(
        function () {
            console.log("🕐🕐");
          //  callback(['🚗', '🛺', '🚓']);
            callback(car);
        }, 3000);
}
function getBike(bike, callback) {
    setTimeout(
        function () {
            console.log("🕐🕐🕐");
            //callback(['🛵', '🏍', '🚲']);
            callback(bike);
        }, 3000);
}

myRocket("🚀 🚀 🚀", (rkt) => {
    console.log(rkt);
    getCars(rkt, (cars) => {
        console.log(cars);
        getBike(cars, (bike) => console.log(bike));
    });
});

console.log("end"); 